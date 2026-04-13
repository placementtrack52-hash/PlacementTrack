import { Link } from 'react-router-dom'
import ProgressBar from './ProgressBar'

const SubjectCard = ({ subject, progressPercent, completedTopics, totalTopics }) => (
  <div className={`rounded-[1.75rem] bg-gradient-to-br ${subject.color} p-6 shadow-soft`}>
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-slate">{subject.icon}</p>
        <h3 className="mt-3 font-display text-2xl font-bold text-ink">{subject.name}</h3>
        <p className="mt-2 text-sm leading-6 text-slate">{subject.description}</p>
      </div>
      <span className="rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-moss">
        {completedTopics}/{totalTopics} done
      </span>
    </div>
    <div className="mt-6">
      <div className="mb-2 flex items-center justify-between text-sm text-slate">
        <span>Progress</span>
        <span>{progressPercent}%</span>
      </div>
      <ProgressBar value={progressPercent} />
    </div>
    <Link
      to={`/subjects/${subject.id}`}
      className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px]"
    >
      Open subject
    </Link>
  </div>
)

export default SubjectCard
