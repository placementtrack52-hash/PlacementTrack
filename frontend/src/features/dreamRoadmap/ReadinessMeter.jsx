const ReadinessMeter = ({ score }) => {
  const getScoreColor = (score) => {
    if (score < 40) return 'from-red-400 to-rose-500'
    if (score < 70) return 'from-amber-400 to-orange-500'
    return 'from-emerald-400 to-green-500'
  }

  const getScoreLabel = (score) => {
    if (score < 40) return 'Needs Work'
    if (score < 70) return 'Getting Ready'
    return 'Ready to Interview'
  }

  return (
    <div className="rounded-[1.75rem] bg-white/90 p-6 sm:p-8 shadow-soft ring-1 ring-slate-200/60 dark:bg-zinc-900 dark:ring-zinc-800">
      <h3 className="font-display text-xl font-bold text-ink dark:text-white mb-6">Placement Readiness</h3>
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="flex-1">
          <div className="h-4 w-full overflow-hidden rounded-full bg-[#e7ddd2] dark:bg-zinc-700">
            <div
              className={`h-full rounded-full bg-gradient-to-r ${getScoreColor(score)} transition-all duration-500`}
              style={{ width: `${score}%` }}
            />
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{getScoreLabel(score)}</span>
            <span className="text-2xl font-bold text-ink dark:text-white">{score}%</span>
          </div>
        </div>
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-slate-600 dark:text-slate-400 mb-1">Score</p>
          <p className="text-4xl font-bold text-ink dark:text-white">{score}</p>
        </div>
      </div>
    </div>
  )
}

export default ReadinessMeter
