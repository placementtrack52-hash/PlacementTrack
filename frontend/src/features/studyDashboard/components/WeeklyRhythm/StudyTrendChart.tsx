import { memo } from 'react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { WeeklyState } from '../../types'
import GlassCard from '../GlassCard'
import LoadingSkeleton from '../LoadingSkeleton'

interface StudyTrendChartProps {
  weekly: WeeklyState
  loading: boolean
}

const StudyTrendChart = memo(({ weekly, loading }: StudyTrendChartProps) => {
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
        <p className="text-xs uppercase tracking-[0.35em] text-white">Study Hours Trend</p>
        <h3 className="mt-3 text-xl font-bold text-white">Momentum over the week</h3>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={weekly.studyHours}>
            <defs>
              <linearGradient id="studyTrendFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity={0.45} />
                <stop offset="100%" stopColor="#10b981" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
            <XAxis dataKey="day" stroke="#94a3b8" tickLine={false} axisLine={false} />
            <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} width={30} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#11162a',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 12,
                color: '#fff',
              }}
              formatter={(value: number) => [`${value.toFixed(1)}h`, 'Study']}
            />
            <Area
              type="monotone"
              dataKey="studyHours"
              stroke="#10b981"
              strokeWidth={3}
              fill="url(#studyTrendFill)"
              animationDuration={900}
              dot={{ r: 4, strokeWidth: 2, fill: '#0a0e1a', stroke: '#10b981' }}
              activeDot={{ r: 6, fill: '#ffffff', stroke: '#10b981', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </GlassCard>
  )
})

StudyTrendChart.displayName = 'StudyTrendChart'

export default StudyTrendChart
