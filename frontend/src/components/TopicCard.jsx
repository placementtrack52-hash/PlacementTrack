import { Link } from 'react-router-dom'

const TopicCard = ({ topic, subjectId, completed, onToggle, quizProgress, progressText }) => (
  <div className="rounded-[1.75rem] bg-white p-5 shadow-soft dark:bg-gradient-to-br dark:from-zinc-900 dark:via-black dark:to-zinc-900">
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-moss dark:text-emerald-400">{topic.difficulty}</p>
        <h3 className="mt-2 font-display text-2xl font-semibold text-ink dark:text-white">{topic.name}</h3>
        <p className="mt-2 text-sm text-slate dark:text-white/70">{topic.estimatedMinutes} min learning block</p>
      </div>
      <label className="inline-flex items-center gap-3 rounded-full bg-sand px-4 py-2 text-sm font-medium text-ink dark:bg-white/10 dark:text-white">
        <input
          type="checkbox"
          checked={completed}
          onChange={(event) => onToggle(event.target.checked)}
          className="h-4 w-4 rounded border-ink/20 text-moss focus:ring-moss"
        />
        Mark as completed
      </label>
    </div>
    <div className="mt-5 flex flex-wrap gap-3">
      <Link
        to={`/subjects/${subjectId}/topics/${topic.id}`}
        className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-[#0f1720]"
      >
        Open topic
      </Link>
      <span className="rounded-full border border-black/10 px-4 py-2 text-sm text-slate dark:border-white/10 dark:text-white/70">
        {progressText ?? `Quiz progress: ${quizProgress}/3 levels`}
      </span>
    </div>
  </div>
)

export default TopicCard
