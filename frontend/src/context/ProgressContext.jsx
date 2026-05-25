import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { useAuth } from './AuthContext'
import { userDataApi } from '../services/api'
import {
  accuracyFromResults,
  averageSecondsPerQuestion,
  buildBadgeCollection,
  buildFakeRanking,
  buildQuizMasterySummary,
  buildRevisionReminders,
  buildSubjectQuizProgressMap,
  buildSpeedScore,
  buildSubjectCompletionMap,
  getDailyChallengeQuestions,
  getLearnerLevel,
  summarizeWeaknesses,
} from '../utils/learning'

const ProgressContext = createContext(null)

// ─── Default shape ────────────────────────────────────────────────────────────
const defaultProgress = {
  completedTopics: {},
  completedProjects: {},
  completedPYQs: {},
  quizResults: {},
  finalTests: {},
  points: 0,
  unlockedBadges: [],
  streak: {
    current: 0,
    lastActiveDate: null,
    activityDates: [],
  },
  notePreferences: {
    important: {},
    saved: {},
    positions: {},
  },
  lastStudied: {},
  mistakes: [],
  dailyChallenges: {},
}

// ─── localStorage helpers (keyed per user so multiple accounts work) ──────────
// Resolve a stable string ID from either { id } (login/signup) or { _id } (legacy /me)
const getUserId = (user) => (user?.id ?? user?._id)?.toString()

const storageKey = (userId) => `pm_progress_${userId}`

