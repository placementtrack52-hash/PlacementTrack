import { ChevronLeft, ChevronRight } from 'lucide-react'
import { memo, useMemo } from 'react'
import type { MonthlyMap, WeeklyState } from '../../types'
import GlassCard from '../GlassCard'
import LoadingSkeleton from '../LoadingSkeleton'
import CalendarDay from './CalendarDay'
import CompactTimeline from './CompactTimeline'
import Legend from './Legend'
import {
  buildCalendarDays,
  formatMonthLabel,
  getCalendarColor,
  getCalendarHours,
  getDayMetadata,
} from '../../utils'

interface CalendarProps {
  monthly: MonthlyMap
  currentMonth: string
  selectedDate: string
  today: string
  onSelectDate: (date: Date) => void
  onPrevMonth: () => void
  onNextMonth: () => void
  loading: boolean
  weekly?: WeeklyState
}

const Calendar = memo(
  ({
    monthly,
    currentMonth,
    selectedDate,
    today,
    onSelectDate,
    onPrevMonth,
    onNextMonth,
    loading,
    weekly,
  }: CalendarProps) => {
    const days = useMemo(() => buildCalendarDays(currentMonth), [currentMonth])

    if (loading) {
      return (
        <GlassCard className="h-full">
          <LoadingSkeleton className="h-[32rem]" />
        </GlassCard>
      )
    }

    return (
      <GlassCard className="h-full">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white">Monthly Overview</p>
            <h2 className="mt-3 text-2xl font-bold text-white">{formatMonthLabel(currentMonth)}</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onPrevMonth}
              aria-label="Previous month"
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-white transition duration-300 hover:bg-white/10 hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={onNextMonth}
              aria-label="Next month"
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-white transition duration-300 hover:bg-white/10 hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-7 gap-2 text-center text-xs uppercase tracking-[0.25em] text-white">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((item) => (
            <div key={item} className="py-2">
              {item}
            </div>
          ))}
        </div>

        <div className="mt-2 grid grid-cols-7 gap-2">
          {days.map((day) => {
            const metadata = getDayMetadata(day, currentMonth, selectedDate, today)
            const hours = getCalendarHours(monthly, day)
            return (
              <CalendarDay
                key={day.toISOString()}
                date={day}
                hours={hours}
                backgroundColor={getCalendarColor(hours)}
                isCurrentMonth={metadata.isCurrentMonth}
                isSelected={metadata.isSelected}
                isToday={metadata.isToday}
                onSelect={onSelectDate}
              />
            )
          })}
        </div>

        {weekly && (
          <>
            <div className="my-4 border-t border-white/10" />
            <CompactTimeline weekly={weekly} />
          </>
        )}

        <Legend />
      </GlassCard>
    )
  },
)

Calendar.displayName = 'Calendar'

export default Calendar
