import { motion } from 'framer-motion'
import { memo } from 'react'
import type { ThisWeekState } from '../../types'
import GlassCard from '../GlassCard'
import LoadingSkeleton from '../LoadingSkeleton'
import { formatHeaderDate } from '../../utils'

interface WeeklyBarChartProps {
  thisWeek: ThisWeekState
  loading: boolean
}

const WeeklyBarChart = memo(({ thisWeek, loading }: WeeklyBarChartProps) => {
  if (loading) {
    return (
      <GlassCard>
        <LoadingSkeleton className="h-64" />
      </GlassCard>
    )
  }

  const currentDay = thisWeek.dailyData[thisWeek.dailyData.length - 1]

  return (
    <GlassCard>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white">This Week</p>
          <h3 className="mt-3 text-2xl font-bold text-white">Progress streak</h3>
        </div>
        <p className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white">
          {formatHeaderDate(currentDay.date)}
        </p>
      </div>

      <div className="mt-8 flex h-52 items-end justify-between gap-3">
        {thisWeek.dailyData.map((entry, index) => {
          const isCurrent = entry.date === currentDay.date
          return (
            <div key={entry.date} className="flex flex-1 flex-col items-center gap-3">
              <span className="text-xs text-white">{entry.completed}%</span>
              <div className="relative flex h-40 w-full items-end justify-center">
                <div className="absolute bottom-0 h-full w-8 rounded-full bg-white/5" />
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${entry.completed}%` }}
                  transition={{ duration: 0.7, delay: index * 0.06 }}
                  className={`relative w-8 rounded-full ${
                    isCurrent
                      ? 'bg-gradient-to-t from-amber-400 via-orange-400 to-yellow-300 shadow-[0_0_24px_rgba(251,191,36,0.45)]'
                      : 'bg-gradient-to-t from-emerald-500 to-green-400'
                  }`}
                />
              </div>
              <span className={`text-sm font-medium ${isCurrent ? 'text-amber-300' : 'text-white'}`}>
                {entry.day}
              </span>
            </div>
          )
        })}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-white">{thisWeek.activeDays}/7 active days</p>
        <div className="flex flex-wrap items-center gap-5 text-sm">
          <span className="text-emerald-300">Completed: {thisWeek.completedSessions} sessions</span>
          <span className="text-white">Remaining: {thisWeek.remainingSessions} sessions</span>
          <span className="flex items-center gap-2 text-white">
            Completion: {thisWeek.completionRate}%
            <span className="flex gap-1">
              {Array.from({ length: 6 }).map((_, index) => (
                <span
                  key={index}
                  className={`h-2 w-2 rounded-full ${index < 5 ? 'bg-emerald-500' : 'bg-white/20'}`}
                />
              ))}
            </span>
          </span>
        </div>
      </div>
    </GlassCard>
  )
})

WeeklyBarChart.displayName = 'WeeklyBarChart'

export default WeeklyBarChart
