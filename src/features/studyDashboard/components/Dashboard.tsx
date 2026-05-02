import { motion } from 'framer-motion'
import { memo } from 'react'
import type { SelectedDaySummary, StudyDashboardData } from '../types'
import DashboardSkeleton from './DashboardSkeleton'
import Calendar from './MonthlyOverview/Calendar'
import CircularProgress from './TodayProgress/CircularProgress'
import StatsGrid from './TodayProgress/StatsGrid'
import WeeklyBarChart from './TodayProgress/WeeklyBarChart'
import DailyFocusChart from './WeeklyRhythm/DailyFocusChart'
import MetricCards from './WeeklyRhythm/MetricCards'
import ProgressBreakdown from './ProgressBreakdown'
import SelectedDayPanel from './WeeklyRhythm/SelectedDayPanel'
import StudyTrendChart from './WeeklyRhythm/StudyTrendChart'
import { formatRangeDate } from '../utils'

interface DashboardProps {
  data: StudyDashboardData
  currentMonth: string
  selectedDate: string
  today: string
  selectedDaySummary: SelectedDaySummary
  loading: boolean
  onSelectDate: (date: Date) => void
  onPrevMonth: () => void
  onNextMonth: () => void
}

const Dashboard = memo(
  ({
    data,
    currentMonth,
    selectedDate,
    today,
    selectedDaySummary,
    loading,
    onSelectDate,
    onPrevMonth,
    onNextMonth,
  }: DashboardProps) => {
    if (loading) {
      return <DashboardSkeleton />
    }

    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
        className="space-y-6"
      >
        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <motion.div variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}>
              <CircularProgress today={data.today} loading={loading} />
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}>
              <StatsGrid today={data.today} streak={data.streak} thisWeek={data.thisWeek} loading={loading} />
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}>
              <WeeklyBarChart thisWeek={data.thisWeek} loading={loading} />
            </motion.div>
          </div>

          <motion.div variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}>
            <Calendar
              monthly={data.monthly}
              currentMonth={currentMonth}
              selectedDate={selectedDate}
              today={today}
              onSelectDate={onSelectDate}
              onPrevMonth={onPrevMonth}
              onNextMonth={onNextMonth}
              loading={loading}
              weekly={data.weekly}
            />
          </motion.div>
        </div>

        <motion.section
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
          className="space-y-6"
        >
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
<p className="text-xs uppercase tracking-[0.35em] text-white">Weekly Rhythm</p>
            <h2 className="mt-3 text-3xl font-bold text-white">Weekly Rhythm</h2>
          </div>
          <p className="text-sm text-white">
              {formatRangeDate(data.weekly.studyHours[0].date, data.weekly.studyHours[data.weekly.studyHours.length - 1].date)}
            </p>
          </div>

          <MetricCards weekly={data.weekly} loading={loading} />

          <ProgressBreakdown categories={data.categoryBreakdown} />

          <div className="grid gap-6 xl:grid-cols-2">
            <StudyTrendChart weekly={data.weekly} loading={loading} />
            <DailyFocusChart weekly={data.weekly} loading={loading} />
          </div>

          <SelectedDayPanel selectedDay={selectedDaySummary} loading={loading} />
        </motion.section>
      </motion.div>
    )
  },
)

Dashboard.displayName = 'Dashboard'

export default Dashboard
