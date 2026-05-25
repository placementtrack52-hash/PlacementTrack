const chipClass = (score) => {
  if (score >= 75) return 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-300 dark:border-emerald-800'
  if (score >= 50) return 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/30 dark:text-amber-300 dark:border-amber-800'
  return 'bg-red-50 text-red-600 border-red-200 dark:bg-red-950/30 dark:text-red-400 dark:border-red-800'
}

const SessionHistory = ({ history = [] }) => {
  const recent = history.slice(0, 5)

  if (!recent.length) {
    return (
      <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
        <p className="text-sm text-slate-500 dark:text-slate-400">No sessions yet. Submit your first answer!</p>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
      <p className="text-sm font-semibold text-slate-800 dark:text-white">Recent sessions</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {recent.map((entry, index) => (
          <span
            key={`${entry.questionId}-${entry.date}-${index}`}
            className={`rounded-full border px-3 py-1 text-xs font-semibold ${chipClass(entry.score)}`}
          >
            {entry.label ?? entry.questionId} — {entry.score}%
          </span>
        ))}
      </div>
    </div>
  )
}

export default SessionHistory
