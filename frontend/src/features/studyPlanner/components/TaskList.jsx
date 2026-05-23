import { useState } from 'react'
import { X } from 'lucide-react'

const TaskList = ({ tasks, subject, onComplete, onDelete }) => {
  const incompleteTasks = tasks.filter((t) => !t.completed)

  const getPriorityColor = (priority) => {
    const colors = {
      hard: 'bg-rose-500',
      medium: 'bg-amber-500',
      easy: 'bg-emerald-500',
    }
    return colors[priority] || colors.medium
  }

  return (
    <div className="rounded-[1.75rem] bg-white p-5 shadow-soft dark:bg-gradient-to-br dark:from-zinc-900 dark:via-black dark:to-zinc-900">
      <div className="flex items-center justify-between gap-2 mb-4">
        <h3 className="font-display text-sm font-semibold text-ink dark:text-white">
          Today's Tasks
        </h3>
        <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700 dark:bg-zinc-800 dark:text-white/70">
          {incompleteTasks.length}
        </span>
      </div>

      {incompleteTasks.length === 0 ? (
        <p className="text-xs text-slate/70 py-4 text-center dark:text-white/50">
          No tasks yet. Add one to get started!
        </p>
      ) : (
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {incompleteTasks.map((task) => (
            <div
              key={task.id}
              className="flex gap-3 items-start p-3 rounded-xl border border-slate-200 bg-slate-50 transition hover:bg-slate-100 dark:border-zinc-700 dark:bg-zinc-800/50 dark:hover:bg-zinc-800"
            >
              {/* Priority dot */}
              <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${getPriorityColor(task.priority)}`} />

              {/* Content */}
              <div className="flex-1 min-w-0">
                <label className="flex items-start gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={false}
                    onChange={() => onComplete(task.id)}
                    className="w-4 h-4 rounded border-slate-300 text-moss mt-0.5 flex-shrink-0 dark:border-zinc-600"
                  />
                  <div className="flex-1">
                    <p className="text-xs font-medium text-ink dark:text-white line-clamp-2">
                      {task.title}
                    </p>
                    <div className="flex gap-2 mt-1 flex-wrap">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-white text-slate-600 dark:bg-zinc-700 dark:text-white/70">
                        {task.estimatedMinutes}m
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-white text-moss font-semibold dark:bg-zinc-700 dark:text-emerald-400">
                        +{task.xpReward}
                      </span>
                    </div>
                  </div>
                </label>
              </div>

              {/* Delete button */}
              <button
                onClick={() => onDelete(task.id)}
                className="p-1.5 text-slate/50 hover:text-slate transition rounded-lg hover:bg-slate-200 dark:text-white/40 dark:hover:text-white/70 dark:hover:bg-zinc-700 flex-shrink-0"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default TaskList
