import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useAuth } from './AuthContext'
import { getData, saveData, updateData } from '../utils/localStorage'
import {
  accuracyFromResults,
  averageSecondsPerQuestion,
  buildBadgeCollection,
  buildFakeRanking,
  buildQuizMasterySummary,
  buildRevisionReminders,
  buildSpeedScore,
  buildSubjectCompletionMap,
  getDailyChallengeQuestions,
  getLearnerLevel,
  summarizeWeaknesses,
} from '../utils/learning'

const ProgressContext = createContext(null)

const buildProgressKey = (email) => `prepMasterProgress:${email}`
const FEEDBACK_KEY = 'prepMasterFeedback'

const defaultProgress = {
  completedTopics: {},
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

const toDateStamp = (value = new Date()) => value.toISOString().slice(0, 10)

const updateStreak = (streak = defaultProgress.streak) => {
  const today = toDateStamp()
  const lastActive = streak.lastActiveDate
  const activityDates = Array.isArray(streak.activityDates) ? streak.activityDates : []

  if (lastActive === today) {
    return {
      ...streak,
      activityDates,
    }
  }

  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  const yesterdayStamp = toDateStamp(yesterday)

  return {
    current: lastActive === yesterdayStamp ? (streak.current ?? 0) + 1 : 1,
    lastActiveDate: today,
    activityDates: [today, ...activityDates.filter((item) => item !== today)].slice(0, 30),
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
})

export const ProgressProvider = ({ children }) => {
  const { user } = useAuth()
  const [progress, setProgress] = useState(defaultProgress)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!user) {
      setProgress(defaultProgress)
      setIsLoading(false)
      return
    }

    const stored = getData(buildProgressKey(user.email), defaultProgress)
    setProgress(normalizeProgress(stored))
    setIsLoading(false)
  }, [user])

  const persistProgress = (updater) => {
    if (!user) return
    const key = buildProgressKey(user.email)
    const nextValue = updateData(key, (current) => updater(normalizeProgress(current)), defaultProgress)
    setProgress(nextValue)
  }

  const recordLearningActivity = (current, topicKey) => ({
    ...current,
    streak: updateStreak(current.streak),
    lastStudied: topicKey
      ? {
          ...current.lastStudied,
          [topicKey]: new Date().toISOString(),
        }
      : current.lastStudied,
  })

  const toggleTopicCompletion = (topicKey, completed) => {
    persistProgress((current) => {
      const nextState = {
        ...current,
        completedTopics: {
          ...current.completedTopics,
          [topicKey]: completed,
        },
        points: completed
          ? current.points + (current.completedTopics[topicKey] ? 0 : 20)
          : Math.max(0, current.points - (current.completedTopics[topicKey] ? 20 : 0)),
      }

      return recordLearningActivity(nextState, topicKey)
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
        positions: {
          ...current.notePreferences.positions,
          [topicKey]: scrollTop,
        },
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
          [topicKey]: {
            ...(current.quizResults?.[topicKey] ?? {}),
            [level]: payload,
          },
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
        finalTests: {
          ...current.finalTests,
          [topicKey]: payload,
        },
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
        dailyChallenges: {
          ...current.dailyChallenges,
          [dateKey]: payload,
        },
        points: current.points + payload.correctAnswers * 4 + 6,
      }

      return recordLearningActivity(nextState)
    })
  }

  const submitFeedback = ({ rating, message }) => {
    if (!user) return

    const nextFeedback = {
      id: crypto.randomUUID(),
      userEmail: user.email,
      userName: user.name,
      rating,
      message,
      createdAt: new Date().toISOString(),
    }

    const current = getData(FEEDBACK_KEY, [])
    saveData(FEEDBACK_KEY, [nextFeedback, ...current])
  }

  const feedback = getData(FEEDBACK_KEY, []).filter((item) => (user ? item.userEmail === user.email : true))

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

  const badges = buildBadgeCollection({
    completedCount,
    points: progress.points,
    accuracy,
    subjectCompletion,
    streakDays,
    masterySummary,
  })

  useEffect(() => {
    if (!user) return

    const unlockedBadges = badges.filter((badge) => badge.unlocked).map((badge) => badge.id)
    if (JSON.stringify(unlockedBadges) !== JSON.stringify(progress.unlockedBadges ?? [])) {
      persistProgress((current) => ({
        ...current,
        unlockedBadges,
      }))
    }
  }, [badges, progress.unlockedBadges, user])

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
      masterySummary,
      streakDays,
      weaknessSummary,
      revisionReminders,
      learnerLevel,
      fakeRanking,
      dailyChallenge,
      toggleTopicCompletion,
      toggleImportantNote,
      saveNoteForLater,
      saveNotePosition,
      saveQuizResult,
      saveFinalTestResult,
      saveDailyChallengeResult,
      submitFeedback,
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
      masterySummary,
      streakDays,
      weaknessSummary,
      revisionReminders,
      learnerLevel,
      fakeRanking,
      dailyChallenge,
    ],
  )

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export const useProgress = () => {
  const context = useContext(ProgressContext)
  if (!context) throw new Error('useProgress must be used within ProgressProvider')
  return context
}
