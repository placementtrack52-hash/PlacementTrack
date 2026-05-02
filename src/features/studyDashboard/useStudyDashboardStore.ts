import { format } from 'date-fns'
import { create } from 'zustand'
import type { StudyDashboardData } from './types'
import { getMonthNavigation } from './utils'

const createEmptyDashboardData = (): StudyDashboardData => ({
  today: {
    focusTime: 0,
    breakTime: 0,
    goal: 0,
    sessions: 0,
    focusScore: 0,
    scoreChange: 0,
  },
  streak: {
    days: 0,
    isActive: false,
  },
  thisWeek: {
    dailyData: [],
    activeDays: 0,
    completedSessions: 0,
    remainingSessions: 0,
    completionRate: 0,
  },
  weekly: {
    studyHours: [],
    breakTime: 0,
    activeDays: 0,
    bestDay: '',
  },
  monthly: {},
  categoryBreakdown: [],
})

interface StudyDashboardStore {
  data: StudyDashboardData
  selectedDate: string
  currentMonth: string
  isDrawerOpen: boolean
  isHydrated: boolean
  setSelectedDate: (date: Date | string) => void
  goToPreviousMonth: () => void
  goToNextMonth: () => void
  openDrawer: () => void
  closeDrawer: () => void
  setHydrated: (value: boolean) => void
  setData: (data: StudyDashboardData) => void
}

export const useStudyDashboardStore = create<StudyDashboardStore>()((set) => ({
  data: createEmptyDashboardData(),
  selectedDate: format(new Date(), 'yyyy-MM-dd'),
  currentMonth: format(new Date(), 'yyyy-MM-01'),
  isDrawerOpen: false,
  isHydrated: true,
  setSelectedDate: (date) =>
    set({
      selectedDate: typeof date === 'string' ? date : format(date, 'yyyy-MM-dd'),
    }),
  goToPreviousMonth: () =>
    set((state) => ({
      currentMonth: getMonthNavigation(state.currentMonth, 'prev'),
    })),
  goToNextMonth: () =>
    set((state) => ({
      currentMonth: getMonthNavigation(state.currentMonth, 'next'),
    })),
  openDrawer: () => set({ isDrawerOpen: true }),
  closeDrawer: () => set({ isDrawerOpen: false }),
  setHydrated: (value) => set({ isHydrated: value }),
  setData: (data) => set({ data }),
}))
