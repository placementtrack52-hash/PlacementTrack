import { useParams, Link } from 'react-router-dom'
import lastMinuteData from '../data/lastMinute.json'
import PageShell from '../components/PageShell'

const LastMinuteSubjectPage = () => {
  const { subject: subjectId } = useParams()
  const subjectData = lastMinuteData.find(s => s.subject === subjectId)

  if (!subjectData) {
    return (
      <PageShell title="Subject Not Found">
        <div className="text-center">
          <p className="text-slate dark:text-slate-300">Subject not found.</p>
          <Link to="/last-minute" className="mt-4 inline-block text-moss dark:text-emerald-300">
            Back to Last Minute Prep
          </Link>
        </div>
      </PageShell>
    )
  }

  return (
    <PageShell
      title={`${subjectId.charAt(0).toUpperCase() + subjectId.slice(1)} - Last Minute Prep`}
      subtitle="Focus on the most important topics and formulas."
      actions={
        <>
          <Link
            to="/last-minute"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink dark:bg-[#172430] dark:text-slate-100"
          >
            Back to Subjects
          </Link>
        </>
      }
    >
      <div className="mb-4 text-sm text-slate dark:text-slate-300">
        <Link to="/last-minute" className="text-moss dark:text-emerald-300">Last Minute Prep</Link> &gt; {subjectId.charAt(0).toUpperCase() + subjectId.slice(1)}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {subjectData.topics.map((topic) => (
          <Link
            key={topic.name}
            to={`/last-minute/${subjectId}/${topic.name}`}
            className="group rounded-2xl bg-[#fff3cd] p-5 shadow-soft transition hover:shadow-lg dark:bg-[#2a1f18] dark:hover:bg-[#3a2a20]"
          >
            <h3 className="font-semibold text-ink dark:text-white capitalize">
              {topic.name.replace('-', ' ')}
            </h3>
            <p className="mt-2 text-sm text-amber-800 dark:text-amber-200">
              Important formulas and shortcuts
            </p>
            <div className="mt-3">
              <span className="inline-flex items-center rounded-full bg-amber-600 px-3 py-1 text-xs font-medium text-white group-hover:bg-amber-700">
                View Guide
              </span>
            </div>
          </Link>
        ))}
      </div>
    </PageShell>
  )
}

export default LastMinuteSubjectPage