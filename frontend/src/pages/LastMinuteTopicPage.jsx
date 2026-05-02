import { useParams, Link } from 'react-router-dom'
import lastMinuteData from '../data/lastMinute.json'
import PageShell from '../components/PageShell'
import PDFViewer from '../components/PDFViewer'

const LastMinuteTopicPage = () => {
  const { subject: subjectId, topic: topicName } = useParams()
  const subjectData = lastMinuteData.find(s => s.subject === subjectId)
  const topic = subjectData?.topics.find(t => t.name === topicName)

  if (!topic) {
    return (
      <PageShell title="Topic Not Found">
        <div className="text-center">
          <p className="text-slate dark:text-slate-300">Topic not found.</p>
          <Link to={`/last-minute/${subjectId}`} className="mt-4 inline-block text-moss dark:text-emerald-300">
            Back to {subjectId.charAt(0).toUpperCase() + subjectId.slice(1)}
          </Link>
        </div>
      </PageShell>
    )
  }

  return (
    <PageShell
      title={`${topicName.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} - Last Minute Prep`}
      subtitle={`${subjectId.charAt(0).toUpperCase() + subjectId.slice(1)} - Essential revision material`}
      actions={
        <>
          <Link
            to={`/last-minute/${subjectId}`}
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink dark:bg-[#172430] dark:text-slate-100"
          >
            Back to Topics
          </Link>
        </>
      }
    >
      <div className="mb-4 text-sm text-slate dark:text-slate-300">
        <Link to="/last-minute" className="text-moss dark:text-emerald-300">Last Minute Prep</Link> &gt;{' '}
        <Link to={`/last-minute/${subjectId}`} className="text-moss dark:text-emerald-300">{subjectId.charAt(0).toUpperCase() + subjectId.slice(1)}</Link> &gt; {topicName.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
      </div>
      <div className="rounded-2xl bg-[#fff3cd] p-6 shadow-soft dark:bg-[#2a1f18]">
        <div className="mb-4 rounded-lg bg-amber-100 p-3 dark:bg-amber-900/30">
          <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
            ⚡ Important: Focus on key formulas and shortcuts for quick revision
          </p>
        </div>
        <PDFViewer
          pdfPath={topic.pdf}
          title={`${topicName.replace('-', ' ')} Last Minute Prep`}
          downloadText="Download Guide"
        />
      </div>
    </PageShell>
  )
}

export default LastMinuteTopicPage