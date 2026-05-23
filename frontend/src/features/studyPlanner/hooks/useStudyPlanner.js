import { useCallback, useEffect, useRef, useState } from 'react'
import { useAuth } from '../../../context/AuthContext'
import { useProgress } from '../../../context/ProgressContext'
import { getToday, getMondayOfWeek, calculateXP, generateId } from '../utils/plannerUtils'

// Get localStorage key for this user + subject
const getPlannerStorageKey = (userId, subjectId) => `pm_planner_${userId}_${subjectId}`

// Default planner state
const createDefaultPlanner = () => ({
  tasks: [],
  pomodoroSession: {
    isRunning: false,
    secondsRemaining: 1500, // 25 minutes
    sessionsCompleted: 0,
    focusMinutes: 25,
    breakMinutes: 5,
    longBreakMinutes: 15,
    isBreak: false,
    lastSessionTime: null,
    todaySessionCount: 0,
  },
  dailyGoal: {
    targetMinutes: 60,
    completedMinutes: 0,
    lastResetDate: getToday(),
  },
  weeklyGoal: {
    targetLevelCompletions: 10,
    completedCount: 0,
    weekStartDate: getMondayOfWeek(),
  },
  streak: {
    currentDays: 0,
    lastActiveDate: null,
    history: [],
  },
})

// Load planner from localStorage
const loadPlanner = (userId, subjectId) => {
  if (!userId) return null
  try {
    const key = getPlannerStorageKey(userId, subjectId)
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null
  } catch {
    return null
  }
}

// Save planner to localStorage
const savePlanner = (userId, subjectId, planner) => {
  if (!userId) return
  try {
    const key = getPlannerStorageKey(userId, subjectId)
    localStorage.setItem(key, JSON.stringify(planner))
  } catch {
    // Quota exceeded or private browsing
  }
}

