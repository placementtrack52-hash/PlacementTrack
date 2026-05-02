import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext'
import PageShell from '../components/PageShell'
import projects from '../data/projects.json'

const DIFFICULTY_STYLES = {
  Beginner:     'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
  Intermediate: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  Advanced:     'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
}

const CATEGORY_ICONS = { Web: '🌐', Desktop: '🖥️', Mobile: '📱' }
const FILTERS = ['All', 'Beginner', 'Intermediate', 'Advanced']

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const { progress } = useProgress()

  const completedCount = Object.keys(progress?.completedProjects || {}).filter(
    (k) => progress.completedProjects[k]
  ).length
  const progressPercent = Math.round((completedCount / projects.length) * 100) || 0

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.difficulty === activeFilter)

  return (
    <PageShell
      title="Projects"
      subtitle="Explore curated project ideas — with step-by-step build plans and resume value ratings."
      actions={
        <Link
          to="/subjects"
          className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm transition hover:bg-slate-50 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
        >
          ← Back to Subjects
        </Link>
      }
    >
      {/* Overview / Progress Banner */}
      <div className="mb-8 overflow-hidden rounded-2xl bg-white p-6 shadow-soft dark:bg-zinc-800 border border-slate-100 dark:border-white/5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 mb-2 rounded-full bg-violet-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              Portfolio Builder
            </div>
            <h3 className="font-display text-xl font-bold text-ink dark:text-white">Project Progress</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-zinc-400">
              Build all {projects.length} curated projects to master your tech stack.
            </p>
          </div>
          
          <div className="flex-1 lg:max-w-md">
            <div className="mb-2 flex items-center justify-between text-xs font-semibold">
              <span className="text-slate-500 dark:text-zinc-400">Completion</span>
              <span className="text-violet-600 dark:text-violet-400">{completedCount}/{projects.length} Completed</span>
            </div>
            <div className="flex h-3 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-zinc-700 shadow-inner">
              <div 
                style={{ width: `${progressPercent}%` }} 
                className="bg-gradient-to-r from-violet-400 to-indigo-500 transition-all duration-500" 
              />
            </div>
            <p className="mt-3 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 text-right">
              {progressPercent}% Mastered
            </p>
          </div>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="mb-8 flex flex-wrap gap-3">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
              activeFilter === f
                ? 'bg-ink text-white shadow-md dark:bg-white dark:text-black'
                : 'bg-white text-ink hover:bg-slate-50 shadow-soft dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700'
            }`}
          >
            {f}
          </button>
        ))}
        <span className="ml-auto self-center text-sm text-slate-400 dark:text-zinc-500">
          {filtered.length} project{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Project grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col rounded-[1.75rem] bg-white shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:bg-zinc-800"
          >
            <div className="flex-1 p-6">
              {/* Icon + badges */}
              <div className="mb-4 flex items-start justify-between gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-100 to-indigo-100 text-2xl dark:from-violet-900/30 dark:to-indigo-900/30">
                  {progress?.completedProjects?.[project.id] ? '✅' : CATEGORY_ICONS[project.category] || '💡'}
                </span>
                <div className="flex flex-wrap justify-end gap-2">
                  {project.resumeWorthy && (
                    <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white">
                      ✅ Resume Worthy
                    </span>
                  )}
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${DIFFICULTY_STYLES[project.difficulty]}`}>
                    {project.difficulty}
                  </span>
                </div>
              </div>

              {/* Title + description */}
              <h3 className="text-lg font-bold text-ink dark:text-white">{project.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-zinc-400 line-clamp-2">
                {project.description}
              </p>

              {/* Time + Domain */}
              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-400 dark:text-zinc-500">
                <span>⏱️ {project.timeToComplete}</span>
                <span>·</span>
                <span>🏷️ {project.domain}</span>
              </div>

              {/* Tech stack pills */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-500 dark:bg-zinc-700 dark:text-zinc-400">
                    +{project.techStack.length - 4} more
                  </span>
                )}
              </div>
            </div>

            {/* CTA */}
            <div className="border-t border-slate-100 px-6 py-4 dark:border-zinc-700">
              <Link
                to={`/subjects/projects/${project.id}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:opacity-80 dark:bg-white dark:text-black"
              >
                View Full Project →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  )
}

export default ProjectsPage
