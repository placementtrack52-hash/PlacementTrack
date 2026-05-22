import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const RoadmapTimeline = ({ phases }) => {
  const [expandedPhase, setExpandedPhase] = useState(null)

  return (
    <div className="rounded-[1.75rem] bg-white/90 p-6 sm:p-8 shadow-soft ring-1 ring-slate-200/60 dark:bg-zinc-900 dark:ring-zinc-800">
      <h3 className="font-display text-xl font-bold text-ink dark:text-white mb-6">Your Roadmap Timeline</h3>
      <div className="space-y-3">
        {phases.map((phase, index) => (
          <div key={phase.id} className="overflow-hidden rounded-lg border border-slate-200 dark:border-zinc-700">
            <button
              onClick={() => setExpandedPhase(expandedPhase === phase.id ? null : phase.id)}
              className="w-full flex items-center justify-between bg-slate-50 hover:bg-slate-100 dark:bg-zinc-800 dark:hover:bg-zinc-700 p-4 transition"
            >
              <div className="flex-1 text-left">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-sm font-bold text-white">
                    {phase.number}
                  </span>
                  <div>
                    <h4 className="font-semibold text-ink dark:text-white">{phase.name}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{phase.duration} • {phase.focus}</p>
                  </div>
                </div>
              </div>
              <ChevronDown
                className={`h-5 w-5 text-slate-600 transition-transform ${expandedPhase === phase.id ? 'rotate-180' : ''}`}
              />
            </button>

            {expandedPhase === phase.id && (
              <div className="border-t border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-4">
                <ul className="space-y-2">
                  {phase.tasks.map((task) => (
                    <li key={task.id} className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-ink dark:text-white">{task.title}</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">Priority: {task.priority}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default RoadmapTimeline
