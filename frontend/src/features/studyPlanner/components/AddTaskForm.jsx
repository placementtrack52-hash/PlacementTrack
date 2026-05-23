import { useState } from 'react'
import { Plus } from 'lucide-react'

const AddTaskForm = ({ subject, onAdd }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [topicId, setTopicId] = useState(subject?.topics?.[0]?.id || '')
  const [estimatedMinutes, setEstimatedMinutes] = useState(25)
  const [priority, setPriority] = useState('medium')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return

    onAdd(title, topicId, estimatedMinutes, priority)
    setTitle('')
    setTopicId(subject?.topics?.[0]?.id || '')
    setEstimatedMinutes(25)
    setPriority('medium')
    setIsOpen(false)
  }

  return (
    <div className="rounded-[1.75rem] bg-white shadow-soft dark:bg-gradient-to-br dark:from-zinc-900 dark:via-black dark:to-zinc-900">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="w-full flex items-center justify-center gap-2 rounded-[1.75rem] border-2 border-dashed border-slate-300 p-4 text-sm font-semibold text-slate transition hover:border-slate-400 hover:bg-slate-50 dark:border-zinc-700 dark:text-white/70 dark:hover:border-zinc-600 dark:hover:bg-zinc-800/50"
        >
          <Plus className="w-4 h-4" />
          Add Task
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div>
            <label className="text-xs uppercase tracking-[0.25em] text-slate dark:text-white/70">
              Task Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Review Number System"
              className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm placeholder-slate-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-white/50"
              autoFocus
            />
          </div>

          {subject?.topics && subject.topics.length > 0 && (
            <div>
              <label className="text-xs uppercase tracking-[0.25em] text-slate dark:text-white/70">
                Topic
              </label>
              <select
                value={topicId}
                onChange={(e) => setTopicId(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
              >
                {subject.topics.map((topic) => (
                  <option key={topic.id} value={topic.id}>
                    {topic.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs uppercase tracking-[0.25em] text-slate dark:text-white/70">
                Time (min)
              </label>
              <input
                type="number"
                value={estimatedMinutes}
                onChange={(e) => setEstimatedMinutes(Math.max(1, parseInt(e.target.value) || 1))}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                min="1"
                max="480"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.25em] text-slate dark:text-white/70">
                Priority
              </label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
              >
                <option value="easy">Easy (+10 XP)</option>
                <option value="medium">Medium (+20 XP)</option>
                <option value="hard">Hard (+30 XP)</option>
              </select>
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <button
              type="submit"
              disabled={!title.trim()}
              className="flex-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2 text-xs font-semibold text-white transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed dark:from-emerald-600 dark:to-teal-600"
            >
              Add Task
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex-1 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-ink transition hover:bg-slate-50 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default AddTaskForm
