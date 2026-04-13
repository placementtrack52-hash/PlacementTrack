import { Link } from 'react-router-dom'
import roadmapData from '../data/roadmap.json'
import PageShell from '../components/PageShell'

const RoadmapPage = () => {
  return (
    <PageShell
      title="Career Roadmaps"
      subtitle="Choose your development path and follow a structured learning journey."
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
        {roadmapData.map((roadmap) => (
          <Link
            key={roadmap.type}
            to={`/roadmap/${roadmap.type}`}
            className="group rounded-2xl bg-white p-6 shadow-soft transition hover:shadow-lg dark:bg-[#172430] dark:hover:bg-[#1e2936]"
          >
            <h3 className="font-display text-xl font-semibold text-ink dark:text-white">
              {roadmap.title}
            </h3>
            <div className="mt-4">
              <span className="inline-flex items-center rounded-full bg-moss px-4 py-2 text-sm font-medium text-white group-hover:bg-moss/90">
                View Roadmap
              </span>
            </div>
          </Link>
        ))}
      </div>
    </PageShell>
  )
}

export default RoadmapPage