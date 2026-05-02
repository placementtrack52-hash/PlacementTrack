import { memo } from 'react'
import { motion } from 'framer-motion'
import type { WeeklyState } from '../../types'

interface CompactTimelineProps {
  weekly: WeeklyState
}

const CompactTimeline = memo(({ weekly }: CompactTimelineProps) => {
  const totalHours = weekly.studyHours.reduce((sum, d) => sum + d.studyHours, 0)
  const maxHours = Math.max(...weekly.studyHours.map((d) => d.studyHours), 1)
  const avgHours = totalHours / weekly.studyHours.length

  return (
    <div className="space-y-3">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-white">This Week</p>
        <h3 className="mt-3 text-2xl font-bold text-white">Study Timeline</h3>
      </div>

      <div className="flex h-48 items-end justify-between gap-2">
        {weekly.studyHours.map((day, index) => {
          const heightPercent = (day.studyHours / maxHours) * 100
          const isHighPerformer = day.studyHours >= avgHours

          return (
            <div key={day.date} className="flex flex-1 flex-col items-center gap-1">
              <span className="text-xs text-white">{day.studyHours.toFixed(1)}h</span>
              <div className="relative flex h-36 w-full items-end justify-center">
                <div className="absolute bottom-0 h-full w-7 rounded-full bg-white/10" />
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${Math.max(heightPercent, 5)}%` }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`relative w-7 rounded-full ${
                    isHighPerformer
                      ? 'bg-gradient-to-t from-emerald-500 to-green-400'
                      : 'bg-gradient-to-t from-emerald-600 to-emerald-500'
                  }`}
                />
              </div>
              <span className="text-sm font-medium text-white">{day.day}</span>
            </div>
          )
        })}
      </div>

      <div className="flex items-center justify-between border-t border-white/10 pt-2">
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-wider text-white/60">Avg</p>
          <p className="text-xs font-bold text-white">{avgHours.toFixed(1)}h</p>
        </div>
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-wider text-white/60">Best</p>
          <p className="text-xs font-bold text-emerald-400">{weekly.bestDay}</p>
        </div>
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-wider text-white/60">Active</p>
          <p className="text-xs font-bold text-white">{weekly.activeDays}/7</p>
        </div>
      </div>
    </div>
  )
})

CompactTimeline.displayName = 'CompactTimeline'

export default CompactTimeline
