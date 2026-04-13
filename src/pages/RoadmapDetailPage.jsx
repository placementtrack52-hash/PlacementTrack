import { useParams, Link } from 'react-router-dom'
import roadmapData from '../data/roadmap.json'
import PageShell from '../components/PageShell'
import PDFViewer from '../components/PDFViewer'

const RoadmapDetailPage = () => {
  const { type } = useParams()
  const roadmap = roadmapData.find(r => r.type === type)

  if (!roadmap) {
    return (
      <PageShell title="Roadmap Not Found">
        <div className="text-center">
          <p className="text-slate dark:text-slate-300">Roadmap not found.</p>
          <Link to="/roadmap" className="mt-4 inline-block text-moss dark:text-emerald-300">
            Back to Roadmaps
          </Link>
        </div>
      </PageShell>
    )
  }

  return (
    <PageShell
      title={roadmap.title}
      subtitle="Follow this structured learning path to become a proficient developer."
      actions={
        <Link
          to="/roadmap"
          className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink dark:bg-[#172430] dark:text-slate-100"
        >
          Back to Roadmaps
        </Link>
      }
    >
      <PDFViewer
        pdfPath={roadmap.pdf}
        title={`${roadmap.title} Roadmap`}
        downloadText="Download Roadmap PDF"
      />
    </PageShell>
  )
}

export default RoadmapDetailPage