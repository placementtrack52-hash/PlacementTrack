import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import { userDataApi } from '../services/api'

const DailyRoutinePage = () => {
  const [routines, setRoutines] = useState([])
  const [routineForm, setRoutineForm] = useState({ id: '', time: '', task: '' })
  const [editingId, setEditingId] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false

    const loadRoutines = async () => {
      try {
        const { routines: nextRoutines } = await userDataApi.getRoutines()
        if (!cancelled) {
          setRoutines(Array.isArray(nextRoutines) ? nextRoutines : [])
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

    loadRoutines()

    return () => {
      cancelled = true
    }
  }, [])

  const sortedRoutines = useMemo(
    () => [...routines].sort((a, b) => a.time.localeCompare(b.time)),
    [routines],
  )

  const handleSubmit = async (event) => {
    event.preventDefault()
    const time = routineForm.time.trim()
    const task = routineForm.task.trim()
    if (!time || !task) return

    setError('')

    try {
      if (editingId) {
        const { routines: nextRoutines } = await userDataApi.updateRoutine(editingId, { time, task })
        setRoutines(nextRoutines ?? [])
        setEditingId(null)
      } else {
        const { routines: nextRoutines } = await userDataApi.createRoutine({ time, task })
        setRoutines(nextRoutines ?? [])
      }

      setRoutineForm({ id: '', time: '', task: '' })
    } catch (saveError) {
      setError(saveError.message)
    }
  }

  const startEdit = (item) => {
    setRoutineForm(item)
    setEditingId(item.id)
  }

  const cancelEdit = () => {
    setRoutineForm({ id: '', time: '', task: '' })
    setEditingId(null)
  }

  const deleteItem = async (id) => {
    if (!window.confirm('Delete this routine?')) return

    try {
      const { routines: nextRoutines } = await userDataApi.deleteRoutine(id)
      setRoutines(nextRoutines ?? [])
      if (editingId === id) cancelEdit()
    } catch (deleteError) {
      setError(deleteError.message)
    }
  }

  return (
    <PageShell
      title="Daily Routine"
      subtitle="Build a clean, editable study schedule with routines you can update anytime."
    >
      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
        <section className="rounded-[2rem] bg-white/90 p-6 shadow-soft ring-1 ring-slate-200/70 backdrop-blur dark:!bg-black dark:ring-slate-700/50" style={ { backgroundColor: '#18181b' } }>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500 dark:!text-white">
                Routine workspace
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-ink dark:!text-white">
                Manage your daily plan
              </h2>
            </div>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:!bg-zinc-800 dark:!text-white">
              Focus mode
            </span>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div className="grid gap-4 sm:grid-cols-[0.35fr_1fr]">
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:!text-white">
                Start time
                <input
                  type="time"
                  value={routineForm.time}
                  onChange={(event) => setRoutineForm({ ...routineForm, time: event.target.value })}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:!bg-zinc-800 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-900"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:!text-white">
                Task description
                <input
                  type="text"
                  value={routineForm.task}
                  onChange={(event) => setRoutineForm({ ...routineForm, task: event.target.value })}
                  placeholder="Review notes, solve aptitude, take a short break"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-[#0f1720] dark:text-slate-100 dark:focus:border-blue-400 dark:focus:ring-blue-900"
                />
              </label>
            </div>
            {error ? <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p> : null}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1c2541] dark:bg-white dark:text-[#0f1720] dark:hover:bg-slate-200"
              >
                {editingId ? 'Save routine' : 'Add routine'}
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
                <p className="text-sm text-slate-500 dark:text-slate-400">Saved routines</p>
                <p className="mt-1 text-lg font-semibold text-ink dark:text-white">{sortedRoutines.length} task{sortedRoutines.length === 1 ? '' : 's'}</p>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                {sortedRoutines.length ? 'Ready to run' : 'Start building'}
              </span>
            </div>

            <div className="space-y-4">
              {isLoading ? (
                <div className="rounded-[1.5rem] border border-dashed border-slate-300 p-6 text-center text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
                  Loading routines...
                </div>
              ) : sortedRoutines.length ? (
                sortedRoutines.map((item) => (
                  <div key={item.id} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 shadow-sm dark:!border-white/10 dark:!bg-zinc-800">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-sm uppercase tracking-[0.18em] text-slate-500 dark:!text-white">{item.time}</p>
                        <p className="mt-2 text-base font-medium text-ink dark:!text-white">{item.task}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => startEdit(item)}
                          className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteItem(item.id)}
                          className="rounded-full border border-rose-200 px-3 py-1 text-xs font-semibold text-rose-600 transition hover:bg-rose-50 dark:border-rose-500/30 dark:text-rose-300 dark:hover:bg-rose-500/10"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-[1.5rem] border border-dashed border-slate-300 p-6 text-center text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
                  No routines yet. Add your first task to keep your plan visible and editable.
                </div>
              )}
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="rounded-[1.75rem] bg-[#f8fbff] p-6 shadow-soft dark:bg-[#111b25]">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">Quick reference</p>
            <h3 className="mt-4 text-xl font-semibold text-ink dark:text-white">Use your routine as a daily roadmap</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Keep your workflow organized and avoid guesswork. Each routine is stored in your account so it travels with your login.
            </p>
            <div className="mt-6 space-y-3">
              <div className="rounded-3xl bg-white p-4 text-sm text-slate-700 shadow-sm dark:bg-[#172430] dark:text-slate-200">
                <p className="font-semibold">Pro tip</p>
                <p className="mt-2 text-slate-600 dark:text-slate-400">Pair your routine with notes to turn each study session into a high-value review loop.</p>
              </div>
              <Link
                to="/notes"
                className="inline-flex w-full items-center justify-center rounded-full bg-ink px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1c2541] dark:bg-white dark:text-[#0f1720] dark:hover:bg-slate-200"
              >
                Open Notes page
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </PageShell>
  )
}

export default DailyRoutinePage
