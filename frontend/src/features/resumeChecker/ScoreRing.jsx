const SCORE_TONES = {
  amber: {
    track: 'text-amber-100 dark:text-amber-900/40',
    stroke: '#f59e0b',
    glow: 'shadow-[0_16px_40px_rgba(245,158,11,0.22)]',
  },
  emerald: {
    track: 'text-emerald-100 dark:text-emerald-900/40',
    stroke: '#10b981',
    glow: 'shadow-[0_16px_40px_rgba(16,185,129,0.22)]',
  },
  sky: {
    track: 'text-sky-100 dark:text-sky-900/40',
    stroke: '#0ea5e9',
    glow: 'shadow-[0_16px_40px_rgba(14,165,233,0.22)]',
  },
  violet: {
    track: 'text-violet-100 dark:text-violet-900/40',
    stroke: '#8b5cf6',
    glow: 'shadow-[0_16px_40px_rgba(139,92,246,0.22)]',
  },
}

const ScoreRing = ({ value, size = 164, strokeWidth = 12, tone = 'emerald', label = 'ATS Score' }) => {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const progress = Math.max(0, Math.min(value, 100))
  const offset = circumference - (progress / 100) * circumference
  const theme = SCORE_TONES[tone] ?? SCORE_TONES.emerald

  return (
    <div className={`relative inline-flex items-center justify-center rounded-full bg-white/80 p-3 dark:bg-zinc-900/90 ${theme.glow}`}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className={theme.track}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={theme.stroke}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-bold text-ink dark:text-white">{progress}</span>
        <span className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
          {label}
        </span>
      </div>
    </div>
  )
}

export default ScoreRing
