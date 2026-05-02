import { ArrowUpRight, CheckCircle2, Flame } from 'lucide-react'
import { motion } from 'framer-motion'
import { memo } from 'react'
import type { StreakState, ThisWeekState, TodayState } from '../../types'
import GlassCard from '../GlassCard'
import LoadingSkeleton from '../LoadingSkeleton'
import CountUpText from '../CountUpText'

interface StatsGridProps {
  today: TodayState
  streak: StreakState
  thisWeek: ThisWeekState
  loading: boolean
}

const StatsGrid = memo(({ today, streak, thisWeek, loading }: StatsGridProps) => {
  if (loading) {
    return (
      <div className="grid gap-4 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <GlassCard key={index}>
            <LoadingSkeleton className="h-28" />
          </GlassCard>
        ))}
      </div>
    )
  }

  const cards = [
    {
      label: 'Focus Score',
      value: <CountUpText value={today.focusScore} suffix="%" className="text-3xl font-bold text-white" />,
      badge: `+${today.scoreChange}% avg`,
      badgeClass: 'bg-emerald-500/15 text-emerald-300',
      icon: ArrowUpRight,
      iconClass: 'text-emerald-300',
    },
    {
      label: 'Sessions done',
      value: <span className="text-3xl font-bold text-white">{today.sessions}</span>,
      badge: `${thisWeek.completedSessions} tracked this week`,
      badgeClass: 'bg-sky-500/15 text-sky-300',
      icon: CheckCircle2,
      iconClass: 'text-emerald-500',
    },
    {
      label: 'Streak',
      value: <span className="text-3xl font-bold text-white">{streak.days} days</span>,
      badge: 'Active',
      badgeClass: 'bg-orange-500/15 text-orange-300',
      icon: Flame,
      iconClass: 'text-orange-300',
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cards.map((card, index) => {
        const Icon = card.icon
        return (
          <GlassCard key={card.label} className="p-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm text-white">{card.label}</p>
                  <div className="mt-3">{card.value}</div>
                </div>
                <div className="rounded-xl bg-white/5 p-3">
                  <Icon className={`h-5 w-5 ${card.iconClass}`} />
                </div>
              </div>
              <div className={`mt-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${card.badgeClass}`}>
                {card.badge}
              </div>
            </motion.div>
          </GlassCard>
        )
      })}
    </div>
  )
})

StatsGrid.displayName = 'StatsGrid'

export default StatsGrid
