import { getFeedback } from '../utils/scoringEngine'

const pillClass = (hit) =>
  hit
    ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-300'
    : 'bg-red-50 text-red-500 dark:bg-red-950/40 dark:text-red-300'

const FeedbackPanel = ({ question, scores }) => {
  if (!scores || !question) return null

  const overallFb = getFeedback(scores.overall)

  const labelColor =
    overallFb.color === 'green'
      ? 'text-emerald-600'
      : overallFb.color === 'amber'
        ? 'text-amber-600'
        : 'text-red-500'

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
        <p className={`text-sm font-semibold ${labelColor}`}>
          {overallFb.label} — {overallFb.msg}
        </p>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
        <p className="text-sm font-semibold text-slate-800 dark:text-white">Keyword coverage</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {question.keywords.map((kw) => {
            const hit = scores.foundKeywords?.includes(kw)
            return (
              <span
                key={kw}
                className={`rounded-full px-3 py-1 text-xs font-medium ${pillClass(hit)}`}
              >
                {kw}
              </span>
            )
          })}
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50/80 p-4 dark:border-emerald-900/40 dark:bg-emerald-950/20">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
            Strength
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{question.strengthMsg}</p>
        </div>
        <div className="rounded-2xl border border-amber-100 bg-amber-50/80 p-4 dark:border-amber-900/40 dark:bg-amber-950/20">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-400">
            Improve
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{question.improveMsg}</p>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-slate-50 p-4 dark:border-zinc-700 dark:bg-zinc-950">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Model answer
        </p>
        <p className="mt-2 text-sm leading-relaxed text-slate-800 dark:text-slate-200">
          {question.modelAnswer}
        </p>
      </div>
    </div>
  )
}

export default FeedbackPanel
