import { format } from 'date-fns'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { memo } from 'react'
import Dashboard from './Dashboard'
import { useRealDashboardData } from '../useRealDashboardData'
import { getSelectedDaySummary } from '../utils'
import { useStudyDashboardStore } from '../useStudyDashboardStore'

interface ProgressOverlayProps {
  isOpen: boolean
  onClose: () => void
}

const ProgressOverlay = memo(({ isOpen, onClose }: ProgressOverlayProps) => {
  const { data, loading } = useRealDashboardData()
  const selectedDate = useStudyDashboardStore((state) => state.selectedDate)
  const currentMonth = useStudyDashboardStore((state) => state.currentMonth)
  const isHydrated = useStudyDashboardStore((state) => state.isHydrated)
  const setSelectedDate = useStudyDashboardStore((state) => state.setSelectedDate)
  const goToPreviousMonth = useStudyDashboardStore((state) => state.goToPreviousMonth)
  const goToNextMonth = useStudyDashboardStore((state) => state.goToNextMonth)

  const todayKey = format(new Date(), 'yyyy-MM-dd')
  const selectedDaySummary = getSelectedDaySummary(selectedDate, data)

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.button
            type="button"
            className="fixed inset-0 z-50 bg-[#020617]/75 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-label="Close progress overlay"
          />
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="study-dashboard fixed inset-4 z-50 overflow-y-auto rounded-[2rem] border border-white/10 bg-[#0a0e1a] shadow-[0_40px_120px_rgba(0,0,0,0.55)]"
            role="dialog"
            aria-modal="true"
            aria-label="Progress analytics"
          >
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-[rgba(10,14,26,0.86)] px-5 py-4 backdrop-blur-xl sm:px-8">
              <div>
                <p className="mt-2 text-xl font-bold text-white">Real Progress</p>
                <h2 className="mt-2 text-2xl font-bold text-white">Your tracked analytics</h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-white/10 bg-white/5 p-2 text-white transition duration-300 hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="px-4 pb-8 pt-6 sm:px-6 lg:px-8">
              <Dashboard
                data={data}
                currentMonth={currentMonth}
                selectedDate={selectedDate}
                today={todayKey}
                selectedDaySummary={selectedDaySummary}
                loading={loading || !isHydrated}
                onSelectDate={(date) => {
                  setSelectedDate(date)
                  const nextMonth = format(date, 'yyyy-MM-01')
                  if (nextMonth !== currentMonth) {
                    useStudyDashboardStore.setState({ currentMonth: nextMonth })
                  }
                }}
                onPrevMonth={goToPreviousMonth}
                onNextMonth={goToNextMonth}
              />
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  )
})

ProgressOverlay.displayName = 'ProgressOverlay'

export default ProgressOverlay
