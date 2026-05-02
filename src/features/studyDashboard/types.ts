export interface TodayState {
  focusTime: number
  breakTime: number
  goal: number
  sessions: number
  focusScore: number
  scoreChange: number
}

export interface StreakState {
  days: number
  isActive: boolean
}

export interface WeekProgressDay {
  day: string
  fullDay: string
  date: string
  completed: number
  active: boolean
  focusMinutes: number
  breakMinutes: number
  sessions: number
}

export interface ThisWeekState {
  dailyData: WeekProgressDay[]
  activeDays: number
  completedSessions: number
  remainingSessions: number
  completionRate: number
}

export interface WeeklyStudyDay {
  day: string
  fullDay: string
  date: string
  studyHours: number
  breakMinutes: number
  sessions: number
  active: boolean
}

export interface WeeklyState {
  studyHours: WeeklyStudyDay[]
  breakTime: number
  activeDays: number
  bestDay: string
}

export interface MonthlyDayData {
  hours: number
  sessions: number
}

export type MonthlyMap = Record<string, MonthlyDayData>

export interface StudyDashboardData {
  today: TodayState
  streak: StreakState
  thisWeek: ThisWeekState
  weekly: WeeklyState
  monthly: MonthlyMap
  categoryBreakdown: ProgressCategory[]
}

export interface SelectedDaySummary {
  dateLabel: string
  isActive: boolean
  studyMinutes: number
  breakMinutes: number
  sessions: number
}

export interface ProgressCategory {
  key: string
  label: string
  progressPercent: number
  primaryValue: string
  secondaryValue: string
}
