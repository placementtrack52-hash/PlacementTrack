import { motion } from 'framer-motion'
import { memo, useMemo } from 'react'
import CountUpText from '../CountUpText'
import GlassCard from '../GlassCard'
import LoadingSkeleton from '../LoadingSkeleton'
import { clampPercent, formatMinutes } from '../../utils'
import type { TodayState } from '../../types'

interface CircularProgressProps {
  today: TodayState
  loading: boolean
}

const CircularProgress = memo(({ today, loading }: CircularProgressProps) => {
  const progress = useMemo(
    () => clampPercent((today.focusTime / today.goal) * 100),
    [today.focusTime, today.goal],
  )

  const radius = 84
  const circumference = 2 * Math.PI * radius
  const dashOffset = circumference - (progress / 100) * circumference

  if (loading) {
    return (
      <GlassCard className="min-h-[25rem]">
        <LoadingSkeleton className="mx-auto h-52 w-52 rounded-full" />
        <div className="mt-8 grid grid-cols-3 gap-3">
          <LoadingSkeleton className="h-24" />
          <LoadingSkeleton className="h-24" />
          <LoadingSkeleton className="h-24" />
        </div>
      </GlassCard>
    )
  }

  return (
    <GlassCard className="min-h-[25rem]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white">Today&apos;s Progress</p>
          <h2 className="mt-3 text-2xl font-bold text-white">Goal rhythm</h2>
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white">
          Synced live
        </div>
      </div>

      <div className="relative mt-8 flex justify-center">
        <div className="absolute h-48 w-48 rounded-full bg-gradient-to-br from-emerald-500/30 to-green-400/20 blur-3xl" />
        <svg viewBox="0 0 220 220" className="relative h-60 w-60" aria-label="Study progress ring">
          <defs>
            <linearGradient id="progressStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
          </defs>
          <circle cx="110" cy="110" r={radius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="14" />
          <motion.circle
            cx="110"
            cy="110"
            r={radius}
            fill="none"
            stroke="url(#progressStroke)"
            strokeWidth="14"
            strokeLinecap="round"
            transform="rotate(-90 110 110)"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: dashOffset }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-4xl font-bold text-white">{formatMinutes(today.focusTime)}</p>
          <p className="mt-2 text-sm text-white">of {formatMinutes(today.goal)} goal</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase tracking-[0.25em] text-white">Focus</p>
          <p className="mt-3 text-xl font-semibold text-white">{formatMinutes(today.focusTime)}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase tracking-[0.25em] text-white">Break</p>
          <p className="mt-3 text-xl font-semibold text-white">{formatMinutes(today.breakTime)}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs uppercase tracking-[0.25em] text-white">Progress</p>
            <CountUpText value={progress} suffix="%" className="text-xl font-semibold text-white" />
          </div>
          <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-green-400"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>
    </GlassCard>
  )
})

CircularProgress.displayName = 'CircularProgress'

export default CircularProgress
