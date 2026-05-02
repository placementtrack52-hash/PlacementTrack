import { format } from 'date-fns'
import { useEffect, useMemo, useState } from 'react'
import DashboardErrorBoundary from './ErrorBoundary'
import { DASHBOARD_REFERENCE_DATE } from './mockData'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import ProgressAnalyticsDrawer from './components/ProgressAnalyticsDrawer'
import { useStudyDashboardStore } from './useStudyDashboardStore'
import { getSelectedDaySummary } from './utils'

const StudyDashboardPage = () => {
  const [showContent, setShowContent] = useState(false)
  const data = useStudyDashboardStore((state) => state.data)
  const selectedDate = useStudyDashboardStore((state) => state.selectedDate)
  const currentMonth = useStudyDashboardStore((state) => state.currentMonth)
  const isDrawerOpen = useStudyDashboardStore((state) => state.isDrawerOpen)
  const isHydrated = useStudyDashboardStore((state) => state.isHydrated)
  const setSelectedDate = useStudyDashboardStore((state) => state.setSelectedDate)
  const openDrawer = useStudyDashboardStore((state) => state.openDrawer)
  const closeDrawer = useStudyDashboardStore((state) => state.closeDrawer)
  const goToPreviousMonth = useStudyDashboardStore((state) => state.goToPreviousMonth)
  const goToNextMonth = useStudyDashboardStore((state) => state.goToNextMonth)

  useEffect(() => {
    if (!isHydrated) return

    const timer = window.setTimeout(() => setShowContent(true), 650)
    return () => window.clearTimeout(timer)
  }, [isHydrated])

  const selectedDaySummary = useMemo(
    () => getSelectedDaySummary(selectedDate, data),
    [selectedDate, data],
  )

  return (
    <DashboardErrorBoundary>
      <div className="study-dashboard min-h-screen bg-[#0a0e1a] text-white">
        <Navbar onOpenProgress={openDrawer} />
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute left-[-5%] top-20 h-72 w-72 rounded-full bg-[#4361ee]/18 blur-[120px]" />
          <div className="absolute right-[-10%] top-40 h-96 w-96 rounded-full bg-[#7c3aed]/14 blur-[140px]" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-400/8 blur-[120px]" />
        </div>

        <main className="relative z-10 mx-auto max-w-7xl px-4 pb-12 pt-24 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Study Tracking Dashboard</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Focus, momentum, and weekly rhythm
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                A high-contrast command center for your study hours, streaks, sessions, and calendar patterns.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-300 backdrop-blur-xl">
              Highlighted day: {selectedDaySummary.dateLabel}
            </div>
          </div>

          <Dashboard
            data={data}
            currentMonth={currentMonth}
            selectedDate={selectedDate}
            today={DASHBOARD_REFERENCE_DATE}
            selectedDaySummary={selectedDaySummary}
            loading={!showContent}
            onSelectDate={(date) => {
              setSelectedDate(date)
              const monthString = format(date, 'yyyy-MM-01')
              if (monthString !== currentMonth) {
                useStudyDashboardStore.setState({ currentMonth: monthString })
              }
            }}
            onPrevMonth={goToPreviousMonth}
            onNextMonth={goToNextMonth}
          />
        </main>

        <ProgressAnalyticsDrawer isOpen={isDrawerOpen} onClose={closeDrawer} data={data} />
      </div>
    </DashboardErrorBoundary>
  )
}

export default StudyDashboardPage
