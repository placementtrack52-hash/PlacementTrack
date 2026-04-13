import { useParams, Link } from 'react-router-dom'
import cheatsheetData from '../data/cheatsheet.json'
import PageShell from '../components/PageShell'

const CheatSheetSubjectPage = () => {
  const { subject: subjectId } = useParams()
  const subjectData = cheatsheetData.find(s => s.subject === subjectId)

  if (!subjectData) {
    return (
      <PageShell title="Subject Not Found">
        <div className="text-center">
          <p className="text-slate dark:text-slate-300">Subject not found.</p>
          <Link to="/cheatsheet" className="mt-4 inline-block text-moss dark:text-emerald-300">
            Back to Cheat Sheets
          </Link>
        </div>
      </PageShell>
    )
  }

  return (
    <PageShell
      title={`${subjectId.charAt(0).toUpperCase() + subjectId.slice(1)} Cheat Sheets`}
      subtitle="Select a topic to view formulas, shortcuts, and examples."
      actions={
        <>
          <Link
            to="/cheatsheet"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink dark:bg-[#172430] dark:text-slate-100"
          >
            Back to Subjects
          </Link>
        </>
      }
    >
      <div className="mb-4 text-sm text-slate dark:text-slate-300">
        <Link to="/cheatsheet" className="text-moss dark:text-emerald-300">Cheat Sheets</Link> &gt; {subjectId.charAt(0).toUpperCase() + subjectId.slice(1)}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {subjectData.topics.map((topic) => (
          <Link
            key={topic.name}
            to={`/cheatsheet/${subjectId}/${topic.name}`}
            className="group rounded-2xl bg-white p-5 shadow-soft transition hover:shadow-lg dark:bg-[#172430] dark:hover:bg-[#1e2936]"
          >
            <h3 className="font-semibold text-ink dark:text-white capitalize">
              {topic.name.replace('-', ' ')}
            </h3>
            <div className="mt-3">
              <span className="inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white group-hover:bg-blue-700">
                View Cheat Sheet
              </span>
            </div>
          </Link>
        ))}
      </div>
    </PageShell>
  )
}

export default CheatSheetSubjectPage