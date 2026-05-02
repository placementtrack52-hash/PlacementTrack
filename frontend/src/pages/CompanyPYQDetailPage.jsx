import { Link, useParams } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext'
import PageShell from '../components/PageShell'
import companies from '../data/companyPYQIndex.json'

const CompanyPYQDetailPage = () => {
  const { company } = useParams()
  const { progress } = useProgress()
  const meta = companies.find((c) => c.slug === company)

  if (!meta) {
    return (
      <PageShell title="Company Not Found">
        <div className="text-center">
          <p className="text-slate-500 dark:text-zinc-400">Company not found.</p>
          <Link to="/subjects/pyq" className="mt-4 inline-block text-emerald-600 dark:text-emerald-400">
            ← Back to Companies
          </Link>
        </div>
      </PageShell>
    )
  }

  return (
    <PageShell
      title={`${meta.displayName} PYQ`}
      subtitle="Select a year to view the Previous Year Questions. View-only — no download allowed."
      actions={
        <Link
          to="/subjects/pyq"
          className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm transition hover:bg-slate-50 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
        >
          ← All Companies
        </Link>
      }
    >
      {/* Company header */}
      <div className="mb-8 flex items-center gap-5">
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${meta.gradient} shadow-lg`}
        >
          <span className="text-xl font-extrabold text-white">{meta.initials}</span>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-ink dark:text-white">{meta.displayName}</h2>
          <p className="text-sm text-slate-400 dark:text-zinc-400">
            Previous Year Questions — click a year to view
          </p>
        </div>
        <span className="ml-auto rounded-full bg-red-100 px-4 py-1.5 text-xs font-bold text-red-600 dark:bg-red-900/30 dark:text-red-400">
          🔒 No Download
        </span>
      </div>

      {/* PDF list */}
      {meta.pdfs.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-[1.75rem] bg-slate-50 py-24 text-center dark:bg-zinc-800">
          <span className="mb-4 text-5xl">📄</span>
          <h3 className="text-xl font-bold text-ink dark:text-white">No PDFs uploaded yet</h3>
          <p className="mt-3 max-w-sm text-sm text-slate-400 dark:text-zinc-400">
            Add PDF files to{' '}
            <code className="rounded bg-slate-200 px-1.5 py-0.5 text-xs dark:bg-zinc-700">
              public/pdfs/pyq/
            </code>{' '}
            and add entries to{' '}
            <code className="rounded bg-slate-200 px-1.5 py-0.5 text-xs dark:bg-zinc-700">
              companyPYQIndex.json
            </code>
            .
          </p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {meta.pdfs.map((pdf) => (
            <Link
              key={pdf.slug}
              to={`/subjects/pyq/${company}/${pdf.slug}`}
              className="group flex flex-col rounded-[1.75rem] bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:bg-zinc-800"
            >
              {/* Icon + year badge */}
              <div className="flex items-start justify-between">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${meta.gradient} shadow-md`}
                >
                  <span className="text-2xl">{progress?.completedPYQs?.[pdf.slug] ? '✅' : '📄'}</span>
                </div>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                  {pdf.year}
                </span>
              </div>

              {/* Title */}
              <p className="mt-4 text-lg font-bold text-ink dark:text-white">{pdf.title}</p>
              <p className="mt-1 text-sm text-slate-400 dark:text-zinc-400">
                {meta.displayName} · Previous Year Questions
              </p>

              {/* CTA */}
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs text-slate-400 dark:text-zinc-500">View only · No download</span>
                <span
                  className={`rounded-full bg-gradient-to-r ${meta.gradient} px-4 py-1.5 text-xs font-bold text-white opacity-0 transition-opacity group-hover:opacity-100`}
                >
                  Open PDF →
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </PageShell>
  )
}

export default CompanyPYQDetailPage
