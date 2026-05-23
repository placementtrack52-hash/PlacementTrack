import { useState } from 'react'
import { getDailyProgress } from '../utils/plannerUtils'

const StudyGoalCard = ({ goal, onUpdate, onReset }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [tempTarget, setTempTarget] = useState(goal.targetMinutes)
  const progress = getDailyProgress(goal.completedMinutes, goal.targetMinutes)

  const handleSave = () => {
    if (tempTarget > 0) {
      onUpdate(tempTarget)
      setIsEditing(false)
    }
  }

  return (
    <div className="rounded-[1.75rem] bg-white p-5 shadow-soft dark:bg-gradient-to-br dark:from-zinc-900 dark:via-black dark:to-zinc-900">
      <div className="flex items-center justify-between gap-2 mb-3">
        <h3 className="font-display text-sm font-semibold text-ink dark:text-white">Today's Goal</h3>
        <span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
          Daily
        </span>
      </div>

      {isEditing ? (
        <div className="space-y-3">
          <div className="flex gap-2">
            <input
              type="number"
              value={tempTarget}
              onChange={(e) => setTempTarget(Math.max(1, parseInt(e.target.value) || 0))}
              className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
              min="1"
              max="480"
            />
            <span className="px-3 py-2 text-sm text-slate dark:text-white/70">min</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="flex-1 rounded-full bg-moss px-3 py-2 text-xs font-semibold text-white transition hover:scale-105 dark:bg-emerald-600"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="flex-1 rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold text-ink transition hover:bg-slate-50 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <p className="text-xs text-slate mb-3 dark:text-white/70">
            {goal.completedMinutes} / {goal.targetMinutes} minutes
          </p>

          {/* Progress Bar */}
          <div className="mb-4 h-2 rounded-full bg-slate-200 dark:bg-zinc-700 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <button
            onClick={() => setIsEditing(true)}
            className="w-full rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold text-ink transition hover:bg-slate-50 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800"
          >
            Edit Goal
          </button>
        </>
      )}
    </div>
  )
}

export default StudyGoalCard
