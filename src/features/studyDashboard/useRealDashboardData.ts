import {
  eachDayOfInterval,
  endOfDay,
  endOfMonth,
  format,
  isWithinInterval,
  parseISO,
  startOfDay,
  startOfMonth,
  subDays,
  subWeeks,
} from 'date-fns'
import { useMemo } from 'react'
import { useAppSelector } from '../../app/hooks'
import { useProgress } from '../../context/ProgressContext'
import { companyCards } from '../companyPrep/companyData'
import { selectOverallCompanyPrepProgress } from '../companyPrep/companyPrepSlice'
import type { ProgressCategory, StudyDashboardData } from './types'
import projectsData from '../../data/projects.json'
import companyPYQData from '../../data/companyPYQIndex.json'

const roundToStep = (value: number, step: number) => Math.ceil(value / step) * step

const safeMinutes = (seconds: number | null | undefined) =>
  seconds ? Math.max(1, Math.round(seconds / 60)) : 0

export const useRealDashboardData = (): { data: StudyDashboardData; loading: boolean } => {
  const {
    progress,
    isLoading,
    accuracy,
    streakDays,
    subjectCompletion,
    subjectQuizProgress,
  } = useProgress() as any
  const companyPrepProgress = useAppSelector(selectOverallCompanyPrepProgress)
  const completedSections = useAppSelector((state) => state.companyPrep.completedSections)

  return useMemo(() => {
    const quizEntries = Object.entries(progress.quizResults || {}).flatMap(([topicKey, levels]: [string, any]) =>
      Object.values(levels || {}).map((payload: any) => ({
        ...payload,
        topicKey,
        subjectId: topicKey.split(':')[0],
        kind: 'quiz',
      })),
    )

    const finalEntries = Object.entries(progress.finalTests || {}).map(([topicKey, payload]: [string, any]) => ({
      ...payload,
      topicKey,
      subjectId: topicKey.split(':')[0],
      kind: 'final',
    }))

    const challengeEntries = Object.values(progress.dailyChallenges || {}).map((payload: any) => ({
      ...payload,
      topicKey: 'daily-challenge',
      subjectId: 'challenge',
      kind: 'challenge',
    }))

    const entries = [...quizEntries, ...finalEntries, ...challengeEntries]
      .filter((entry) => entry?.completedAt)
      .sort((a, b) => new Date(a.completedAt).getTime() - new Date(b.completedAt).getTime())

    const aggregateByDate = entries.reduce<Record<string, { minutes: number; sessions: number }>>(
      (acc, entry) => {
        const dateKey = format(parseISO(entry.completedAt), 'yyyy-MM-dd')
        const current = acc[dateKey] ?? { minutes: 0, sessions: 0 }
        acc[dateKey] = {
          minutes: current.minutes + safeMinutes(entry.timeTakenSeconds),
          sessions: current.sessions + 1,
        }
        return acc
      },
      {},
    )

    const today = new Date()
    const todayKey = format(today, 'yyyy-MM-dd')
    const last7Days = eachDayOfInterval({
      start: startOfDay(subDays(today, 6)),
      end: startOfDay(today),
    })

    const weeklyMinutes = last7Days.map((date) => {
      const dateKey = format(date, 'yyyy-MM-dd')
      return {
        dateKey,
        minutes: aggregateByDate[dateKey]?.minutes ?? 0,
        sessions: aggregateByDate[dateKey]?.sessions ?? 0,
        fullDay: format(date, 'EEEE'),
        day: format(date, 'EEEEE'),
      }
    })

    const activeDays = weeklyMinutes.filter((item) => item.sessions > 0).length
    const totalSessionsThisWeek = weeklyMinutes.reduce((sum, item) => sum + item.sessions, 0)
    const averageActiveMinutes =
      weeklyMinutes.filter((item) => item.minutes > 0).reduce((sum, item) => sum + item.minutes, 0) /
      Math.max(weeklyMinutes.filter((item) => item.minutes > 0).length, 1)

    const adaptiveGoal = Math.max(60, roundToStep(averageActiveMinutes || aggregateByDate[todayKey]?.minutes || 60, 30))
    const previousWeekEntries = entries.filter((entry) =>
      isWithinInterval(parseISO(entry.completedAt), {
        start: startOfDay(subWeeks(today, 2)),
        end: endOfDay(subWeeks(today, 1)),
      }),
    )
    const lastWeekEntries = entries.filter((entry) =>
      isWithinInterval(parseISO(entry.completedAt), {
        start: startOfDay(subWeeks(today, 1)),
        end: endOfDay(today),
      }),
    )

    const previousWeekAccuracy = previousWeekEntries.length
      ? Math.round(
          (previousWeekEntries.reduce((sum, entry) => sum + (entry.correctAnswers ?? 0), 0) /
            Math.max(previousWeekEntries.reduce((sum, entry) => sum + (entry.totalQuestions ?? 0), 0), 1)) *
            100,
        )
      : accuracy
    const scoreChange = Math.max(0, accuracy - previousWeekAccuracy)

    const monthly = Object.entries(aggregateByDate).reduce<Record<string, { hours: number; sessions: number }>>(
      (acc, [dateKey, value]) => {
        acc[dateKey] = {
          hours: Number((value.minutes / 60).toFixed(1)),
          sessions: value.sessions,
        }
        return acc
      },
      {},
    )

    const maxWeekMinutes = Math.max(...weeklyMinutes.map((item) => item.minutes), 1)
    const weeklyStudyHours = weeklyMinutes.map((item) => ({
      day: item.day,
      fullDay: item.fullDay,
      date: item.dateKey,
      studyHours: Number((item.minutes / 60).toFixed(1)),
      breakMinutes: 0,
      sessions: item.sessions,
      active: item.sessions > 0,
    }))

    const bestDay = weeklyStudyHours.reduce(
      (best, current) => (current.studyHours > best.studyHours ? current : best),
      weeklyStudyHours[0] ?? { day: format(today, 'EEEEE'), studyHours: 0 },
    )

    const buildCategory = (subjectId: string): ProgressCategory => {
      const topicSummary = subjectCompletion[subjectId]
      const quizSummary = subjectQuizProgress[subjectId]
      const topicPercent = topicSummary?.totalTopics
        ? Math.round((topicSummary.completedCount / topicSummary.totalTopics) * 100)
        : 0
      const quizPercent = quizSummary?.progressPercent ?? 0
      return {
        key: subjectId,
        label: topicSummary?.subjectName ?? subjectId,
        progressPercent: Math.round((topicPercent + quizPercent) / 2),
        primaryValue: `${topicSummary?.completedCount ?? 0}/${topicSummary?.totalTopics ?? 0} topics`,
        secondaryValue: `${quizSummary?.completedLevels ?? 0}/${quizSummary?.totalLevels ?? 0} quiz levels`,
      }
    }

    const companyCompleted = companyCards.reduce((sum, company) => {
      return (
        sum +
        ['aptitude', 'reasoning', 'verbal', 'technical'].filter(
          (section) => completedSections[`${company.name}-${section}`],
        ).length
      )
    }, 0)

    const completedProjectsCount = Object.values(progress.completedProjects || {}).filter(Boolean).length
    const totalProjects = projectsData.length
    const projectsPercent = totalProjects ? Math.round((completedProjectsCount / totalProjects) * 100) : 0

    const totalPYQs = companyPYQData.reduce((sum, c) => sum + (c.pdfs?.length || 0), 0)
    const completedPYQsCount = Object.values(progress.completedPYQs || {}).filter(Boolean).length
    const pyqsPercent = totalPYQs ? Math.round((completedPYQsCount / totalPYQs) * 100) : 0

    const codeCategory = buildCategory('code')
    codeCategory.label = 'Coding'

    const categoryBreakdown: ProgressCategory[] = [
      buildCategory('aptitude'),
      buildCategory('reasoning'),
      buildCategory('verbal'),
      buildCategory('technical'),
      codeCategory,
      {
        key: 'company',
        label: 'Company Prep',
        progressPercent: companyPrepProgress.progressPercent,
        primaryValue: `${companyCompleted}/${companyPrepProgress.totalCount} sections`,
        secondaryValue: `${companyCards.length} companies tracked`,
      },
      {
        key: 'company-pyq',
        label: 'Company PYQ',
        progressPercent: pyqsPercent,
        primaryValue: `${completedPYQsCount}/${totalPYQs} PDFs`,
        secondaryValue: `${companyPYQData.length} companies`,
      },
      {
        key: 'projects',
        label: 'Projects',
        progressPercent: projectsPercent,
        primaryValue: `${completedProjectsCount}/${totalProjects} projects`,
        secondaryValue: 'Hands-on practice',
      },
    ]

    return {
      data: {
        today: {
          focusTime: aggregateByDate[todayKey]?.minutes ?? 0,
          breakTime: 0,
          goal: adaptiveGoal,
          sessions: aggregateByDate[todayKey]?.sessions ?? 0,
          focusScore: accuracy,
          scoreChange,
        },
        streak: {
          days: streakDays,
          isActive: streakDays > 0,
        },
        thisWeek: {
          dailyData: weeklyMinutes.map((item) => ({
            day: item.day,
            fullDay: item.fullDay,
            date: item.dateKey,
            completed: Math.min(100, Math.round((item.minutes / maxWeekMinutes) * 100)),
            active: item.sessions > 0,
            focusMinutes: item.minutes,
            breakMinutes: 0,
            sessions: item.sessions,
          })),
          activeDays,
          completedSessions: totalSessionsThisWeek,
          remainingSessions: 0,
          completionRate: Math.round((activeDays / 7) * 100),
        },
        weekly: {
          studyHours: weeklyStudyHours,
          breakTime: 0,
          activeDays,
          bestDay: bestDay.day,
        },
        monthly,
        categoryBreakdown,
      },
      loading: isLoading,
    }
  }, [
    accuracy,
    completedSections,
    companyPrepProgress.progressPercent,
    companyPrepProgress.totalCount,
    isLoading,
    progress.dailyChallenges,
    progress.finalTests,
    progress.quizResults,
    progress.completedProjects,
    progress.completedPYQs,
    streakDays,
    subjectCompletion,
    subjectQuizProgress,
  ])
}
