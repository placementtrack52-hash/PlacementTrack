import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import currentAffairs from '../data/currentAffairs.json'

const CurrentAffairsPage = () => {
  return (
    <PageShell
      title="Current Affairs"
      subtitle="Stay updated with the latest national, international, and economic news"
      actions={
        <Link
          to="/subjects"
          className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm transition hover:bg-slate-50 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
        >
          ← Back to Subjects
        </Link>
      }
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {currentAffairs.map((category) => (
          <Link
            key={category.id}
            to={`/subjects/current-affairs/${category.id}`}
            className={`group rounded-[1.75rem] bg-gradient-to-br ${category.color} p-6 shadow-soft transition-all hover:translate-y-[-2px] hover:shadow-lg dark:!bg-gradient-to-br dark:!from-zinc-800 dark:!to-zinc-800 dark:!via-zinc-900`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-slate dark:text-white/70">
                  {category.icon}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold text-ink dark:text-white">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate dark:text-white/70">
                  {category.description}
                </p>
              </div>
              <span className="rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-moss dark:bg-zinc-700 dark:text-emerald-300">
                {category.quickFacts.length} facts
              </span>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm text-slate dark:text-white/70">
                {category.headlines.length} headlines
              </span>
              <span className="inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition group-hover:translate-y-[-1px] dark:bg-white dark:text-black">
                Read →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </PageShell>
  )
}

export default CurrentAffairsPage
