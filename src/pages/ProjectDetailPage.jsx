import { Link, useParams } from 'react-router-dom'
import { CheckCircle2, Circle } from 'lucide-react'
import { useProgress } from '../context/ProgressContext'
import PageShell from '../components/PageShell'
import projects from '../data/projects.json'

const DIFFICULTY_STYLES = {
  Beginner: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
  Intermediate: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  Advanced: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
}

const CATEGORY_ICONS = { Web: '🌐', Desktop: '🖥️', Mobile: '📱' }

const ProjectDetailPage = () => {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)
  const { progress, toggleProjectCompletion } = useProgress()
  const isCompleted = progress?.completedProjects?.[id] || false

  if (!project) {
    return (
      <PageShell title="Project Not Found">
        <div className="text-center py-20">
          <p className="text-slate-500 dark:text-zinc-400">Project not found.</p>
          <Link to="/subjects/projects" className="mt-4 inline-block text-violet-600 dark:text-violet-400">
            ← Back to Projects
          </Link>
        </div>
      </PageShell>
    )
  }

  return (
    <PageShell
      title={project.title}
      subtitle={project.description}
      actions={
        <div className="flex items-center gap-3">
          <button
            onClick={() => toggleProjectCompletion(id, !isCompleted)}
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
            to="/subjects/projects"
            className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm transition hover:bg-slate-50 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
          >
            ← All Projects
          </Link>
        </div>
      }
    >
      {/* Meta badges row */}
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-100 to-indigo-100 text-3xl dark:from-violet-900/30 dark:to-indigo-900/30 shadow">
          {CATEGORY_ICONS[project.category] || '💡'}
        </span>
        <div className="flex flex-wrap gap-2">
          {project.resumeWorthy && (
            <span className="rounded-full bg-emerald-600 px-4 py-1.5 text-sm font-bold text-white shadow">
              ✅ Resume Worthy
            </span>
          )}
          <span className={`rounded-full px-4 py-1.5 text-sm font-bold ${DIFFICULTY_STYLES[project.difficulty]}`}>
            {project.difficulty}
          </span>
          <span className="rounded-full bg-slate-100 px-4 py-1.5 text-sm font-semibold text-slate-600 dark:bg-zinc-700 dark:text-zinc-300">
            {project.category}
          </span>
          <span className="rounded-full bg-violet-100 px-4 py-1.5 text-sm font-semibold text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">
            🏷️ {project.domain}
          </span>
          <span className="rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            ⏱️ {project.timeToComplete}
          </span>
          {project.similarTo && (
            <span className="rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
              💡 Similar to {project.similarTo}
            </span>
          )}
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* ── LEFT: Main Content ── */}
        <div className="space-y-8 lg:col-span-2">

          {/* Step-by-Step Build Plan */}
          <div className="rounded-[1.75rem] bg-white p-8 shadow-soft dark:bg-zinc-800">
            <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-ink dark:text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-100 text-lg dark:bg-violet-900/30">📋</span>
              Step-by-Step Build Plan
            </h2>
            <ol className="space-y-5">
              {project.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-sm font-bold text-white shadow">
                    {i + 1}
                  </span>
                  <p className="pt-0.5 text-sm leading-6 text-slate-600 dark:text-zinc-300">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Key Features */}
          <div className="rounded-[1.75rem] bg-white p-8 shadow-soft dark:bg-zinc-800">
            <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-ink dark:text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-lg dark:bg-emerald-900/30">⚡</span>
              Key Features to Build
            </h2>
            <ul className="space-y-3">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-zinc-300">
                  <span className="mt-0.5 font-bold text-emerald-500">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── RIGHT: Sidebar ── */}
        <div className="space-y-6">

          {/* Quick Info */}
          <div className="rounded-[1.75rem] bg-gradient-to-br from-violet-50 to-indigo-50 p-6 shadow-soft dark:from-zinc-800 dark:to-zinc-900">
            <h3 className="mb-4 font-bold text-ink dark:text-white">ℹ️ Quick Info</h3>
            <div className="space-y-3">
              {[
                { label: 'Estimated Time', value: project.timeToComplete },
                { label: 'Difficulty',     value: project.difficulty },
                { label: 'Domain',         value: project.domain },
                { label: 'Category',       value: project.category },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 dark:text-zinc-400">{label}</span>
                  <span className="font-semibold text-ink dark:text-white">{value}</span>
                </div>
              ))}
              {project.resumeWorthy && (
                <div className="mt-4 rounded-xl bg-emerald-100 px-4 py-3 text-center text-sm font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                  ✅ Great for your Resume!
                </div>
              )}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="rounded-[1.75rem] bg-white p-6 shadow-soft dark:bg-zinc-800">
            <h3 className="mb-4 font-bold text-ink dark:text-white">🛠️ Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg bg-indigo-50 px-3 py-1.5 text-sm font-semibold text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* What You'll Learn */}
          <div className="rounded-[1.75rem] bg-white p-6 shadow-soft dark:bg-zinc-800">
            <h3 className="mb-4 font-bold text-ink dark:text-white">🎓 What You'll Learn</h3>
            <div className="flex flex-wrap gap-2">
              {project.whatYouWillLearn.map((item) => (
                <span
                  key={item}
                  className="rounded-lg bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-700 dark:bg-amber-900/20 dark:text-amber-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  )
}

export default ProjectDetailPage
