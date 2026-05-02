import { CheckCircle2 } from 'lucide-react'
import { memo } from 'react'
import type { SelectedDaySummary } from '../../types'
import GlassCard from '../GlassCard'
import LoadingSkeleton from '../LoadingSkeleton'
import { formatMinutes } from '../../utils'

interface SelectedDayPanelProps {
  selectedDay: SelectedDaySummary
  loading: boolean
}

const SelectedDayPanel = memo(({ selectedDay, loading }: SelectedDayPanelProps) => {
  if (loading) {
    return (
      <GlassCard>
        <LoadingSkeleton className="h-40" />
      </GlassCard>
    )
  }

  return (
    <GlassCard>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white">Selected Day</p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <h3 className="text-2xl font-bold text-white">{selectedDay.dateLabel}</h3>
            <span
              className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
                selectedDay.isActive
                  ? 'bg-emerald-500/15 text-emerald-300'
                  : 'bg-emerald-500/15 text-white'
              }`}
            >
              <CheckCircle2 className="h-3.5 w-3.5" />
              {selectedDay.isActive ? 'Active' : 'Low activity'}
            </span>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right">
          <p className="text-xs uppercase tracking-[0.25em] text-white">Sessions</p>
          <p className="mt-2 text-xl font-semibold text-white">{selectedDay.sessions}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-white">Study</p>
          <p className="mt-3 text-2xl font-bold text-white">{formatMinutes(selectedDay.studyMinutes)}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-white">Breaks</p>
          <p className="mt-3 text-2xl font-bold text-white">{formatMinutes(selectedDay.breakMinutes)}</p>
        </div>
      </div>
    </GlassCard>
  )
})

SelectedDayPanel.displayName = 'SelectedDayPanel'

export default SelectedDayPanel