export const useStudyPlanner = (subjectId, onXpEarned) => {
  const { user } = useAuth()
  const { persistProgress, progress } = useProgress()
  const [planner, setPlanner] = useState(createDefaultPlanner())
  const [isLoading, setIsLoading] = useState(true)

  const userId = user?.id ?? user?._id ?? 'guest'
  const timerIntervalRef = useRef(null)
  const saveDebouncedRef = useRef(null)

  // Load planner on mount or user/subjectId change
  useEffect(() => {
    const loaded = loadPlanner(userId, subjectId)
    const initial = loaded ? { ...createDefaultPlanner(), ...loaded } : createDefaultPlanner()

    // Check if we need to reset daily data (new day)
    const today = getToday()
    if (initial.dailyGoal.lastResetDate !== today) {
      initial.dailyGoal.completedMinutes = 0
      initial.dailyGoal.lastResetDate = today
      initial.pomodoroSession.todaySessionCount = 0
    }

    // Check if we need to reset weekly data (new week)
    const weekStart = getMondayOfWeek()
    if (initial.weeklyGoal.weekStartDate !== weekStart) {
      initial.weeklyGoal.weekStartDate = weekStart
      initial.weeklyGoal.completedCount = 0
    }

    setPlanner(initial)
    setIsLoading(false)
  }, [userId, subjectId])

  // Save planner whenever it changes (debounced)
  useEffect(() => {
    if (isLoading) return

    clearTimeout(saveDebouncedRef.current)
    saveDebouncedRef.current = setTimeout(() => {
      savePlanner(userId, subjectId, planner)
    }, 500)

    return () => clearTimeout(saveDebouncedRef.current)
  }, [planner, userId, subjectId, isLoading])

  // Timer interval effect
  useEffect(() => {
    if (!planner.pomodoroSession.isRunning) return

    timerIntervalRef.current = setInterval(() => {
      setPlanner((prev) => {
        let remaining = prev.pomodoroSession.secondsRemaining - 1

        if (remaining <= 0) {
          // Timer completed
          const isCurrentlyBreak = prev.pomodoroSession.isBreak
          const newSessionsCompleted = isCurrentlyBreak
            ? prev.pomodoroSession.sessionsCompleted
            : prev.pomodoroSession.sessionsCompleted + 1

          const isLongBreak = newSessionsCompleted % 4 === 0 && !isCurrentlyBreak
          const nextBreakMinutes = isLongBreak
            ? prev.pomodoroSession.longBreakMinutes
            : prev.pomodoroSession.breakMinutes
          const nextFocusMinutes = prev.pomodoroSession.focusMinutes

          // Add XP for completed focus session
          if (!isCurrentlyBreak) {
            persistProgress((current) => ({
              ...current,
              points: current.points + 30,
              streak: updateStreakIfNeeded(current.streak),
            }))
            if (onXpEarned) {
              onXpEarned('+30 XP', 'xp')
            }
          }

          return {
            ...prev,
            pomodoroSession: {
              ...prev.pomodoroSession,
              isRunning: false,
              secondsRemaining: isCurrentlyBreak ? nextFocusMinutes * 60 : nextBreakMinutes * 60,
              isBreak: !isCurrentlyBreak,
              sessionsCompleted: newSessionsCompleted,
              todaySessionCount: isCurrentlyBreak
                ? prev.pomodoroSession.todaySessionCount
                : prev.pomodoroSession.todaySessionCount + 1,
              lastSessionTime: new Date().toISOString(),
            },
            dailyGoal: {
              ...prev.dailyGoal,
              completedMinutes: isCurrentlyBreak
                ? prev.dailyGoal.completedMinutes
                : prev.dailyGoal.completedMinutes + prev.pomodoroSession.focusMinutes,
            },
          }
        }

        return {
          ...prev,
          pomodoroSession: {
            ...prev.pomodoroSession,
            secondsRemaining: remaining,
          },
        }
      })
    }, 1000)

    return () => clearInterval(timerIntervalRef.current)
  }, [planner.pomodoroSession.isRunning, persistProgress, onXpEarned])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current)
      if (saveDebouncedRef.current) clearTimeout(saveDebouncedRef.current)
    }
  }, [])

  // Add a new task
  const addTask = useCallback(
    (title, topicId, estimatedMinutes, priority) => {
      const xpReward = calculateXP(priority)
      const newTask = {
        id: generateId(),
        title,
        topicId,
        estimatedMinutes,
        priority,
        xpReward,
        completed: false,
        completedAt: null,
      }
      setPlanner((prev) => ({
        ...prev,
        tasks: [...prev.tasks, newTask],
      }))
    },
    []
  )

  // Complete a task
  const completeTask = useCallback(
    (taskId) => {
      setPlanner((prev) => {
        const task = prev.tasks.find((t) => t.id === taskId)
        if (!task || task.completed) return prev

        // Award XP
        persistProgress((current) => ({
          ...current,
          points: current.points + task.xpReward,
          streak: updateStreakIfNeeded(current.streak),
        }))

        // Show toast if callback provided
        if (onXpEarned) {
          onXpEarned(`+${task.xpReward} XP`, 'xp')
        }

        return {
          ...prev,
          tasks: prev.tasks.map((t) =>
            t.id === taskId ? { ...t, completed: true, completedAt: new Date().toISOString() } : t
          ),
          dailyGoal: {
            ...prev.dailyGoal,
            completedMinutes: prev.dailyGoal.completedMinutes + task.estimatedMinutes,
          },
        }
      })
    },
    [persistProgress, onXpEarned]
  )

  // Delete a task
  const deleteTask = useCallback((taskId) => {
    setPlanner((prev) => ({
      ...prev,
      tasks: prev.tasks.filter((t) => t.id !== taskId),
    }))
  }, [])

  // Control Pomodoro
  const startPomodoro = useCallback(() => {
    setPlanner((prev) => ({
      ...prev,
      pomodoroSession: { ...prev.pomodoroSession, isRunning: true },
    }))
  }, [])

  const pausePomodoro = useCallback(() => {
    setPlanner((prev) => ({
      ...prev,
      pomodoroSession: { ...prev.pomodoroSession, isRunning: false },
    }))
  }, [])

  const resetPomodoro = useCallback(() => {
    setPlanner((prev) => ({
      ...prev,
      pomodoroSession: {
        ...prev.pomodoroSession,
        isRunning: false,
        secondsRemaining: prev.pomodoroSession.isBreak
          ? prev.pomodoroSession.breakMinutes * 60
          : prev.pomodoroSession.focusMinutes * 60,
      },
    }))
  }, [])

  // Update goals
  const updateDailyGoal = useCallback((targetMinutes) => {
    setPlanner((prev) => ({
      ...prev,
      dailyGoal: { ...prev.dailyGoal, targetMinutes },
    }))
  }, [])

  const resetDailyGoal = useCallback(() => {
    setPlanner((prev) => ({
      ...prev,
      dailyGoal: {
        ...prev.dailyGoal,
        completedMinutes: 0,
        lastResetDate: getToday(),
      },
    }))
  }, [])

  const updateWeeklyGoal = useCallback((targetCount) => {
    setPlanner((prev) => ({
      ...prev,
      weeklyGoal: { ...prev.weeklyGoal, targetLevelCompletions: targetCount },
    }))
  }, [])

  return {
    planner,
    isLoading,
    addTask,
    completeTask,
    deleteTask,
    startPomodoro,
    pausePomodoro,
    resetPomodoro,
    updateDailyGoal,
    resetDailyGoal,
    updateWeeklyGoal,
  }
}

// Helper to update streak if a new activity happened today
const updateStreakIfNeeded = (streak = {}) => {
  const today = getToday()
  const lastActive = streak.lastActiveDate

  if (lastActive === today) {
    return streak // Already active today
  }

  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  const yesterdayStr = yesterday.toISOString().slice(0, 10)

  const newCurrent = lastActive === yesterdayStr ? (streak.currentDays ?? 0) + 1 : 1
  const newHistory = [today, ...(streak.history ?? [])].slice(0, 30)

  return {
    currentDays: newCurrent,
    lastActiveDate: today,
    history: newHistory,
  }
}
