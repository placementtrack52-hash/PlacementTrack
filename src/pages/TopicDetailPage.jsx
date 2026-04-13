import { useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import notes from '../data/notes.json'
import PageShell from '../components/PageShell'
import { useProgress } from '../context/ProgressContext'
import { getTopicMeta } from '../utils/learning'

const TopicDetailPage = () => {
  const { subjectId, topicId } = useParams()
  const {
    progress,
    toggleTopicCompletion,
    toggleImportantNote,
    saveNoteForLater,
    saveNotePosition,
  } = useProgress()
  const meta = getTopicMeta(subjectId, topicId)
  const noteContainerRef = useRef(null)
  const saveTimeoutRef = useRef(null)

  useEffect(() => {
    if (!meta || !noteContainerRef.current) return
    const savedPosition = progress.notePreferences.positions[meta.topicKey] ?? 0
    noteContainerRef.current.scrollTop = savedPosition
  }, [meta, progress.notePreferences.positions])

  if (!meta) {
    return (
      <PageShell title="Topic not found" subtitle="That topic link looks a little off.">
        <Link to="/subjects" className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white">
          Back to subjects
        </Link>
      </PageShell>
    )
  }

  const topicNotes = notes[topicId]
  const topicKey = `${subjectId}:${topicId}`
  const isCompleted = Boolean(progress.completedTopics[topicKey])
  const isImportant = Boolean(progress.notePreferences.important[topicKey])
  const isSaved = Boolean(progress.notePreferences.saved[topicKey])
  const quizLevels = ['easy', 'medium', 'hard']
  const lastStudied = progress.lastStudied[topicKey]

  const handleScroll = () => {
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current)
    saveTimeoutRef.current = setTimeout(() => {
      if (noteContainerRef.current) saveNotePosition(topicKey, noteContainerRef.current.scrollTop)
    }, 250)
  }

  return (
    <PageShell
      title={meta.topic.name}
      subtitle={`A complete learning block for ${meta.subject.name}. Study the notes, save key material, and test yourself across modes and difficulty levels.`}
      actions={
        <>
          <label className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-3 text-sm font-medium text-ink dark:bg-[#172430] dark:text-slate-100">
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={(event) =>
                toggleTopicCompletion(topicKey, event.target.checked)
              }
              className="h-4 w-4 rounded border-ink/20 text-moss focus:ring-moss"
            />
            Mark as completed
          </label>
          <Link
            to={`/subjects/${subjectId}`}
            className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-[#0f1720]"
          >
            Back to topic list
          </Link>
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <section className="rounded-[1.75rem] bg-white p-6 shadow-soft dark:bg-[#172430]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold text-ink dark:text-white">
              Structured notes
            </h2>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => toggleImportantNote(topicKey)}
                className="rounded-full bg-[#fff4e9] px-4 py-2 text-sm font-semibold text-ink dark:bg-[#2a1f18] dark:text-slate-100"
              >
                {isImportant ? "Important" : "Mark important"}
              </button>
              <button
                type="button"
                onClick={() => saveNoteForLater(topicKey)}
                className="rounded-full bg-[#eef7f2] px-4 py-2 text-sm font-semibold text-ink dark:bg-[#10281f] dark:text-slate-100"
              >
                {isSaved ? "Saved" : "Save notes"}
              </button>
            </div>
          </div>
          <div
            ref={noteContainerRef}
            onScroll={handleScroll}
            className="mt-5 max-h-[34rem] space-y-6 overflow-y-auto pr-2 text-slate dark:text-slate-300"
          >
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-moss dark:text-emerald-300">
                Basics to advanced
              </h3>
              <p className="mt-3 leading-7">{topicNotes?.overview}</p>
              <p className="mt-3 leading-7">{topicNotes?.advanced}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-moss dark:text-emerald-300">
                Formulas
              </h3>
              <ul className="mt-3 space-y-2">
                {topicNotes?.formulas?.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl bg-[#faf6f0] px-4 py-3 dark:bg-[#111b25]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-moss dark:text-emerald-300">
                Shortcut methods
              </h3>
              <ul className="mt-3 space-y-2">
                {topicNotes?.shortcuts?.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl bg-[#eef7f2] px-4 py-3 dark:bg-[#10281f]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-moss dark:text-emerald-300">
                Worked examples
              </h3>
              <ul className="mt-3 space-y-2">
                {topicNotes?.examples?.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl bg-[#fff4e9] px-4 py-3 dark:bg-[#2a1f18]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="rounded-[1.75rem] bg-white p-6 shadow-soft dark:bg-[#172430]">
            <h2 className="font-display text-2xl font-semibold text-ink dark:text-white">
              Notes intelligence
            </h2>
            <div className="mt-4 space-y-3 text-sm text-slate dark:text-slate-300">
              <div className="rounded-2xl bg-[#faf6f0] p-4 dark:bg-[#111b25]">
                Last viewed position is saved locally so the notes reopen where
                you left off.
              </div>
              <div className="rounded-2xl bg-[#eef7f2] p-4 dark:bg-[#10281f]">
                {lastStudied
                  ? `Last studied on ${new Date(lastStudied).toLocaleString()}`
                  : "You have not studied this topic yet."}
              </div>
              <div className="rounded-2xl bg-[#edf4ff] p-4 dark:bg-[#142133]">
                Saved notes and important marks are stored in LocalStorage for
                this account.
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-white p-6 shadow-soft dark:bg-[#172430]">
            <h2 className="font-display text-2xl font-semibold text-ink dark:text-white">
              Quiz system
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate dark:text-slate-300">
              Each level supports Speed Mode and Accuracy Mode, timed play,
              progress tracking, and mistake capture.
            </p>
            <div className="mt-5 space-y-3">
              {quizLevels.map((level) => {
                const result = progress.quizResults[topicKey]?.[level];

                return (
                  <Link
                    key={level}
                    to={`/subjects/${subjectId}/topics/${topicId}/quiz/${level}`}
                    className="flex items-center justify-between rounded-2xl bg-[#faf6f0] px-4 py-4 transition hover:bg-sand dark:bg-[#111b25] dark:hover:bg-[#223244]"
                  >
                    <div>
                      <p className="font-semibold capitalize text-ink dark:text-white">
                        {level} quiz
                      </p>
                      <p className="text-sm text-slate dark:text-slate-300">
                        {result
                          ? `Best score: ${result.score}% in ${result.mode} mode`
                          : "Not attempted yet"}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-moss dark:text-emerald-300">
                      Start
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-gradient-to-br from-white to-slate-100 p-6 shadow-lg border border-slate-200 transition-all duration-300 hover:shadow-xl">
            {/* Title */}
            <h2 className="font-display text-2xl font-semibold text-slate-900">
              Final Mixed Test
            </h2>

            {/* Description */}
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Timed exam-style wrap-up with performance analysis and mistake
              tracking.
            </p>

            {/* CTA Button */}
            <Link
              to={`/subjects/${subjectId}/topics/${topicId}/final-test`}
              className="mt-5 inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 shadow-md"
            >
              Take Final Test →
            </Link>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

export default TopicDetailPage
