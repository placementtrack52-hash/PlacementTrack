const scoreTone = (score) => {
  if (score >= 75) return { text: 'text-emerald-600', bg: 'bg-emerald-50', ring: '#10b981' }
  if (score >= 50) return { text: 'text-amber-600', bg: 'bg-amber-50', ring: '#f59e0b' }
  return { text: 'text-red-500', bg: 'bg-red-50', ring: '#ef4444' }
}

const ScoreCard = ({ label, score }) => {
  const tone = scoreTone(score)
  return (
    <div
      className={`rounded-2xl border border-gray-100 p-3 text-center shadow-sm dark:border-zinc-700 dark:bg-zinc-900 ${tone.bg}`}
    >
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
        {label}
      </p>
      <p className={`mt-1 text-2xl font-bold ${tone.text}`}>{score}</p>
    </div>
  )
}

const ScoreDisplay = ({ scores, accentColor, bonusApplied }) => {
  if (!scores) return null

  const overallTone = scoreTone(scores.overall)
  const circumference = 2 * Math.PI * 36
  const offset = circumference - (scores.overall / 100) * circumference

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
      <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
        <div className="relative flex h-28 w-28 shrink-0 items-center justify-center">
          <svg className="h-28 w-28 -rotate-90" viewBox="0 0 80 80">
            <circle
              cx="40"
              cy="40"
              r="36"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="8"
              className="dark:stroke-zinc-700"
            />
            <circle
              cx="40"
              cy="40"
              r="36"
              fill="none"
              stroke={accentColor || overallTone.ring}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              className="transition-all duration-500"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-2xl font-bold ${overallTone.text}`}>{scores.overall}</span>
            <span className="text-xs text-slate-500">Overall</span>
          </div>
        </div>
        <div className="grid w-full flex-1 grid-cols-3 gap-2">
          <ScoreCard label="Keywords" score={scores.keywordScore} />
          <ScoreCard label="Clarity" score={scores.clarityScore} />
          <ScoreCard label="Depth" score={scores.depthScore} />
        </div>
      </div>
      {bonusApplied ? (
        <p className="mt-3 text-center text-sm font-semibold text-emerald-600 dark:text-emerald-400">
          Quick thinker! +5 bonus applied
        </p>
      ) : null}
    </div>
  )
}

export default ScoreDisplay
