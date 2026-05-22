import { useCallback, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { FileSearch, Sparkles, Target } from 'lucide-react'
import PageShell from '../components/PageShell'
import ResumeInsightsDashboard from '../features/resumeChecker/ResumeInsightsDashboard'
import ResumeUploadPanel from '../features/resumeChecker/ResumeUploadPanel'
import { resumeApi } from '../services/api'

const ACCEPTED_TYPES = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

const ResumeCheckerPage = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [analysis, setAnalysis] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [error, setError] = useState('')

  const featureHighlights = useMemo(
    () => [
      {
        icon: <FileSearch className="h-5 w-5" />,
        title: 'Missing Sections',
        description: 'Quickly spot weak structure across education, projects, skills, experience, and certifications.',
        tone: 'from-amber-200 via-orange-100 to-white',
      },
      {
        icon: <Target className="h-5 w-5" />,
        title: 'Keyword Match',
        description: 'Review placement-focused keyword coverage without relying on paid AI parsing APIs.',
        tone: 'from-sky-200 via-cyan-100 to-white',
      },
      {
        icon: <Sparkles className="h-5 w-5" />,
        title: 'ATS Readiness',
        description: 'Get rule-based suggestions for formatting, links, readability, and measurable impact.',
        tone: 'from-violet-200 via-purple-100 to-white',
      },
    ],
    [],
  )

  const handleDrop = useCallback((acceptedFiles, rejectedFiles) => {
    const nextFile = acceptedFiles?.[0]

    if (nextFile) {
      setSelectedFile(nextFile)
      setAnalysis(null)
      setError('')
      return
    }

    if (rejectedFiles?.length) {
      setError('Please upload a valid PDF or DOCX resume under 5 MB.')
    }
  }, [])

  const handleAnalyze = useCallback(async () => {
    if (!selectedFile) {
      setError('Choose a PDF or DOCX resume first.')
      return
    }

    const fileType = selectedFile.type || ''
    const extension = selectedFile.name?.split('.').pop()?.toLowerCase()

    if (!ACCEPTED_TYPES.includes(fileType) && !['pdf', 'docx'].includes(extension)) {
      setError('Only PDF and DOCX resumes are supported.')
      return
    }

    setIsAnalyzing(true)
    setError('')

    try {
      const { analysis: nextAnalysis } = await resumeApi.analyze(selectedFile)
      setAnalysis(nextAnalysis)
    } catch (requestError) {
      setError(requestError.message || 'Failed to analyze resume.')
    } finally {
      setIsAnalyzing(false)
    }
  }, [selectedFile])

  const handleUseDemo = useCallback(async () => {
    setIsAnalyzing(true)
    setError('')
    setSelectedFile(null)

    try {
      const { analysis: nextAnalysis } = await resumeApi.analyzeDemo()
      setAnalysis(nextAnalysis)
    } catch (requestError) {
      setError(requestError.message || 'Failed to load demo analysis.')
    } finally {
      setIsAnalyzing(false)
    }
  }, [])

  return (
    <PageShell
      title="ATS Resume Checker"
      subtitle="Analyze resume quality, ATS compatibility, keywords, missing sections, and placement readiness without changing the rest of your workflow."
      actions={
        <Link
          to="/subjects"
          className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm transition hover:bg-slate-50 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
        >
          Back to Subjects
        </Link>
      }
    >
      <section className="grid gap-4 md:grid-cols-3">
        {featureHighlights.map((item) => (
          <div
            key={item.title}
            className={`rounded-[1.75rem] bg-gradient-to-br ${item.tone} p-5 shadow-soft dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-800`}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/80 text-ink shadow-sm dark:bg-zinc-800 dark:text-white">
              {item.icon}
            </div>
            <h2 className="mt-4 font-display text-xl font-bold text-ink dark:text-white">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate dark:text-white/70">{item.description}</p>
          </div>
        ))}
      </section>

      <div className="mt-6">
        <ResumeUploadPanel
          file={selectedFile}
          isAnalyzing={isAnalyzing}
          onDrop={handleDrop}
          onRemove={() => {
            setSelectedFile(null)
            setAnalysis(null)
          }}
          onAnalyze={handleAnalyze}
          onUseDemo={handleUseDemo}
        />
      </div>

      {error ? (
        <div className="mt-6 rounded-[1.5rem] bg-rose-50 px-5 py-4 text-sm font-medium text-rose-700 shadow-soft dark:bg-rose-500/10 dark:text-rose-300">
          {error}
        </div>
      ) : null}

      {analysis ? (
        <div className="mt-8">
          <ResumeInsightsDashboard analysis={analysis} />
        </div>
      ) : null}
    </PageShell>
  )
}

export default ResumeCheckerPage
