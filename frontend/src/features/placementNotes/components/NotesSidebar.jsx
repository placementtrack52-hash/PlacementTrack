import { Link } from 'react-router-dom'
import { Check, Search, BookOpen, List } from 'lucide-react'
import ProgressBar from '../../../components/ProgressBar'

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
  lastVisited,
  mobileOpen,
  onOpenMobile,
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
    <div className="rounded-[1.75rem] bg-white p-4 shadow-soft dark:bg-gradient-to-br dark:from-zinc-900 dark:via-black dark:to-zinc-900">
      <Link
        to="/placement-notes"
        onClick={onCloseMobile}
        className="text-xs font-semibold uppercase tracking-[0.2em] text-moss hover:underline dark:text-emerald-400"
      >
        ← All languages
      </Link>
      <h2 className="mt-2 font-display text-lg font-bold text-ink dark:text-white">
        {languageName} topics
      </h2>
      <div className="mt-4">
        <div className="mb-2 flex justify-between text-xs text-slate dark:text-white/70">
          <span>Progress</span>
          <span>{progressPercent}%</span>
        </div>
        <ProgressBar value={progressPercent} />
      </div>

      {continueTopic ? (
        <div className="mt-4 rounded-[1.25rem] border border-[#f1e6d8] bg-sand/50 p-3 dark:border-white/10 dark:bg-zinc-950/50">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate dark:text-white/60">
            Continue learning
          </p>
          <Link
            to={`/placement-notes/${language}/${continueTopic.slug}`}
            onClick={onCloseMobile}
            className="mt-2 block text-sm font-semibold text-ink hover:underline dark:text-white"
          >
            {continueTopic.title}
          </Link>
          <p className="mt-1 text-xs text-slate dark:text-white/60">{continueTopic.readTime}</p>
        </div>
      ) : null}

      <div className="relative mt-4">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate dark:text-white/50" />
        <input
          type="search"
          placeholder="Search topics..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-full border border-black/10 bg-white py-2 pl-9 pr-3 text-sm text-ink placeholder:text-slate focus:border-moss focus:outline-none focus:ring-1 focus:ring-moss/30 dark:border-white/10 dark:bg-zinc-950 dark:text-white dark:placeholder:text-white/40"
        />
      </div>

      <nav className="mt-4 max-h-[min(24rem,50vh)] space-y-2 overflow-y-auto pr-1">
        {filtered.map((topic) => {
          const isActive = topic.slug === activeSlug
          const done = completedSlugs.has(topic.slug)
          return (
            <div
              key={topic.slug}
              className={`flex items-start gap-2 rounded-[1.25rem] border px-2 py-2 transition ${
                isActive
                  ? 'border-moss/40 bg-[#eef7f2] dark:border-emerald-500/40 dark:bg-emerald-950/30'
                  : 'border-transparent hover:border-black/10 hover:bg-sand/40 dark:hover:border-white/10 dark:hover:bg-zinc-900'
              }`}
            >
              <button
                type="button"
                onClick={() => onToggleComplete(topic.slug, !done)}
                className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                  done
                    ? 'border-moss bg-moss text-white dark:border-emerald-500 dark:bg-emerald-600'
                    : 'border-ink/20 dark:border-white/30'
                }`}
                aria-label={done ? 'Mark incomplete' : 'Mark complete'}
              >
                {done ? <Check className="h-2.5 w-2.5" /> : null}
              </button>
              <Link
                to={`/placement-notes/${language}/${topic.slug}`}
                onClick={onCloseMobile}
                className="min-w-0 flex-1"
              >
                <p className="text-sm font-medium text-ink dark:text-white">{topic.title}</p>
                <p className="text-xs text-slate dark:text-white/60">
                  {topic.difficulty} · {topic.readTime}
                </p>
              </Link>
            </div>
          )
        })}
        {filtered.length === 0 ? (
          <p className="py-4 text-center text-sm text-slate dark:text-white/60">No topics found.</p>
        ) : null}
      </nav>

      <p className="mt-4 flex items-center gap-2 text-xs text-slate dark:text-white/60">
        <BookOpen className="h-3.5 w-3.5" />
        {topics.length} topics
      </p>
    </div>
  )

  return (
    <>
      <div className="hidden lg:block">
        <div className="sticky top-[140px]">{sidebarContent}</div>
      </div>

      <div className="lg:hidden">
        <button
          type="button"
          onClick={onOpenMobile}
          className="mb-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-ink dark:border-white/10 dark:bg-zinc-900 dark:text-white"
        >
          <List className="h-4 w-4" />
          Browse topics
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
          <div className="absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto rounded-t-3xl bg-white p-4 shadow-2xl dark:bg-zinc-900">
            {sidebarContent}
            <button
              type="button"
              onClick={onCloseMobile}
              className="mt-4 w-full rounded-full bg-ink py-3 text-sm font-semibold text-white dark:bg-white dark:text-black"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default NotesSidebar
