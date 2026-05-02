const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

const Timer = ({ secondsLeft, totalSeconds, isRunning, onStart, onPause }) => {
  const progressValue = ((totalSeconds - secondsLeft) / totalSeconds) * 100
  const isCritical = secondsLeft <= 60

  return (
    <div className="rounded-[1.5rem] border border-slate-200 bg-white/90 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur-sm dark:border-white/10 dark:bg-zinc-800">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-white/60">Timer</p>
          <p className={`mt-2 text-3xl font-bold ${isCritical ? 'text-rose-600 dark:text-rose-400' : 'text-slate-900 dark:text-white'}`}>
            {formatTime(secondsLeft)}
          </p>
        </div>
        <div className={`h-14 w-14 rounded-2xl border ${isCritical ? 'border-rose-200 bg-rose-50 dark:border-rose-500/30 dark:bg-rose-500/20' : 'border-sky-100 bg-sky-50 dark:border-sky-500/30 dark:bg-sky-500/20'}`} />
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-zinc-700">
        <div
          className={`h-full rounded-full transition-all duration-700 ${
            isCritical ? 'bg-gradient-to-r from-rose-500 to-orange-500' : 'bg-gradient-to-r from-sky-500 to-blue-600'
          }`}
          style={{ width: `${Math.max(0, Math.min(100, progressValue))}%` }}
        />
      </div>
      <div className="mt-4 flex gap-2">
        {!isRunning ? (
          <button
            type="button"
            onClick={onStart}
            disabled={secondsLeft === 0}
            className="flex-1 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 disabled:opacity-50"
          >
            Start
          </button>
        ) : (
          <button
            type="button"
            onClick={onPause}
            className="flex-1 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
          >
            Pause
          </button>
        )}
      </div>
    </div>
  )
}

export default Timer
