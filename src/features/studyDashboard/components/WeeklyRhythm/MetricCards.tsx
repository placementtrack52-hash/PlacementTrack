import { BookOpen, Coffee, TrendingUp, Zap } from 'lucide-react'
import { memo } from 'react'
import type { WeeklyState } from '../../types'
import GlassCard from '../GlassCard'
import LoadingSkeleton from '../LoadingSkeleton'
import CountUpText from '../CountUpText'

interface MetricCardsProps {
  weekly: WeeklyState
  loading: boolean
}

const MetricCards = memo(({ weekly, loading }: MetricCardsProps) => {
  if (loading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <GlassCard key={index} className="p-4">
            <LoadingSkeleton className="h-24" />
          </GlassCard>
        ))}
      </div>
    )
  }

  const studyTotal = weekly.studyHours.reduce((sum, entry) => sum + entry.studyHours, 0)
  const metrics = [
    {
      label: 'Study time',
      value: <CountUpText value={studyTotal} suffix="h" decimals={1} className="text-2xl font-bold text-white" />,
      icon: BookOpen,
      iconClass: 'text-emerald-500',
    },
    {
      label: 'Break time',
      value: <CountUpText value={weekly.breakTime / 60} suffix="h" decimals={1} className="text-2xl font-bold text-white" />,
      icon: Coffee,
      iconClass: 'text-rose-300',
    },
    {
      label: 'Active days',
      value: <span className="text-2xl font-bold text-white">{weekly.activeDays}/7</span>,
      icon: Zap,
      iconClass: 'text-emerald-300',
    },
    {
      label: 'Best day',
      value: <span className="text-2xl font-bold text-white">{weekly.bestDay}</span>,
      icon: TrendingUp,
      iconClass: 'text-yellow-300',
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {metrics.map((item) => {
        const Icon = item.icon
        return (
          <GlassCard key={item.label} className="p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm text-white">{item.label}</p>
                <div className="mt-3">{item.value}</div>
              </div>
              <div className="rounded-xl bg-white/5 p-3">
                <Icon className={`h-5 w-5 ${item.iconClass}`} />
              </div>
            </div>
          </GlassCard>
        )
      })}
    </div>
  )
})

MetricCards.displayName = 'MetricCards'

export default MetricCards
