import { formatTime } from '../utils/plannerUtils'

const PomodoroTimer = ({ timer, onStart, onPause, onReset }) => {
  const { isRunning, secondsRemaining, sessionsCompleted, isBreak, focusMinutes, breakMinutes } = timer

  // Calculate progress for circular ring
  const totalSeconds = isBreak ? breakMinutes * 60 : focusMinutes * 60
  const progress = ((totalSeconds - secondsRemaining) / totalSeconds) * 100

  // Determine colors based on break/focus
  const ringColor = isBreak ? 'from-blue-400 to-cyan-500' : 'from-emerald-400 to-teal-500'
  const textColor = isBreak ? 'text-cyan-600 dark:text-cyan-400' : 'text-teal-600 dark:text-teal-400'
  const stateLabel = isBreak ? 'Break Time' : 'Focus Time'

  const circumference = 2 * Math.PI * 45 // radius = 45
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="rounded-[1.75rem] bg-white p-5 shadow-soft dark:bg-gradient-to-br dark:from-zinc-900 dark:via-black dark:to-zinc-900">
      <h3 className="font-display text-sm font-semibold text-ink mb-4 dark:text-white">Pomodoro Timer</h3>

      {/* Circular Progress */}
      <div className="flex justify-center mb-6">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-slate-200 dark:text-zinc-700"
            />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#timerGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-500"
            />
            <defs>
              <linearGradient id="timerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="0%"
                  stopColor={isBreak ? '#22d3ee' : '#10b981'}
                />
                <stop
                  offset="100%"
                  stopColor={isBreak ? '#06b6d4' : '#14b8a6'}
                />
              </linearGradient>
            </defs>
          </svg>

          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className={`text-3xl font-bold font-mono ${textColor}`}>
              {formatTime(secondsRemaining)}
            </p>
            <p className="text-xs text-slate mt-1 dark:text-white/60">{stateLabel}</p>
          </div>
        </div>
      </div>

      {/* Session counter */}
      <p className="text-center text-xs text-slate mb-4 dark:text-white/70">
        Sessions: {sessionsCompleted}
      </p>

      {/* Control buttons */}
      <div className="flex gap-2">
        {!isRunning ? (
          <button
            onClick={onStart}
            className="flex-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-3 py-2 text-xs font-semibold text-white transition hover:scale-105 dark:from-emerald-600 dark:to-teal-600"
          >
            Start
          </button>
        ) : (
          <button
            onClick={onPause}
            className="flex-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-2 text-xs font-semibold text-white transition hover:scale-105 dark:from-amber-600 dark:to-orange-600"
          >
            Pause
          </button>
        )}

        <button
          onClick={onReset}
          className="flex-1 rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold text-ink transition hover:bg-slate-50 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default PomodoroTimer
