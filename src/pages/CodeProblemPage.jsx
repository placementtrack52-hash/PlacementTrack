import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext'
import PageShell from '../components/PageShell'
import CodeTabs from '../components/CodeTabs'
import { codeApi } from '../services/api'
import HelpfulWidget from '../components/HelpfulWidget'
import ReportIssueButton from '../components/ReportIssueButton'

const difficultyColor = {
  Easy: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  Medium: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  Hard: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
}

const CodeProblemPage = () => {
  const { id } = useParams()
  const [problem, setProblem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { progress, toggleTopicCompletion } = useProgress()

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const data = await codeApi.getProblem(id)
        setProblem(data.problem)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProblem()
  }, [id])

  if (loading) {
    return (
      <PageShell title="Loading...">
        <div className="flex items-center justify-center py-20">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent" />
        </div>
      </PageShell>
    )
  }

  if (error || !problem) {
    return (
      <PageShell title="Error">
        <div className="rounded-2xl bg-red-50 p-6 text-center text-red-600 dark:bg-red-900/20 dark:text-red-400">
          {error || 'Problem not found.'}
        </div>
      </PageShell>
    )
  }

  const problemKey = `code_${encodeURIComponent(problem.category)}_${problem._id}`
  const isCompleted = progress.completedTopics?.[problemKey] || false

  return (
    <PageShell
      title={problem.title}
      subtitle={problem.category}
      actions={
        <div className="flex items-center gap-3">
          <button
            onClick={() => toggleTopicCompletion(problemKey, !isCompleted)}
            className={`inline-flex rounded-full px-5 py-3 text-sm font-semibold shadow-sm transition ${
              isCompleted
                ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                : 'bg-white text-ink hover:bg-slate-50 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700'
            }`}
          >
            {isCompleted ? '✓ Completed' : 'Mark as Completed'}
          </button>
          <Link
            to={`/subjects/code/${encodeURIComponent(problem.category)}`}
            className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm transition hover:bg-slate-50 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
          >
            ← Back
          </Link>
        </div>
      }
    >
      <div className="space-y-6">
        {/* Problem details card */}
        <div className="rounded-2xl bg-white/90 p-6 shadow-soft ring-1 ring-slate-200/60 backdrop-blur dark:bg-zinc-900 dark:ring-zinc-800 sm:p-8">
          {/* Difficulty badge */}
          <span
            className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${difficultyColor[problem.difficulty] || ''}`}
          >
            {problem.difficulty}
          </span>

          {/* Description */}
          <div className="mt-5">
            <h2 className="font-display text-lg font-bold text-ink dark:text-white">Description</h2>
            <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">
              {problem.description}
            </p>
          </div>

          {/* Input / Output */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-4 dark:bg-zinc-800">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                Input
              </h3>
              <pre className="mt-2 whitespace-pre-wrap font-mono text-sm text-ink dark:text-white">
                {problem.inputExample}
              </pre>
            </div>
            <div className="rounded-xl bg-slate-50 p-4 dark:bg-zinc-800">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                Output
              </h3>
              <pre className="mt-2 whitespace-pre-wrap font-mono text-sm text-ink dark:text-white">
                {problem.outputExample}
              </pre>
            </div>
          </div>

          {/* Explanation */}
          <div className="mt-6">
            <h2 className="font-display text-lg font-bold text-ink dark:text-white">Explanation</h2>
            <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">
              {problem.explanation}
            </p>
          </div>
        </div>

        {/* Code section */}
        <div className="rounded-2xl bg-white/90 p-6 shadow-soft ring-1 ring-slate-200/60 backdrop-blur dark:bg-zinc-900 dark:ring-zinc-800 sm:p-8">
          <h2 className="mb-4 font-display text-lg font-bold text-ink dark:text-white">
            💻 Solutions
          </h2>
          <CodeTabs code={problem.code} />
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-between rounded-2xl bg-white/90 p-6 shadow-soft ring-1 ring-slate-200/60 backdrop-blur dark:bg-zinc-900 dark:ring-zinc-800">
          <HelpfulWidget contextData={{ page: 'CodeProblem', problemId: problem._id, title: problem.title }} />
          <ReportIssueButton contextData={{ page: 'CodeProblem', problemId: problem._id, title: problem.title }} />
        </div>
      </div>
    </PageShell>
  )
}

export default CodeProblemPage
