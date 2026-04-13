import { Link } from 'react-router-dom'
import lastMinuteData from '../data/lastMinute.json'
import PageShell from '../components/PageShell'

const LastMinutePage = () => {
  return (
    <PageShell
      title="Last Minute Preparation"
      subtitle="Essential formulas, tricks, and important questions for quick revision."
      actions={
        <Link
          to="/dashboard"
          className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink dark:bg-[#172430] dark:text-slate-100"
        >
          Back to Dashboard
        </Link>
      }
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {lastMinuteData.map((subjectData) => (
          <Link
            key={subjectData.subject}
            to={`/last-minute/${subjectData.subject}`}
            className="group rounded-2xl bg-white p-6 shadow-soft transition hover:shadow-lg dark:bg-[#172430] dark:hover:bg-[#1e2936]"
          >
            <h3 className="font-display text-xl font-semibold text-ink dark:text-white capitalize">
              {subjectData.subject}
            </h3>
            <p className="mt-3 text-sm text-slate dark:text-slate-300">
              {subjectData.topics.length} important topics
            </p>
            <div className="mt-4">
              <span className="inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white group-hover:bg-blue-700">
                Quick Revision
              </span>
            </div>
          </Link>
        ))}
      </div>
    </PageShell>
  )
}

export default LastMinutePage