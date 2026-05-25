import { Link } from 'react-router-dom'
import ProgressBar from './ProgressBar'

const SubjectCard = ({ subject, progressPercent, completedCount, totalCount, progressLabel = 'levels' }) => (
  <div className={`rounded-[1.75rem] bg-gradient-to-br ${subject.color} p-6 shadow-soft dark:!bg-gradient-to-br dark:!from-zinc-800 dark:!via-zinc-900 dark:!to-zinc-800`}>
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-slate dark:text-white/70">{subject.icon}</p>
        <h3 className="mt-3 font-display text-2xl font-bold text-ink dark:text-white">{subject.name}</h3>
        <p className="mt-2 text-sm leading-6 text-slate dark:text-white/70">{subject.description}</p>
      </div>
      <span className="rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-moss dark:bg-zinc-700 dark:text-emerald-300">
        {completedCount}/{totalCount} done
      </span>
    </div>
    <div className="mt-6">
      <div className="mb-2 flex items-center justify-between text-sm text-slate dark:text-white/70">
        <span>Progress</span>
        <span>{progressPercent}%</span>
      </div>
      <ProgressBar value={progressPercent} />
      <p className="mt-3 text-sm text-slate dark:text-white/70">
        {completedCount}/{totalCount} {progressLabel} completed
      </p>
    </div>
    <div className="mt-6 flex flex-wrap gap-2">
      <Link
        to={`/subjects/${subject.id}`}
        className="inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] dark:bg-white dark:text-black"
      >
        Open subject
      </Link>
      <Link
        to={`/subjects/${subject.id}#interview-coach`}
        className="inline-flex rounded-full border border-indigo-200 bg-white/90 px-4 py-3 text-sm font-semibold text-indigo-700 dark:border-indigo-500/40 dark:bg-zinc-800 dark:text-indigo-200"
      >
        Interview Coach
      </Link>
    </div>
  </div>
)

export default SubjectCard
