import { Building2, Brain, BookOpen, Code2, Sigma } from 'lucide-react'
import { memo } from 'react'
import type { ProgressCategory } from '../types'
import GlassCard from './GlassCard'

interface ProgressBreakdownProps {
  categories: ProgressCategory[]
}

const iconMap = {
  aptitude: Sigma,
  reasoning: Brain,
  verbal: BookOpen,
  technical: Code2,
  company: Building2,
}

const ProgressBreakdown = memo(({ categories }: ProgressBreakdownProps) => (
  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
    {categories.map((category) => {
      const Icon = iconMap[category.key] ?? Building2

      return (
        <GlassCard key={category.key} className="p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm text-white">{category.label}</p>
              <p className="mt-3 text-3xl font-bold text-white">{category.progressPercent}%</p>
            </div>
            <div className="rounded-xl bg-white/5 p-3 text-[#8ea2ff]">
              <Icon className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-green-400"
              style={{ width: `${category.progressPercent}%` }}
            />
          </div>
          <p className="mt-4 text-sm text-white">{category.primaryValue}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white">{category.secondaryValue}</p>
        </GlassCard>
      )
    })}
  </div>
))

ProgressBreakdown.displayName = 'ProgressBreakdown'

export default ProgressBreakdown
