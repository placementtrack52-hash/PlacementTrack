import { format } from 'date-fns'
import { memo } from 'react'
import { joinClasses } from '../../utils'

interface CalendarDayProps {
  date: Date
  hours: number
  isCurrentMonth: boolean
  isSelected: boolean
  isToday: boolean
  backgroundColor: string
  onSelect: (date: Date) => void
}

const CalendarDay = memo(
  ({ date, hours, isCurrentMonth, isSelected, isToday, backgroundColor, onSelect }: CalendarDayProps) => (
    <button
      type="button"
      onClick={() => onSelect(date)}
      aria-label={`${format(date, 'EEEE, d MMMM yyyy')}, ${hours.toFixed(1)} study hours`}
      aria-pressed={isSelected}
      className={joinClasses(
        'group relative flex aspect-square items-center justify-center rounded-2xl border text-sm font-medium transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#4361ee] focus:ring-offset-2 focus:ring-offset-[#0a0e1a]',
        isCurrentMonth ? 'border-white/5 text-white' : 'border-transparent text-slate-500',
        isSelected ? 'scale-[1.03] shadow-[0_0_0_1px_rgba(255,255,255,0.18)]' : 'hover:scale-[1.02]',
      )}
      style={{ backgroundColor }}
    >
      {isToday ? <span className="absolute inset-1 rounded-[14px] border border-white/90" /> : null}
      <span className="relative z-10">{format(date, 'd')}</span>
    </button>
  ),
)

CalendarDay.displayName = 'CalendarDay'

export default CalendarDay
