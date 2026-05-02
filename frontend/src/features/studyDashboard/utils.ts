import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  parseISO,
  startOfMonth,
  startOfWeek,
} from 'date-fns'
import type { MonthlyDayData, SelectedDaySummary, StudyDashboardData } from './types'

export const joinClasses = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(' ')

export const formatMinutes = (minutes: number) => {
  const hours = Math.floor(minutes / 60)
  const remaining = minutes % 60
  return `${hours}h ${remaining}m`
}

export const formatMonthLabel = (value: string) => format(parseISO(value), 'MMMM yyyy')
export const formatHeaderDate = (value: string) => format(parseISO(value), 'EEE, d MMM')
export const formatRangeDate = (start: string, end: string) =>
  `${format(parseISO(start), 'dd MMM')} - ${format(parseISO(end), 'dd MMM')}`

export const clampPercent = (value: number) => Math.max(0, Math.min(100, value))

export const buildCalendarDays = (monthString: string) => {
  const monthDate = parseISO(monthString)
  const start = startOfWeek(startOfMonth(monthDate), { weekStartsOn: 0 })
  const end = endOfWeek(endOfMonth(monthDate), { weekStartsOn: 0 })
  return eachDayOfInterval({ start, end })
}

export const getCalendarHours = (monthly: Record<string, MonthlyDayData>, date: Date) =>
  monthly[format(date, 'yyyy-MM-dd')]?.hours ?? 0

export const getCalendarColor = (hours: number) => {
  if (hours < 1) return '#1a1f35'
  if (hours < 2) return '#3b82f6'
  if (hours < 3) return '#2563eb'
  return '#4361ee'
}

export const getSelectedDaySummary = (
  selectedDate: string,
  data: StudyDashboardData,
): SelectedDaySummary => {
  const weeklyMatch = data.weekly.studyHours.find((entry) => entry.date === selectedDate)
  const monthlyMatch = data.monthly[selectedDate]

  const studyMinutes = weeklyMatch
    ? Math.round(weeklyMatch.studyHours * 60)
    : Math.round((monthlyMatch?.hours ?? 0) * 60)
  const breakMinutes = weeklyMatch
    ? weeklyMatch.breakMinutes
    : monthlyMatch
      ? Math.max(10, Math.round(monthlyMatch.hours * 8))
      : 0
  const sessions = weeklyMatch?.sessions ?? monthlyMatch?.sessions ?? 0

  return {
    dateLabel: formatHeaderDate(selectedDate),
    isActive: studyMinutes > 0,
    studyMinutes,
    breakMinutes,
    sessions,
  }
}

export const getMonthNavigation = (monthString: string, direction: 'prev' | 'next') =>
  format(
    addMonths(parseISO(monthString), direction === 'prev' ? -1 : 1),
    'yyyy-MM-01',
  )

export const getDayMetadata = (
  day: Date,
  currentMonth: string,
  selectedDate: string,
  today: string,
) => ({
  isCurrentMonth: isSameMonth(day, parseISO(currentMonth)),
  isSelected: isSameDay(day, parseISO(selectedDate)),
  isToday: isSameDay(day, parseISO(today)),
})
