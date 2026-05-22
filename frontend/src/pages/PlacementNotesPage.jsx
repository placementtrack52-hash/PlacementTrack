import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen, Rocket } from 'lucide-react'
import PageShell from '../components/PageShell'
import { NOTES_LANGUAGES } from '../data/notes/index.js'
import { usePlacementNotesProgress } from '../features/placementNotes/hooks/usePlacementNotesProgress'

const PlacementNotesPage = () => {
  const { completedCount, totalTopics, progressPercent, getLanguageProgress } =
    usePlacementNotesProgress()

  return (
    <PageShell
      title="Placement Notes"
      subtitle="Structured topic-wise learning with progress tracking, examples, quizzes, and interview preparation."
    >
      <div className="mb-8 rounded-2xl border border-violet-200/50 bg-gradient-to-br from-violet-50 via-fuchsia-50/30 to-white p-6 shadow-soft dark:border-violet-500/20 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/20 text-2xl">
              <Rocket className="h-6 w-6 text-violet-600 dark:text-violet-400" />
            </span>
            <div>
              <p className="text-sm text-slate dark:text-zinc-400">Overall progress</p>
              <p className="font-display text-2xl font-bold text-ink dark:text-white">
                {completedCount}/{totalTopics} topics
              </p>
            </div>
          </div>
          <div className="min-w-[200px] flex-1 sm:max-w-xs">
            <div className="mb-1 flex justify-between text-sm text-slate dark:text-zinc-400">
              <span>Completion</span>
              <span>{progressPercent}%</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-[#e7ddd2] dark:bg-zinc-700">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {NOTES_LANGUAGES.map((lang, index) => {
          const { done, percent } = getLanguageProgress(lang.id, lang.notes.length)
          const firstTopic = lang.notes[0]

          return (
            <motion.div
              key={lang.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className={`rounded-[1.75rem] border border-white/10 bg-gradient-to-br ${lang.gradient} p-6 shadow-soft dark:bg-zinc-900`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-3xl">{lang.emoji}</p>
                  <h3 className="mt-3 font-display text-2xl font-bold text-ink dark:text-white">
                    {lang.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate dark:text-zinc-400">
                    {lang.description}
                  </p>
                </div>
                <span className="rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-moss dark:bg-zinc-700 dark:text-emerald-300">
                  {lang.notes.length} topics
                </span>
              </div>
              <div className="mt-6">
                <div className="mb-2 flex justify-between text-sm text-slate dark:text-zinc-400">
                  <span>Progress</span>
                  <span>
                    {done}/{lang.notes.length}
                  </span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-[#e7ddd2] dark:bg-zinc-700">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${lang.accent} transition-all duration-500`}
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
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] dark:bg-white dark:text-black"
              >
                <BookOpen className="h-4 w-4" />
                Start learning
              </Link>
            </motion.div>
          )
        })}
      </div>
    </PageShell>
  )
}

export default PlacementNotesPage
