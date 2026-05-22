import { Link } from 'react-router-dom'
import { Check, Search, BookOpen } from 'lucide-react'

const NotesSidebar = ({
  language,
  topics,
  activeSlug,
  search,
  onSearchChange,
  progressPercent,
  completedSlugs,
  onToggleComplete,
  lastVisited,
  mobileOpen,
  onCloseMobile,
}) => {
  const filtered = topics.filter(
    (t) =>
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.slug.toLowerCase().includes(search.toLowerCase()),
  )

  const continueTopic =
    lastVisited?.language === language
      ? topics.find((t) => t.slug === lastVisited.slug)
      : topics[0]

  const sidebarContent = (
    <>
      <div className="border-b border-white/10 p-4">
        <Link
          to="/placement-notes"
          className="text-xs font-semibold uppercase tracking-wider text-violet-400 hover:text-violet-300"
        >
          ← All languages
        </Link>
        <h2 className="mt-2 font-display text-lg font-bold capitalize text-white">{language} Notes</h2>
        <div className="mt-3">
          <div className="mb-1 flex justify-between text-xs text-zinc-400">
            <span>Progress</span>
            <span>{progressPercent}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {continueTopic ? (
        <div className="border-b border-white/10 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Continue learning</p>
          <Link
            to={`/placement-notes/${language}/${continueTopic.slug}`}
            onClick={onCloseMobile}
            className="mt-2 block rounded-lg border border-violet-500/30 bg-violet-500/10 p-3 transition hover:bg-violet-500/20"
          >
            <p className="text-sm font-semibold text-white">{continueTopic.title}</p>
            <p className="mt-1 text-xs text-zinc-400">{continueTopic.readTime}</p>
          </Link>
        </div>
      ) : null}

      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          <input
            type="search"
            placeholder="Search topics..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-zinc-950/80 py-2 pl-9 pr-3 text-sm text-white placeholder:text-zinc-500 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30"
          />
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-2 pb-4">
        <ul className="space-y-1">
          {filtered.map((topic) => {
            const isActive = topic.slug === activeSlug
            const done = completedSlugs.has(topic.slug)
            return (
              <li key={topic.slug}>
                <div
                  className={`flex items-start gap-2 rounded-lg px-2 py-2 transition ${
                    isActive ? 'bg-violet-500/20 ring-1 ring-violet-500/40' : 'hover:bg-white/5'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => onToggleComplete(topic.slug, !done)}
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition ${
                      done
                        ? 'border-emerald-500 bg-emerald-500/20 text-emerald-400'
                        : 'border-zinc-600 text-transparent hover:border-zinc-400'
                    }`}
                    aria-label={done ? 'Mark incomplete' : 'Mark complete'}
                  >
                    {done ? <Check className="h-3 w-3" /> : null}
                  </button>
                  <Link
                    to={`/placement-notes/${language}/${topic.slug}`}
                    onClick={onCloseMobile}
                    className="min-w-0 flex-1"
                  >
                    <p className={`text-sm font-medium ${isActive ? 'text-white' : 'text-zinc-300'}`}>
                      {topic.title}
                    </p>
                    <p className="text-xs text-zinc-500">{topic.difficulty} · {topic.readTime}</p>
                  </Link>
                </div>
              </li>
            )
          })}
        </ul>
        {filtered.length === 0 ? (
          <p className="px-2 py-4 text-center text-sm text-zinc-500">No topics match your search.</p>
        ) : null}
      </nav>

      <div className="border-t border-white/10 p-4">
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <BookOpen className="h-4 w-4" />
          {topics.length} topics · Placement Notes
        </div>
      </div>
    </>
  )

  return (
    <>
      <aside className="hidden w-72 shrink-0 flex-col border-r border-white/10 bg-zinc-900/80 backdrop-blur-xl lg:flex lg:sticky lg:top-0 lg:h-screen">
        {sidebarContent}
      </aside>

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/60"
            onClick={onCloseMobile}
            aria-label="Close menu"
          />
          <aside className="absolute left-0 top-0 flex h-full w-[min(100%,20rem)] flex-col bg-zinc-900 shadow-2xl">
            {sidebarContent}
          </aside>
        </div>
      ) : null}
    </>
  )
}

export default NotesSidebar
