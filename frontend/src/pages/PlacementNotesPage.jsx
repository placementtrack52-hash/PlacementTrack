import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import ProgressBar from '../components/ProgressBar'
import { NOTES_LANGUAGES } from '../data/notes/index.js'
import { usePlacementNotesProgress } from '../features/placementNotes/hooks/usePlacementNotesProgress'

const PlacementNotesPage = () => {
  const { completedCount, totalTopics, progressPercent, getLanguageProgress } =
    usePlacementNotesProgress()

  return (
    <PageShell
      title="Placement Notes"
      subtitle="Structured topic-wise learning with progress tracking, examples, quizzes, and interview preparation."
      actions={
        <Link
          to="/subjects"
          className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink dark:bg-white dark:text-[#0f1720]"
        >
          All subjects
        </Link>
      }
    >
      <div className="rounded-[1.75rem] bg-white p-6 shadow-soft dark:bg-gradient-to-br dark:from-zinc-900 dark:via-black dark:to-zinc-900">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-slate dark:text-white/70">Overall</p>
            <p className="mt-2 font-display text-2xl font-bold text-ink dark:text-white">
              {completedCount}/{totalTopics} topics completed
            </p>
          </div>
          <div className="w-full sm:max-w-xs">
            <div className="mb-2 flex justify-between text-sm text-slate dark:text-white/70">
              <span>Progress</span>
              <span>{progressPercent}%</span>
            </div>
            <ProgressBar value={progressPercent} />
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {NOTES_LANGUAGES.map((lang) => {
          const { done, percent } = getLanguageProgress(lang.id, lang.notes.length)
          const firstTopic = lang.notes[0]

          return (
            <div
              key={lang.id}
              className={`rounded-[1.75rem] bg-gradient-to-br ${lang.color} p-6 shadow-soft dark:!bg-gradient-to-br dark:!from-zinc-800 dark:!via-zinc-900 dark:!to-zinc-800`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-slate dark:text-white/70">
                    {lang.emoji}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold text-ink dark:text-white">
                    {lang.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate dark:text-white/70">
                    {lang.description}
                  </p>
                </div>
                <span className="rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-moss dark:bg-zinc-700 dark:text-emerald-300">
                  {lang.notes.length} topics
                </span>
              </div>
              <div className="mt-6">
                <div className="mb-2 flex justify-between text-sm text-slate dark:text-white/70">
                  <span>Progress</span>
                  <span>
                    {done}/{lang.notes.length} done
                  </span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-[#e7ddd2] dark:bg-zinc-700">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${lang.progressBar} transition-all duration-500`}
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
              <Link
                to={
                  firstTopic
                    ? `/placement-notes/${lang.id}/${firstTopic.slug}`
                    : '/placement-notes'
                }
                className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-black"
              >
                Open subject
              </Link>
            </div>
          )
        })}
      </div>
    </PageShell>
  )
}

export default PlacementNotesPage
