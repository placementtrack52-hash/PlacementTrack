import { memo } from 'react'
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { WeeklyState } from '../../types'
import GlassCard from '../GlassCard'
import LoadingSkeleton from '../LoadingSkeleton'

interface DailyFocusChartProps {
  weekly: WeeklyState
  loading: boolean
}

const colors = ['#10b981', '#34d399', '#22c55e', '#16a34a', '#4ade80', '#6ee7b7', '#22c55e']

const DailyFocusChart = memo(({ weekly, loading }: DailyFocusChartProps) => {
  if (loading) {
    return (
      <GlassCard>
        <LoadingSkeleton className="h-72" />
      </GlassCard>
    )
  }

  return (
    <GlassCard>
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.35em] text-white">Daily Focus Bars</p>
        <h3 className="mt-3 text-xl font-bold text-white">Hours by day</h3>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={weekly.studyHours}>
            <XAxis dataKey="day" stroke="#94a3b8" tickLine={false} axisLine={false} />
            <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} width={36} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#11162a',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 12,
                color: '#fff',
              }}
              formatter={(value: number) => [`${value.toFixed(1)}h`, 'Focus']}
            />
            <Bar dataKey="studyHours" radius={[12, 12, 0, 0]} animationDuration={1000}>
              {weekly.studyHours.map((entry, index) => (
                <Cell key={entry.date} fill={colors[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2 text-xs text-white sm:grid-cols-7">
        {weekly.studyHours.map((entry) => (
          <div key={entry.date} className="text-center">
            {entry.studyHours.toFixed(1)}h
          </div>
        ))}
      </div>
    </GlassCard>
  )
})

DailyFocusChart.displayName = 'DailyFocusChart'

export default DailyFocusChart
