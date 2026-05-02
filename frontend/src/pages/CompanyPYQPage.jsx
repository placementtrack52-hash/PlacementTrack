import { Link } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext'
import companies from '../data/companyPYQIndex.json'
import PageShell from '../components/PageShell'

const CompanyPYQPage = () => {
  const { progress } = useProgress()
  
  const totalPYQs = companies.reduce((sum, c) => sum + c.pdfs.length, 0)
  const completedPYQsCount = Object.keys(progress?.completedPYQs || {}).filter(
    (k) => progress.completedPYQs[k]
  ).length
  const progressPercent = Math.round((completedPYQsCount / totalPYQs) * 100) || 0

  return (
    <PageShell
      title="Company PYQ"
      subtitle="Previous Year Questions from top companies — practice MCQs section-wise. No downloads."
      actions={
        <Link
          to="/subjects"
          className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm transition hover:bg-slate-50 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
        >
          ← Back to Subjects
        </Link>
      }
    >
      {/* Progress Banner */}
      <div className="mb-8 overflow-hidden rounded-2xl bg-white p-6 shadow-soft dark:bg-zinc-800 border border-slate-100 dark:border-white/5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 mb-2 rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Company Mastery
            </div>
            <h3 className="font-display text-xl font-bold text-ink dark:text-white">PYQ Progress</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-zinc-400">
              Solve {totalPYQs} Previous Year Question sets across {companies.length} top companies.
            </p>
          </div>
          
          <div className="flex-1 lg:max-w-md">
            <div className="mb-2 flex items-center justify-between text-xs font-semibold">
              <span className="text-slate-500 dark:text-zinc-400">Completion</span>
              <span className="text-amber-600 dark:text-amber-400">{completedPYQsCount}/{totalPYQs} Completed</span>
            </div>
            <div className="flex h-3 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-zinc-700 shadow-inner">
              <div 
                style={{ width: `${progressPercent}%` }} 
                className="bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-500" 
              />
            </div>
            <p className="mt-3 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 text-right">
              {progressPercent}% Mastered
            </p>
          </div>
        </div>
      </div>

      {/* Company grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {companies.map((company) => (
          <Link
            key={company.slug}
            to={`/subjects/pyq/${company.slug}`}
            className="group relative flex flex-col items-center rounded-[1.75rem] bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:bg-zinc-800 dark:hover:bg-zinc-700"
          >
            {/* Avatar */}
            <div
              className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${company.gradient} shadow-md`}
            >
              <span className="text-xl font-extrabold tracking-tight text-white">
                {company.initials}
              </span>
            </div>

            {/* Name */}
            <p className="text-center text-base font-bold text-ink dark:text-white">
              {company.displayName}
            </p>
            <p className="mt-1 text-center text-xs text-slate-400 dark:text-zinc-400">
              Aptitude · Reasoning · Verbal · Tech
            </p>

            {/* CTA */}
            <span
              className={`mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-gradient-to-r ${company.gradient} px-4 py-2.5 text-sm font-semibold text-white opacity-0 transition-all duration-200 group-hover:opacity-100`}
            >
              Practice Now →
            </span>
            <span className="mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-ink transition-all duration-200 group-hover:hidden dark:border-zinc-600 dark:text-white">
              View Questions
            </span>
          </Link>
        ))}
      </div>
    </PageShell>
  )
}

export default CompanyPYQPage
