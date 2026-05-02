import { useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CheckCircle2, Circle } from 'lucide-react'
import { useProgress } from '../context/ProgressContext'
import PageShell from '../components/PageShell'
import companies from '../data/companyPYQIndex.json'

const CompanyPYQSectionPage = () => {
  const { company, section } = useParams()
  const iframeRef = useRef(null)
  const { progress, togglePYQCompletion } = useProgress()

  const companyMeta = companies.find((c) => c.slug === company)
  const pdfMeta = companyMeta?.pdfs?.find((p) => p.slug === section)
  const isCompleted = progress?.completedPYQs?.[section] || false

  if (!companyMeta || !pdfMeta) {
    return (
      <PageShell title="PDF Not Found">
        <div className="text-center">
          <p className="text-slate-500 dark:text-zinc-400">PDF not found.</p>
          <Link
            to={`/subjects/pyq/${company}`}
            className="mt-4 inline-block text-emerald-600 dark:text-emerald-400"
          >
            ← Back to {companyMeta?.displayName ?? 'Company'}
          </Link>
        </div>
      </PageShell>
    )
  }

  return (
    <PageShell
      title={pdfMeta.title}
      subtitle={`${companyMeta.displayName} · View only — right-click and download are disabled.`}
      actions={
        <div className="flex items-center gap-3">
          <button
            onClick={() => togglePYQCompletion(section, !isCompleted)}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold shadow-sm transition-all duration-300 ${
              isCompleted
                ? 'bg-emerald-500 text-white hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-700'
                : 'bg-white text-ink hover:bg-slate-50 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700'
            }`}
          >
            {isCompleted ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-4 w-4 text-slate-400" />}
            {isCompleted ? 'Completed' : 'Mark as Complete'}
          </button>
          <Link
            to={`/subjects/pyq/${company}`}
            className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm transition hover:bg-slate-50 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
          >
            ← Back to {companyMeta.displayName}
          </Link>
        </div>
      }
    >
      <div className="rounded-[1.75rem] overflow-hidden bg-white shadow-soft dark:bg-zinc-800">
        {/* Header bar */}
        <div className="flex items-center justify-between gap-4 border-b border-slate-100 dark:border-zinc-700 px-6 py-4">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${companyMeta.gradient} shadow`}
            >
              <span className="text-lg font-extrabold text-white">{companyMeta.initials}</span>
            </div>
            <div>
              <p className="font-semibold text-ink dark:text-white">{pdfMeta.title}</p>
              <p className="text-xs text-slate-400 dark:text-zinc-400">
                {companyMeta.displayName} · {pdfMeta.year} · View only
              </p>
            </div>
          </div>
          <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600 dark:bg-red-900/30 dark:text-red-400">
            🔒 No Download
          </span>
        </div>

        {/* PDF iframe — toolbar hidden, right-click blocked */}
        <div
          className="relative"
          style={{ height: 'calc(100vh - 280px)', minHeight: '520px' }}
          onContextMenu={(e) => e.preventDefault()}
        >
          <iframe
            ref={iframeRef}
            src={`${pdfMeta.path}#toolbar=0&navpanes=0&scrollbar=1`}
            title={pdfMeta.title}
            className="h-full w-full border-0"
            sandbox="allow-same-origin allow-scripts"
          />
          {/* Transparent overlay — blocks right-click and drag on PDF content */}
          <div
            className="absolute inset-0 z-10"
            onContextMenu={(e) => e.preventDefault()}
            style={{ pointerEvents: 'none' }}
          />
        </div>
      </div>
    </PageShell>
  )
}

export default CompanyPYQSectionPage
