import { useParams, Link } from 'react-router-dom'
import cheatsheetData from '../data/cheatsheet.json'
import PageShell from '../components/PageShell'
import PDFViewer from '../components/PDFViewer'

const CheatSheetTopicPage = () => {
  const { subject: subjectId, topic: topicName } = useParams()
  const subjectData = cheatsheetData.find(s => s.subject === subjectId)
  const topic = subjectData?.topics.find(t => t.name === topicName)

  if (!topic) {
    return (
      <PageShell title="Topic Not Found">
        <div className="text-center">
          <p className="text-slate dark:text-slate-300">Topic not found.</p>
          <Link to={`/cheatsheet/${subjectId}`} className="mt-4 inline-block text-moss dark:text-emerald-300">
            Back to {subjectId.charAt(0).toUpperCase() + subjectId.slice(1)}
          </Link>
        </div>
      </PageShell>
    )
  }

  return (
    <PageShell
      title={`${topicName.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} Cheat Sheet`}
      subtitle={`${subjectId.charAt(0).toUpperCase() + subjectId.slice(1)} - Formulas, shortcuts, and examples`}
      actions={
        <>
          <Link
            to={`/cheatsheet/${subjectId}`}
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink dark:bg-[#172430] dark:text-slate-100"
          >
            Back to Topics
          </Link>
        </>
      }
    >
      <div className="mb-4 text-sm text-slate dark:text-slate-300">
        <Link to="/cheatsheet" className="text-moss dark:text-emerald-300">Cheat Sheets</Link> &gt;{' '}
        <Link to={`/cheatsheet/${subjectId}`} className="text-moss dark:text-emerald-300">{subjectId.charAt(0).toUpperCase() + subjectId.slice(1)}</Link> &gt; {topicName.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
      </div>
      <PDFViewer
        pdfPath={topic.pdf}
        title={`${topicName.replace('-', ' ')} Cheat Sheet`}
        downloadText="Download Cheat Sheet"
      />
    </PageShell>
  )
}

export default CheatSheetTopicPage