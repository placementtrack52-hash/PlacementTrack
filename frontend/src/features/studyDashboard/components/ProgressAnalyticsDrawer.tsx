import { AnimatePresence, motion } from 'framer-motion'
import { CalendarDays, Flame, Goal, Timer, X } from 'lucide-react'
import { memo, useMemo } from 'react'
import type { StudyDashboardData } from '../types'
import { formatMinutes } from '../utils'

interface ProgressAnalyticsDrawerProps {
  isOpen: boolean
  onClose: () => void
  data: StudyDashboardData
}

const ProgressAnalyticsDrawer = memo(
  ({ isOpen, onClose, data }: ProgressAnalyticsDrawerProps) => {
    const totalMonthlyHours = useMemo(
      () => Object.values(data.monthly).reduce((sum, entry) => sum + entry.hours, 0).toFixed(1),
      [data.monthly],
    )

    return (
      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Close analytics drawer"
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="fixed right-0 top-0 z-50 h-full w-full max-w-md border-l border-white/10 bg-[rgba(10,14,26,0.96)] p-6 shadow-2xl shadow-black/60"
              aria-label="Detailed progress analytics"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white">Analytics</p>
                  <h2 className="mt-3 text-2xl font-bold text-white">Detailed Progress</h2>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-xl border border-white/10 bg-white/5 p-2 text-white transition duration-300 hover:bg-white/10 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-8 grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-3">
                    <Goal className="h-5 w-5 text-emerald-500" />
                    <div>
                      <p className="text-sm text-white">Goal completion</p>
                      <p className="mt-1 text-xl font-semibold text-white">
                        {formatMinutes(data.today.focusTime)} / {formatMinutes(data.today.goal)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-3">
                    <Timer className="h-5 w-5 text-emerald-500" />
                    <div>
                      <p className="text-sm text-white">Total monthly hours</p>
                      <p className="mt-1 text-xl font-semibold text-white">{totalMonthlyHours}h tracked</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-3">
                    <Flame className="h-5 w-5 text-orange-400" />
                    <div>
                      <p className="text-sm text-white">Current streak</p>
                      <p className="mt-1 text-xl font-semibold text-white">{data.streak.days} active days</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-3">
                    <CalendarDays className="h-5 w-5 text-emerald-400" />
                    <div>
                      <p className="text-sm text-white">Weekly completion</p>
                      <p className="mt-1 text-xl font-semibold text-white">
                        {data.thisWeek.completedSessions}/{data.thisWeek.completedSessions + data.thisWeek.remainingSessions} sessions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    )
  },
)

ProgressAnalyticsDrawer.displayName = 'ProgressAnalyticsDrawer'

export default ProgressAnalyticsDrawer
