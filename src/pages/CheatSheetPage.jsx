import { Link } from 'react-router-dom'
import cheatsheetData from '../data/cheatsheet.json'
import PageShell from '../components/PageShell'

const CheatSheetPage = () => {
  return (
    <PageShell
      title="Cheat Sheets"
      subtitle="Quick reference guides for aptitude, reasoning, and verbal topics."
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
        {cheatsheetData.map((subjectData) => (
          <Link
            key={subjectData.subject}
            to={`/cheatsheet/${subjectData.subject}`}
            className="group rounded-2xl bg-white p-6 shadow-soft transition hover:shadow-lg dark:bg-[#172430] dark:hover:bg-[#1e2936]"
          >
            <h3 className="font-display text-xl font-semibold text-ink dark:text-white capitalize">
              {subjectData.subject}
            </h3>
            <p className="mt-3 text-sm text-slate dark:text-slate-300">
              {subjectData.topics.length} topics available
            </p>
            <div className="mt-4">
              <span className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white group-hover:bg-emerald-700">
                Browse Topics
              </span>
            </div>
          </Link>
        ))}
      </div>
    </PageShell>
  )
}

export default CheatSheetPage