const MODE_STYLES = {
  HR: 'bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300',
  Technical: 'bg-sky-50 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300',
  Behavioral: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300',
}

const DIFF_STYLES = {
  Easy: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-300',
  Medium: 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300',
  Hard: 'bg-red-50 text-red-600 dark:bg-red-950/40 dark:text-red-300',
}

const QuestionCard = ({ question, accentColor }) => (
  <div
    className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm dark:border-zinc-700 dark:bg-zinc-900"
    style={{ borderColor: `${accentColor}55` }}
  >
    <div className="flex flex-wrap items-center gap-2">
      <span
        className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${MODE_STYLES[question.mode] ?? MODE_STYLES.Technical}`}
      >
        {question.mode}
      </span>
      <span
        className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${DIFF_STYLES[question.difficulty] ?? DIFF_STYLES.Medium}`}
      >
        {question.difficulty}
      </span>
    </div>
    <p className="mt-3 text-base font-semibold leading-relaxed text-slate-900 dark:text-white">
      {question.question}
    </p>
    {question.tip ? (
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        <span className="font-medium text-slate-700 dark:text-slate-300">Tip: </span>
        {question.tip}
      </p>
    ) : null}
  </div>
)

export default QuestionCard
