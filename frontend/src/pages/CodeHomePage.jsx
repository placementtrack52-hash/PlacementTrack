import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext'
import PageShell from '../components/PageShell'
import { codeApi } from '../services/api'

const categoryMeta = {
  Mathematics: {
    icon: '🔢',
    gradient: 'from-violet-200 via-purple-100 to-white',
    description: 'Number theory, arithmetic, and mathematical algorithms',
  },
  Strings: {
    icon: '🔤',
    gradient: 'from-amber-200 via-yellow-100 to-white',
    description: 'String manipulation, pattern matching, and text processing',
  },
  Arrays: {
    icon: '📊',
    gradient: 'from-emerald-200 via-green-100 to-white',
    description: 'Array traversal, searching, sorting, and transformations',
  },
  Matrix: {
    icon: '🧮',
    gradient: 'from-fuchsia-200 via-purple-100 to-white',
    description: '2D arrays, traversals, and matrix transformations',
  },
  'Searching & Sorting': {
    icon: '🔍',
    gradient: 'from-blue-200 via-sky-100 to-white',
    description: 'Binary search, sorting algorithms, and divide and conquer',
  },
  LinkedList: {
    icon: '🔗',
    gradient: 'from-pink-200 via-rose-100 to-white',
    description: 'Singly and doubly linked lists, traversal, and manipulation',
  },
  'Binary Search Trees': {
    icon: '🌲',
    gradient: 'from-teal-200 via-emerald-100 to-white',
    description: 'BST operations, traversal, and balancing',
  },
  BackTracking: {
    icon: '🔙',
    gradient: 'from-orange-200 via-amber-100 to-white',
    description: 'Exhaustive search, permutations, and combinations',
  },
  Heap: {
    icon: '⛰️',
    gradient: 'from-stone-200 via-neutral-100 to-white',
    description: 'Priority queues, min-heap, and max-heap operations',
  },
  Graph: {
    icon: '🕸️',
    gradient: 'from-indigo-200 via-blue-100 to-white',
    description: 'BFS, DFS, shortest paths, and network flows',
  },
  'Dynamic Programming': {
    icon: '🧠',
    gradient: 'from-fuchsia-200 via-pink-100 to-white',
    description: 'Memoization, tabulation, and state transitions',
  },
  'Binary Trees': {
    icon: '🌳',
    gradient: 'from-lime-200 via-green-100 to-white',
    description: 'Tree traversal, structure manipulation, and path finding',
  },
  Greedy: {
    icon: '💰',
    gradient: 'from-yellow-200 via-amber-100 to-white',
    description: 'Optimization by making locally optimal choices',
  },
  'Stacks & Queues': {
    icon: '🥞',
    gradient: 'from-red-200 via-orange-100 to-white',
    description: 'LIFO and FIFO data structures, parsing, and scheduling',
  },
  Trie: {
    icon: '📚',
    gradient: 'from-cyan-200 via-sky-100 to-white',
    description: 'Prefix trees, string search, and autocomplete',
  },
  'Bit Manipulation': {
    icon: '0️⃣',
    gradient: 'from-slate-300 via-gray-200 to-white',
    description: 'Bitwise operations, masking, and low-level math',
  },
}

const fallbackMeta = {
  icon: '💡',
  gradient: 'from-sky-200 via-cyan-100 to-white',
  description: 'Coding problems and solutions',
}

const preferredOrder = [
  'Mathematics',
  'Arrays',
  'Matrix',
  'Strings',
  'Searching & Sorting',
  'Stacks & Queues',
  'LinkedList',
  'Bit Manipulation',
  'BackTracking',
  'Binary Trees',
  'Binary Search Trees',
  'Heap',
  'Trie',
  'Greedy',
  'Graph',
  'Dynamic Programming'
]

const CodeHomePage = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { progress } = useProgress()

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await codeApi.getCategories()
        
        // Sort categories according to preferred order
        const sortedCategories = [...data.categories].sort((a, b) => {
          const indexA = preferredOrder.indexOf(a.name)
          const indexB = preferredOrder.indexOf(b.name)
          if (indexA === -1 && indexB === -1) return a.name.localeCompare(b.name)
          if (indexA === -1) return 1
          if (indexB === -1) return -1
          return indexA - indexB
        })
        
        setCategories(sortedCategories)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchCategories()
  }, [])

  return (
    <PageShell
      title="Code Learning"
      subtitle="Browse coding problems by category. Read solutions in Java, Python, C, and C++."
      actions={
        <Link
          to="/subjects"
          className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm transition hover:bg-slate-50 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
        >
          ← Back to Subjects
        </Link>
      }
    >
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent" />
        </div>
      ) : error ? (
        <div className="rounded-2xl bg-red-50 p-6 text-center text-red-600 dark:bg-red-900/20 dark:text-red-400">
          {error}
        </div>
      ) : categories.length === 0 ? (
        <div className="rounded-2xl bg-slate-50 p-12 text-center text-slate-500 dark:bg-zinc-800 dark:text-zinc-400">
          <p className="text-lg font-medium">No categories found</p>
          <p className="mt-2 text-sm">Problems haven't been added yet. Run the seed script to populate.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => {
            const meta = categoryMeta[cat.name] || fallbackMeta
            
            // Calculate progress for this category
            const catKeyPrefix = `code_${encodeURIComponent(cat.name)}_`
            const catCompletedCount = Object.keys(progress.completedTopics || {}).filter(
              (k) => k.startsWith(catKeyPrefix) && progress.completedTopics[k]
            ).length
            
            const percentage = cat.count > 0 ? Math.round((catCompletedCount / cat.count) * 100) : 0

            return (
              <Link
                key={cat.name}
                to={`/subjects/code/${encodeURIComponent(cat.name)}`}
                className={`group rounded-[1.75rem] bg-gradient-to-br ${meta.gradient} p-6 shadow-soft transition-all hover:translate-y-[-2px] hover:shadow-lg dark:!bg-gradient-to-br dark:!from-zinc-800 dark:!to-zinc-800 dark:!via-zinc-900`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-slate dark:text-white/70">
                      {meta.icon}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-bold text-ink dark:text-white">
                      {cat.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate dark:text-white/70">
                      {meta.description}
                    </p>
                  </div>
                  <span className="rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-moss dark:bg-zinc-700 dark:text-emerald-300">
                    {cat.count} {cat.count === 1 ? 'problem' : 'problems'}
                  </span>
                </div>
                
                <div className="mt-6">
                  <div className="mb-2 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-zinc-400">
                    <span>Progress</span>
                    <span>{percentage}%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/5 dark:bg-white/10">
                    <div
                      className="h-full bg-ink transition-all duration-500 dark:bg-white"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>

                <span className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition group-hover:translate-y-[-1px] dark:bg-white dark:text-black">
                  Explore →
                </span>
              </Link>
            )
          })}
        </div>
      )}
    </PageShell>
  )
}

export default CodeHomePage
