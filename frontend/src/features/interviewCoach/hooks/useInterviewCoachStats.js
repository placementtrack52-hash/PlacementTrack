import { useMemo, useState, useEffect } from 'react'
import { questionBank } from '../questionBank'
import { resolveCoachSubjectId } from '../utils/subjectKeys'

const COACH_ROUTE_SUBJECTS = [
  { id: 'aptitude', name: 'Aptitude' },
  { id: 'verbal', name: 'Verbal' },
  { id: 'reasoning', name: 'Reasoning' },
  { id: 'technical', name: 'Technical' },
  { id: 'interview-question', name: 'Interview Questions' },
  { id: 'code', name: 'Code Learnings' },
]

const loadCoachStorage = (coachKey) => {
  try {
    const raw = localStorage.getItem(`interviewCoach_${coachKey}`)
    if (!raw) return { totalSessions: 0, history: [] }
    const parsed = JSON.parse(raw)
    return {
      totalSessions: parsed.totalSessions ?? 0,
      history: Array.isArray(parsed.history) ? parsed.history : [],
    }
  } catch {
    return { totalSessions: 0, history: [] }
  }
}

export const getTotalCoachQuestions = () =>
  Object.values(questionBank).reduce((sum, list) => sum + list.length, 0)

export const useInterviewCoachStats = () => {
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const bump = () => setTick((t) => t + 1)
    const onStorage = (e) => {
      if (e.key?.startsWith('interviewCoach_')) bump()
    }
    window.addEventListener('storage', onStorage)
    window.addEventListener('interview-coach-update', bump)
    return () => {
      window.removeEventListener('storage', onStorage)
      window.removeEventListener('interview-coach-update', bump)
    }
  }, [])

  return useMemo(() => {
    const totalQuestions = getTotalCoachQuestions()
    let completedSessions = 0
    let latestScore = null

    COACH_ROUTE_SUBJECTS.forEach(({ id }) => {
      const coachKey = resolveCoachSubjectId(id)
      const { totalSessions, history } = loadCoachStorage(coachKey)
      completedSessions += totalSessions
      if (history[0] && (latestScore === null || history[0].date > latestScore.date)) {
        latestScore = history[0]
      }
    })

    const progressPercent =
      totalQuestions > 0
        ? Math.min(100, Math.round((completedSessions / totalQuestions) * 100))
        : 0

    return {
      totalQuestions,
      completedSessions,
      progressPercent,
      subjectCount: COACH_ROUTE_SUBJECTS.length,
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tick])
}

export { COACH_ROUTE_SUBJECTS }