const loadLocal = (userId) => {
  if (!userId) return null
  try {
    const raw = localStorage.getItem(storageKey(userId))
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

const saveLocal = (userId, progress) => {
  if (!userId) return
  try {
    localStorage.setItem(storageKey(userId), JSON.stringify(progress))
  } catch {
    // Quota exceeded or private browsing – silently skip
  }
}

const clearLocal = (userId) => {
  if (!userId) return
  try {
    localStorage.removeItem(storageKey(userId))
  } catch {
    // ignore
  }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
const toDateStamp = (value = new Date()) => value.toISOString().slice(0, 10)

const updateStreak = (streak = defaultProgress.streak) => {
  const today = toDateStamp()
  const lastActive = streak.lastActiveDate
  const activityDates = Array.isArray(streak.activityDates) ? streak.activityDates : []

  if (lastActive === today) {
    return { ...streak, activityDates }
  }

  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  const yesterdayStamp = toDateStamp(yesterday)

  return {
    current: lastActive === yesterdayStamp ? (streak.current ?? 0) + 1 : 1,
    lastActiveDate: today,
    activityDates: [today, ...activityDates.filter((d) => d !== today)].slice(0, 30),
  }
}

const normalizeProgress = (stored = {}) => ({
  ...defaultProgress,
  ...stored,
  streak: {
    ...defaultProgress.streak,
    ...(stored?.streak ?? {}),
  },
  notePreferences: {
    ...defaultProgress.notePreferences,
    ...(stored?.notePreferences ?? {}),
  },
  // Ensure these are never undefined on fresh accounts
  completedProjects: stored?.completedProjects ?? {},
  completedPYQs: stored?.completedPYQs ?? {},
})

// ─── Provider ─────────────────────────────────────────────────────────────────
export const ProgressProvider = ({ children }) => {
  const { user } = useAuth()
  const [progress, setProgress] = useState(defaultProgress)
  const [feedback, setFeedback] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // Track pending DB saves so we can retry failed ones
  const pendingSaveRef = useRef(null)
  
  // Track hydration synchronously to prevent race condition overwrites
  const isHydratingRef = useRef(true)
  useEffect(() => {
    isHydratingRef.current = isLoading
  }, [isLoading])

  // ── Persist to DB (with localStorage as immediate backup) ──────────────────
  // We keep a ref to the latest progress so the debounced save always has fresh data.
  const latestProgressRef = useRef(progress)
  useEffect(() => {
    latestProgressRef.current = progress
  }, [progress])

  // ── Load data on login or guest session ────────────────────────────────────
  useEffect(() => {
    let cancelled = false

    const loadUserData = async () => {
      // Synchronously lock the DB while we transition states (login/logout)
      if (user) isHydratingRef.current = true
      
      const userId = user ? getUserId(user) : 'guest'

      // 1. Show localStorage data immediately so the UI is never blank on refresh.
      // For guests, this is their only data source!
      const cached = loadLocal(userId)
      if (cached) {
        const normalized = normalizeProgress(cached)
        if (!cancelled) {
          setProgress(normalized)
          setIsLoading(!user ? false : true) // If guest, we're done loading!
        }
      } else {
        if (!cancelled) {
          setProgress(defaultProgress)
          setIsLoading(!!user)
        }
      }

      if (!user) {
        if (!cancelled) {
          setFeedback([])
          setIsLoading(false)
        }
        return // Guests don't fetch from DB
      }

      // 2. Fetch authoritative data from the database.
      try {
        const { userData } = await userDataApi.getMe()

        if (!cancelled) {
          const normalized = normalizeProgress(userData?.progress)
          const updatedStreak = updateStreak(normalized.streak)
          const streakChanged =
            updatedStreak.lastActiveDate !== (normalized.streak?.lastActiveDate ?? null)
          const finalProgress = { ...normalized, streak: updatedStreak }

          // DB is always source of truth – overwrite local cache with fresh data.
          saveLocal(userId, finalProgress)

          // Silently persist streak bump back to DB if today is a new active day.
          if (streakChanged) {
            userDataApi.saveProgress(finalProgress).catch(() => {
              // If this fails, the streak is still correct in localStorage
              // and will be re-tried the next time any progress is saved.
            })
          }

          setProgress(finalProgress)
          setFeedback(userData?.feedback ?? [])
        }
      } catch {
        if (!cancelled) {
          // DB unreachable – keep showing localStorage data if we have it.
          // If there was no local cache either, show defaults.
          if (!cached) {
            setProgress(defaultProgress)
          }
          setFeedback([])
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false)
        }
      }
    }

    loadUserData()

    return () => {
      cancelled = true
    }
  }, [user])

  // ── Core save helper ───────────────────────────────────────────────────────
  // 1. Immediately write to localStorage (synchronous, never fails).
  // 2. Asynchronously persist to the DB.
  // Returns the next progress value so callers can use it directly.
  const persistToDB = useCallback(
    (nextValue) => {
      const userId = user ? getUserId(user) : 'guest'
      // Write to localStorage first – this is instant and reliable.
      // This works for both logged-in users and guests.
      saveLocal(userId, nextValue)

      // If guest OR still hydrating DB state, we are done! No DB to push to.
      // Blocking DB pushes during hydration is CRITICAL to prevent the badge 
      // effect from wiping the DB with empty guest cache data on first render.
      if (!user || isHydratingRef.current) return

      // Then push to DB. If it fails the data is safe in localStorage and will
      // be written on the next successful save.
      userDataApi.saveProgress(nextValue).catch(() => {
        // Retry once after 3 seconds in case of a transient network error.
        pendingSaveRef.current = setTimeout(() => {
          userDataApi.saveProgress(latestProgressRef.current).catch(() => {})
          pendingSaveRef.current = null
        }, 3000)
      })
    },
    [user],
  )

  // Cleanup any pending retry timer on unmount
  useEffect(() => {
    return () => {
      if (pendingSaveRef.current) clearTimeout(pendingSaveRef.current)
    }
  }, [])

  // ── persistProgress ────────────────────────────────────────────────────────
  // All progress mutations go through this function.
  const persistProgress = useCallback(
    (updater) => {
      // Allow guests to make progress!
      setProgress((current) => {
        const nextValue = normalizeProgress(updater(normalizeProgress(current)))
        persistToDB(nextValue)
        return nextValue
      })
    },
    [user, persistToDB],
  )

  // ── Activity helpers ───────────────────────────────────────────────────────
  const recordLearningActivity = (current, topicKey) => ({
    ...current,
    streak: updateStreak(current.streak),
    lastStudied: topicKey
      ? { ...current.lastStudied, [topicKey]: new Date().toISOString() }
      : current.lastStudied,
  })

  // ── Progress mutators ──────────────────────────────────────────────────────
  const toggleTopicCompletion = (topicKey, completed) => {
    persistProgress((current) => {
      const nextState = {
        ...current,
        completedTopics: { ...current.completedTopics, [topicKey]: completed },
        points: completed
          ? current.points + (current.completedTopics[topicKey] ? 0 : 20)
          : Math.max(0, current.points - (current.completedTopics[topicKey] ? 20 : 0)),
      }
      return recordLearningActivity(nextState, topicKey)
    })
  }

  const toggleProjectCompletion = (projectId, completed) => {
    persistProgress((current) => {
      const nextState = {
        ...current,
        completedProjects: { ...current.completedProjects, [projectId]: completed },
        points: completed
          ? current.points + (current.completedProjects?.[projectId] ? 0 : 50)
          : Math.max(0, current.points - (current.completedProjects?.[projectId] ? 50 : 0)),
      }
      return recordLearningActivity(nextState, `project_${projectId}`)
    })
  }

  const togglePYQCompletion = (pyqId, completed) => {
    persistProgress((current) => {
      const nextState = {
        ...current,
        completedPYQs: { ...current.completedPYQs, [pyqId]: completed },
        points: completed
          ? current.points + (current.completedPYQs?.[pyqId] ? 0 : 30)
          : Math.max(0, current.points - (current.completedPYQs?.[pyqId] ? 30 : 0)),
      }
      return recordLearningActivity(nextState, `pyq_${pyqId}`)
    })
  }

  const toggleImportantNote = (topicKey) => {
    persistProgress((current) => ({
      ...recordLearningActivity(current, topicKey),
      notePreferences: {
        ...current.notePreferences,
        important: {
          ...current.notePreferences.important,
          [topicKey]: !current.notePreferences.important[topicKey],
        },
      },
    }))
  }

  const saveNoteForLater = (topicKey) => {
    persistProgress((current) => ({
      ...recordLearningActivity(current, topicKey),
      notePreferences: {
        ...current.notePreferences,
        saved: {
          ...current.notePreferences.saved,
          [topicKey]: new Date().toISOString(),
        },
      },
    }))
  }

  const saveNotePosition = (topicKey, scrollTop) => {
    persistProgress((current) => ({
      ...current,
      notePreferences: {
        ...current.notePreferences,
        positions: { ...current.notePreferences.positions, [topicKey]: scrollTop },
      },
    }))
  }

  const saveQuizResult = ({ topicKey, level, payload }) => {
    persistProgress((current) => {
      const previousScore = current.quizResults?.[topicKey]?.[level]?.score ?? 0
      const delta = Math.max(0, payload.score - previousScore)
      const nextState = {
        ...current,
        quizResults: {
          ...current.quizResults,
          [topicKey]: { ...(current.quizResults?.[topicKey] ?? {}), [level]: payload },
        },
        mistakes: [...payload.incorrectAnswers, ...current.mistakes].slice(0, 100),
        points: current.points + delta + 10,
      }
      return recordLearningActivity(nextState, topicKey)
    })
  }

  const saveFinalTestResult = ({ topicKey, payload }) => {
    persistProgress((current) => {
      const previousScore = current.finalTests?.[topicKey]?.score ?? 0
      const delta = Math.max(0, payload.score - previousScore)
      const nextState = {
        ...current,
        finalTests: { ...current.finalTests, [topicKey]: payload },
        mistakes: [...payload.incorrectAnswers, ...current.mistakes].slice(0, 100),
        points: current.points + delta + 15,
      }
      return recordLearningActivity(nextState, topicKey)
    })
  }

  const saveDailyChallengeResult = ({ dateKey, payload }) => {
    persistProgress((current) => {
      const nextState = {
        ...current,
        dailyChallenges: { ...current.dailyChallenges, [dateKey]: payload },
        points: current.points + payload.correctAnswers * 4 + 6,
      }
      return recordLearningActivity(nextState)
    })
  }

  const dismissMistake = (mistakeId) => {
    persistProgress((current) => ({
      ...current,
      mistakes: current.mistakes.filter((m) => m.id !== mistakeId),
    }))
  }

  const addXP = useCallback(
    (amount, _source) => {
      if (!amount || amount <= 0) return
      persistProgress((current) => ({
        ...current,
        points: current.points + amount,
        streak: updateStreak(current.streak),
      }))
    },
    [persistProgress],
  )

  const markActivity = useCallback(
    (_subjectId, _activityType) => {
      persistProgress((current) => ({
        ...current,
        streak: updateStreak(current.streak),
      }))
    },
    [persistProgress],
  )

  const submitFeedback = async ({ rating, message }) => {
    if (!user) return { success: false, message: 'You must be logged in to submit feedback.' }
    try {
      const response = await userDataApi.submitFeedback({ rating, message })
      setFeedback(response.feedback ?? [])
      return { success: true, message: response.message }
    } catch (error) {
      return { success: false, message: error.message }
    }
  }

  // ── Derived stats ──────────────────────────────────────────────────────────
  const allResults = [
    ...Object.values(progress.quizResults).flatMap((levels) => Object.values(levels)),
    ...Object.values(progress.finalTests),
    ...Object.values(progress.dailyChallenges),
  ]

  const completedCount = Object.values(progress.completedTopics).filter(Boolean).length
  const accuracy = accuracyFromResults(allResults)
  const averageTimePerQuestion = averageSecondsPerQuestion(allResults)
  const speedScore = buildSpeedScore(averageTimePerQuestion)
  const subjectCompletion = buildSubjectCompletionMap(progress.completedTopics)
  const subjectQuizProgress = buildSubjectQuizProgressMap(progress.quizResults)
  const masterySummary = buildQuizMasterySummary(progress.quizResults)
  const streakDays = progress.streak?.current ?? 0
  const weaknessSummary = summarizeWeaknesses(progress.mistakes)
  const revisionReminders = buildRevisionReminders(progress.lastStudied, progress.completedTopics)
  const learnerLevel = getLearnerLevel(progress.points)
  const fakeRanking = buildFakeRanking({ accuracy, points: progress.points, streakDays })
  const todayKey = toDateStamp()
  const dailyChallenge = {
    dateKey: todayKey,
    questions: getDailyChallengeQuestions(todayKey),
    savedResult: progress.dailyChallenges[todayKey] ?? null,
  }

  const totalQuestionsAnswered = allResults.reduce((sum, r) => sum + (r.totalQuestions ?? 0), 0)
  const perfectQuizzes = allResults.filter(
    (r) => r.totalQuestions > 0 && r.correctAnswers === r.totalQuestions,
  ).length

  const badges = buildBadgeCollection({
    completedCount,
    points: progress.points,
    accuracy,
    subjectCompletion,
    streakDays,
    masterySummary,
    totalQuestionsAnswered,
    perfectQuizzes,
    averageTimePerQuestion,
    accuracyImprovement: 0,
  })

  // ── Badge unlock sync ──────────────────────────────────────────────────────
  // Stable serialised value so the effect only fires on real badge changes.
  const unlockedBadgeIds = badges
    .filter((b) => b.unlocked)
    .map((b) => b.id)
    .join(',')

  useEffect(() => {
    if (!user) return
    const unlockedBadges = unlockedBadgeIds ? unlockedBadgeIds.split(',') : []
    if (JSON.stringify(unlockedBadges) !== JSON.stringify(progress.unlockedBadges ?? [])) {
      persistProgress((current) => ({ ...current, unlockedBadges }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unlockedBadgeIds, user])

  // ── Context value ──────────────────────────────────────────────────────────
  const value = useMemo(
    () => ({
      progress,
      isLoading,
      feedback,
      completedCount,
      accuracy,
      averageTimePerQuestion,
      speedScore,
      badges,
      subjectCompletion,
      subjectQuizProgress,
      masterySummary,
      streakDays,
      weaknessSummary,
      revisionReminders,
      learnerLevel,
      fakeRanking,
      dailyChallenge,
      toggleTopicCompletion,
      toggleProjectCompletion,
      togglePYQCompletion,
      toggleImportantNote,
      saveNoteForLater,
      saveNotePosition,
      saveQuizResult,
      saveFinalTestResult,
      saveDailyChallengeResult,
      dismissMistake,
      submitFeedback,
      addXP,
      markActivity,
    }),
    [
      progress,
      isLoading,
      feedback,
      completedCount,
      accuracy,
      averageTimePerQuestion,
      speedScore,
      badges,
      subjectCompletion,
      subjectQuizProgress,
      masterySummary,
      streakDays,
      weaknessSummary,
      revisionReminders,
      learnerLevel,
      fakeRanking,
      dailyChallenge,
      addXP,
      markActivity,
    ],
  )

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export const useProgress = () => {
  const context = useContext(ProgressContext)
  if (!context) throw new Error('useProgress must be used within ProgressProvider')
  return context
}
