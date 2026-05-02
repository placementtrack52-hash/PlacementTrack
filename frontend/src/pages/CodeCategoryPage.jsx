import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext'
import PageShell from '../components/PageShell'
import { codeApi } from '../services/api'

const difficultyColor = {
  Easy: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  Medium: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  Hard: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
}

const filterTabs = [
  { key: 'All', label: 'All', activeClass: 'bg-gradient-to-r from-slate-700 to-slate-900 text-white dark:from-zinc-200 dark:to-white dark:text-black' },
  { key: 'Easy', label: 'Easy', activeClass: 'bg-gradient-to-r from-emerald-500 to-green-400 text-white dark:from-emerald-500 dark:to-lime-400 dark:text-black' },
  { key: 'Medium', label: 'Medium', activeClass: 'bg-gradient-to-r from-amber-500 to-yellow-400 text-white dark:from-amber-400 dark:to-yellow-300 dark:text-black' },
  { key: 'Hard', label: 'Hard', activeClass: 'bg-gradient-to-r from-red-500 to-rose-400 text-white dark:from-red-500 dark:to-rose-400' },
]

const CodeCategoryPage = () => {
  const { category } = useParams()
  const [problems, setProblems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeFilter, setActiveFilter] = useState('All')
  const { progress } = useProgress()

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const data = await codeApi.getByCategory(category)
        setProblems(data.problems)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProblems()
  }, [category])

  const filteredProblems = useMemo(
    () => activeFilter === 'All' ? problems : problems.filter((p) => p.difficulty === activeFilter),
    [problems, activeFilter],
  )

  const counts = useMemo(() => {
    const c = { All: problems.length, Easy: 0, Medium: 0, Hard: 0 }
    for (const p of problems) c[p.difficulty] = (c[p.difficulty] || 0) + 1
    return c
  }, [problems])

  return (
    <PageShell
      title={decodeURIComponent(category)}
      subtitle={`${problems.length} problem${problems.length !== 1 ? 's' : ''} available — read solutions in multiple languages.`}
      actions={
        <Link
          to="/subjects/code"
          className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm transition hover:bg-slate-50 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
        >
          ← Back to Categories
        </Link>
      }
    >
      {(() => {
        const completedCountInCategory = problems.filter((p) =>
          progress.completedTopics?.[`code_${encodeURIComponent(category)}_${p._id}`]
        ).length

        const progressPercentage =
          problems.length > 0 ? Math.round((completedCountInCategory / problems.length) * 100) : 0

        return (
          <div className="mb-8 max-w-xl">
            <div className="mb-2 flex items-center justify-between text-sm font-medium">
              <span className="text-slate-600 dark:text-zinc-300">Category Progress</span>
              <span className="text-emerald-600 dark:text-emerald-400">
                {completedCountInCategory} / {problems.length} ({progressPercentage}%)
              </span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-zinc-800">
              <div
                className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        )
      })()}

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent" />
        </div>
      ) : error ? (
        <div className="rounded-2xl bg-red-50 p-6 text-center text-red-600 dark:bg-red-900/20 dark:text-red-400">
          {error}
        </div>
      ) : problems.length === 0 ? (
        <div className="rounded-2xl bg-slate-50 p-12 text-center text-slate-500 dark:bg-zinc-800 dark:text-zinc-400">
          <p className="text-lg font-medium">No problems in this category yet</p>
        </div>
      ) : (
        <>
          {/* Difficulty filter tabs */}
          <div className="mb-5 flex gap-2 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveFilter(tab.key)}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition-all ${
                  activeFilter === tab.key
                    ? tab.activeClass
                    : 'bg-white text-slate-600 hover:bg-slate-100 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
                }`}
              >
                {tab.label}
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                    activeFilter === tab.key
                      ? 'bg-white/25'
                      : 'bg-slate-100 text-slate-500 dark:bg-zinc-700 dark:text-zinc-400'
                  }`}
                >
                  {counts[tab.key]}
                </span>
              </button>
            ))}
          </div>

          {/* Problem list */}
          {filteredProblems.length === 0 ? (
            <div className="rounded-2xl bg-slate-50 p-10 text-center text-slate-500 dark:bg-zinc-800 dark:text-zinc-400">
              <p className="font-medium">No {activeFilter} problems in this category</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredProblems.map((problem, index) => {
                const isCompleted =
                  progress.completedTopics?.[`code_${encodeURIComponent(category)}_${problem._id}`]
                return (
                  <Link
                    key={problem._id}
                    to={`/subjects/code/problem/${problem._id}`}
                    className="group flex items-center justify-between rounded-2xl bg-white/90 p-5 shadow-sm ring-1 ring-slate-200/60 transition-all hover:translate-y-[-1px] hover:shadow-md dark:bg-zinc-900 dark:ring-zinc-800"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-display text-sm font-bold ${
                          isCompleted
                            ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400'
                            : 'bg-slate-100 text-slate-500 dark:bg-zinc-800 dark:text-zinc-400'
                        }`}
                      >
                        {isCompleted ? '✓' : index + 1}
                      </span>
                      <div>
                        <h3 className="font-semibold text-ink dark:text-white">
                          {problem.title}
                        </h3>
                        <p className="mt-0.5 line-clamp-1 text-sm text-slate-500 dark:text-zinc-400">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${difficultyColor[problem.difficulty] || ''}`}
                    >
                      {problem.difficulty}
                    </span>
                    <span className="text-slate-400 transition group-hover:translate-x-1 dark:text-zinc-500">
                      →
                    </span>
                  </div>
                </Link>
                )
              })}
            </div>
          )}
        </>
      )}
    </PageShell>
  )
}

export default CodeCategoryPage
