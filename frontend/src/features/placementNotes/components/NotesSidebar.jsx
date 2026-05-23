import { Link } from 'react-router-dom'
import { Check, Search, List } from 'lucide-react'

const NotesSidebar = ({
  language,
  languageName,
  topics,
  activeSlug,
  search,
  onSearchChange,
  progressPercent,
  completedSlugs,
  onToggleComplete,
  mobileOpen,
  onOpenMobile,
  onCloseMobile,
}) => {
  const filtered = topics.filter(
    (t) =>
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.slug.toLowerCase().includes(search.toLowerCase()),
  )

  const sidebarInner = (
    <>
      <div className="border-b border-slate-200 bg-white px-4 py-4 dark:border-zinc-800 dark:bg-zinc-900">
        <Link
          to="/placement-notes"
          onClick={onCloseMobile}
          className="text-xs font-medium text-[#2563eb] hover:underline dark:text-blue-400"
        >
          ← All languages
        </Link>
        <h2 className="mt-2 text-lg font-bold text-slate-800 dark:text-white">
          {languageName} Tutorial
        </h2>
        <div className="mt-3">
          <div className="mb-1 flex justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>Progress</span>
            <span>{progressPercent}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-zinc-700">
            <div
              className="h-full rounded-full bg-[#2e7d32] transition-all duration-300 dark:bg-emerald-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200 px-3 py-3 dark:border-zinc-800">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            placeholder="Search topics..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded border border-slate-200 bg-white py-2 pl-8 pr-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-[#2563eb] focus:outline-none focus:ring-1 focus:ring-[#2563eb]/30 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
          />
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-2">
        <ul>
          {filtered.map((topic) => {
            const isActive = topic.slug === activeSlug
            const done = completedSlugs.has(topic.slug)
            return (
              <li key={topic.slug}>
                <div
                  className={`group flex items-center gap-1 border-l-[3px] ${
                    isActive
                      ? 'border-l-[#2563eb] bg-white dark:border-l-blue-400 dark:bg-zinc-800'
                      : 'border-l-transparent hover:bg-white/80 dark:hover:bg-zinc-800/60'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => onToggleComplete(topic.slug, !done)}
                    className={`ml-2 flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                      done
                        ? 'border-[#2e7d32] bg-[#2e7d32] text-white'
                        : 'border-slate-300 bg-white dark:border-zinc-600 dark:bg-zinc-900'
                    }`}
                    aria-label={done ? 'Mark incomplete' : 'Mark complete'}
                  >
                    {done ? <Check className="h-2.5 w-2.5" /> : null}
                  </button>
                  <Link
                    to={`/placement-notes/${language}/${topic.slug}`}
                    onClick={onCloseMobile}
                    className={`min-w-0 flex-1 py-2.5 pr-4 text-sm leading-snug ${
                      isActive
                        ? 'font-semibold text-[#2563eb] dark:text-blue-400'
                        : 'text-slate-700 hover:text-[#2563eb] dark:text-slate-300 dark:hover:text-blue-400'
                    }`}
                  >
                    {topic.title}
                  </Link>
                </div>
              </li>
            )
          })}
        </ul>
        {filtered.length === 0 ? (
          <p className="px-4 py-6 text-center text-sm text-slate-500">No topics found.</p>
        ) : null}
      </nav>
    </>
  )

  return (
    <>
      <aside className="hidden w-[260px] shrink-0 flex-col border-r border-slate-200 bg-[#f5f7fa] lg:flex dark:border-zinc-800 dark:bg-zinc-950">
        {sidebarInner}
      </aside>

      <div className="lg:hidden">
        <button
          type="button"
          onClick={onOpenMobile}
          className="mb-3 inline-flex w-full items-center justify-center gap-2 rounded border border-slate-200 bg-[#f5f7fa] px-4 py-2.5 text-sm font-medium text-slate-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
        >
          <List className="h-4 w-4" />
          Table of contents
        </button>
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            onClick={onCloseMobile}
            aria-label="Close menu"
          />
          <aside className="absolute left-0 top-0 flex h-full w-[min(100%,280px)] flex-col border-r border-slate-200 bg-[#f5f7fa] shadow-xl dark:border-zinc-800 dark:bg-zinc-950">
            {sidebarInner}
            <button
              type="button"
              onClick={onCloseMobile}
              className="m-3 rounded border border-slate-200 bg-white py-2 text-sm font-medium dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
            >
              Close
            </button>
          </aside>
        </div>
      ) : null}
    </>
  )
}

export default NotesSidebar
