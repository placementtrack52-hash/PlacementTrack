import ProgressBar from './ProgressBar'

const getMessage = (score, totalQuestions) => {
  if (score === totalQuestions) return 'Excellent!'
  if (score >= 3) return 'Good job!'
  return 'Keep practicing!'
}

const ResultCard = ({ result }) => {
  const accuracy = Math.round((result.score / result.totalQuestions) * 100)

  return (
    <section className="rounded-[1.75rem] border border-sky-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(240,249,255,0.96))] p-6 shadow-[0_22px_55px_rgba(14,116,144,0.12)] backdrop-blur-sm dark:border-white/10 dark:bg-zinc-900">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-sky-700 dark:text-sky-300">Instant Feedback</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
            {result.score}/{result.totalQuestions}
          </h2>
          <p className="mt-2 text-lg font-medium text-emerald-700 dark:text-emerald-300">{getMessage(result.score, result.totalQuestions)}</p>
        </div>
        <span className="rounded-full border border-sky-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 dark:border-white/10 dark:bg-zinc-700 dark:text-white">
          {accuracy}% accuracy
        </span>
      </div>

      <div className="mt-5">
        <ProgressBar value={accuracy} />
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-zinc-800">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-white/60">Time taken</p>
          <p className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{result.timeTakenLabel}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-zinc-800">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-white/60">Difficulty</p>
          <p className="mt-2 text-xl font-semibold capitalize text-slate-900 dark:text-white">{result.difficulty}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-zinc-800">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-white/60">Last saved</p>
          <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">{result.savedAtLabel}</p>
        </div>
      </div>
    </section>
  )
}

export default ResultCard
