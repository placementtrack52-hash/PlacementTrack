import { getLast7Days, getDayNames } from '../utils/plannerUtils'

const StreakTracker = ({ streak }) => {
  const last7Days = getLast7Days()
  const dayNames = getDayNames()
  const today = new Date().toISOString().slice(0, 10)

  return (
    <div className="rounded-[1.75rem] bg-white p-5 shadow-soft dark:bg-gradient-to-br dark:from-zinc-900 dark:via-black dark:to-zinc-900">
      <div className="flex items-center justify-between gap-3 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink dark:text-white">Streak</h3>
        <span className="text-2xl">🔥</span>
      </div>

      <div className="flex gap-2 justify-between mb-4">
        {last7Days.map((day, idx) => {
          const isActive = streak.history?.includes(day)
          const isToday = day === today
          return (
            <div key={day} className="flex flex-col items-center gap-1">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition ${
                  isActive
                    ? 'bg-gradient-to-br from-emerald-400 to-teal-500 text-white scale-110'
                    : 'bg-slate-200 text-slate-500 dark:bg-zinc-700 dark:text-zinc-400'
                } ${isToday ? 'ring-2 ring-emerald-500 animate-pulse' : ''}`}
              >
                ●
              </div>
              <span className="text-xs text-slate dark:text-white/60">{dayNames[idx]}</span>
            </div>
          )
        })}
      </div>

      <p className="text-sm text-ink dark:text-white">
        <span className="font-semibold">{streak.currentDays || 0}-day</span> streak
      </p>
    </div>
  )
}

export default StreakTracker
