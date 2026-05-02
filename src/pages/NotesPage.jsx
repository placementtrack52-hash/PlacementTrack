import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import { userDataApi } from '../services/api'
import HelpfulWidget from '../components/HelpfulWidget'
import ReportIssueButton from '../components/ReportIssueButton'

const NotesPage = () => {
  const [notes, setNotes] = useState([])
  const [noteForm, setNoteForm] = useState({ id: '', title: '', content: '' })
  const [editingId, setEditingId] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false

    const loadNotes = async () => {
      try {
        const { notes: nextNotes } = await userDataApi.getNotes()
        if (!cancelled) {
          setNotes(Array.isArray(nextNotes) ? nextNotes : [])
        }
      } catch (loadError) {
        if (!cancelled) {
          setError(loadError.message)
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false)
        }
      }
    }

    loadNotes()

    return () => {
      cancelled = true
    }
  }, [])

  const sortedNotes = useMemo(
    () => [...notes].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()),
    [notes],
  )

  const handleSubmit = async (event) => {
    event.preventDefault()
    const title = noteForm.title.trim()
    const content = noteForm.content.trim()
    if (!title || !content) return

    setError('')

    try {
      if (editingId) {
        const { notes: nextNotes } = await userDataApi.updateNote(editingId, { title, content })
        setNotes(nextNotes ?? [])
        setEditingId(null)
      } else {
        const { notes: nextNotes } = await userDataApi.createNote({ title, content })
        setNotes(nextNotes ?? [])
      }

      setNoteForm({ id: '', title: '', content: '' })
    } catch (saveError) {
      setError(saveError.message)
    }
  }

  const startEdit = (item) => {
    setNoteForm(item)
    setEditingId(item.id)
  }

  const cancelEdit = () => {
    setNoteForm({ id: '', title: '', content: '' })
    setEditingId(null)
  }

  const deleteItem = async (id) => {
    if (!window.confirm('Remove this note?')) return

    try {
      const { notes: nextNotes } = await userDataApi.deleteNote(id)
      setNotes(nextNotes ?? [])
      if (editingId === id) cancelEdit()
    } catch (deleteError) {
      setError(deleteError.message)
    }
  }

  return (
    <PageShell
      title="Notes"
      subtitle="Capture ideas, formulas, and study highlights in a dedicated notes workspace."
    >
      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
        <section className="rounded-[2rem] bg-white/90 p-6 shadow-soft ring-1 ring-slate-200/70 backdrop-blur dark:!bg-black dark:ring-slate-700/50">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500 dark:!text-white">
                Notes workspace
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-ink dark:!text-white">
                Write and refine your study notes
              </h2>
            </div>
            <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-sky-700 dark:!bg-zinc-800 dark:!text-white">
              Account sync
            </span>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:!text-white">
                Title
              </label>
              <input
                type="text"
                value={noteForm.title}
                onChange={(event) => setNoteForm({ ...noteForm, title: event.target.value })}
                placeholder="Enter a note title"
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:!bg-zinc-800 dark:!text-white dark:focus:border-blue-400 dark:focus:ring-blue-900"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:!text-white">
                Content
              </label>
              <textarea
                value={noteForm.content}
                onChange={(event) => setNoteForm({ ...noteForm, content: event.target.value })}
                rows={7}
                placeholder="Capture formulas, ideas, or key revision pointers."
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:!bg-zinc-800 dark:!text-white dark:focus:border-blue-400 dark:focus:ring-blue-900"
              />
            </div>
            {error ? <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p> : null}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1c2541] dark:bg-white dark:text-[#0f1720] dark:hover:bg-slate-200"
              >
                {editingId ? 'Save note' : 'Add note'}
              </button>
              {editingId ? (
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  Cancel edit
                </button>
              ) : null}
            </div>
          </form>

          <div className="mt-8">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-sm text-slate-500 dark:!text-white">Saved notes</p>
                <p className="mt-1 text-lg font-semibold text-ink dark:!text-white">
                  {sortedNotes.length} note{sortedNotes.length === 1 ? '' : 's'}
                </p>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-600 dark:!bg-zinc-800 dark:!text-white">
                {sortedNotes.length ? 'Ready for review' : 'Start writing'}
              </span>
            </div>

            <div className="space-y-4">
              {isLoading ? (
                <div className="rounded-[1.5rem] border border-dashed border-slate-300 p-6 text-center text-sm text-slate-500 dark:border-slate-700 dark:!text-white">
                  Loading notes...
                </div>
              ) : sortedNotes.length ? (
                sortedNotes.map((item) => (
                  <article key={item.id} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 shadow-sm dark:!border-white/10 dark:!bg-zinc-800">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-base font-semibold text-ink dark:!text-white">{item.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-600 dark:!text-white">{item.content}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => startEdit(item)}
                          className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 dark:!border-white/20 dark:!text-white dark:hover:bg-zinc-700"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteItem(item.id)}
                          className="rounded-full border border-rose-200 px-3 py-1 text-xs font-semibold text-rose-600 transition hover:bg-rose-50 dark:!border-rose-500/30 dark:!text-rose-300 dark:hover:bg-rose-500/20"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <div className="rounded-[1.5rem] border border-dashed border-slate-300 p-6 text-center text-sm text-slate-500 dark:!border-white/20 dark:!text-white">
                  No notes yet. Add an insight or formula to begin building your review library.
                </div>
              )}
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="rounded-[1.75rem] bg-[#f8fbff] p-6 shadow-soft dark:!bg-zinc-800">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500 dark:!text-white">Study companion</p>
            <h3 className="mt-4 text-xl font-semibold text-ink dark:!text-white">Keep your notes clear and actionable</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:!text-white">
              Use this space for quick revision notes, formulas, and exam-day reminders. Everything is stored in your account so your notes stay with you.
            </p>
            <div className="mt-6 space-y-3">
              <div className="rounded-3xl bg-white p-4 text-sm text-slate-700 shadow-sm dark:!bg-zinc-700 dark:!text-white">
                <p className="font-semibold">Best practice</p>
                <p className="mt-2 text-slate-600 dark:!text-white">Use short titles and concise content for faster review before every practice session.</p>
              </div>
              <Link
                to="/daily-routine"
                className="inline-flex w-full items-center justify-center rounded-full bg-ink px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1c2541] dark:bg-white dark:text-[#0f1720] dark:hover:bg-slate-200"
              >
                Open Routine page
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <HelpfulWidget contextData={{ page: 'Notes' }} />
            <ReportIssueButton contextData={{ page: 'Notes' }} />
          </div>
        </aside>
      </div>
    </PageShell>
  )
}

export default NotesPage
