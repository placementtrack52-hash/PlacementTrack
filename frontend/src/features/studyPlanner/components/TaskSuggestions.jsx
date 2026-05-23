import { useState } from 'react'
import { suggestNextTopics } from '../utils/suggestionEngine'
import { Lightbulb } from 'lucide-react'

const TaskSuggestions = ({ subject, completedTopics, subjectId, onAddSuggested }) => {
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [suggestions, setSuggestions] = useState([])

  const handleGenerate = () => {
    const suggested = suggestNextTopics(subject, completedTopics, subjectId, 3)
    setSuggestions(suggested)
    setShowSuggestions(true)
  }

  return (
    <div className="rounded-[1.75rem] bg-white p-5 shadow-soft dark:bg-gradient-to-br dark:from-zinc-900 dark:via-black dark:to-zinc-900">
      {!showSuggestions ? (
        <button
          onClick={handleGenerate}
          className="w-full flex items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-3 text-xs font-semibold text-ink transition hover:bg-slate-50 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800"
        >
          <Lightbulb className="w-4 h-4" />
          Suggest Tasks
        </button>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-2 mb-3">
            <h3 className="text-xs font-semibold text-ink dark:text-white">
              ✨ Suggested Topics
            </h3>
            <button
              onClick={() => setShowSuggestions(false)}
              className="text-xs text-slate/50 hover:text-slate dark:text-white/40 dark:hover:text-white/70"
            >
              ✕
            </button>
          </div>

          {suggestions.length === 0 ? (
            <p className="text-xs text-slate/70 text-center py-2 dark:text-white/50">
              No more topics! You're all caught up.
            </p>
          ) : (
            <>
              {suggestions.map((topic) => (
                <div
                  key={topic.id}
                  className="p-3 rounded-xl border border-sky-200 bg-sky-50 dark:border-blue-900/50 dark:bg-blue-950/30"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1">
                      <p className="text-xs font-medium text-ink dark:text-white">
                        {topic.name}
                      </p>
                      <p className="text-xs text-slate/70 mt-0.5 dark:text-white/50">
                        {topic.estimatedMinutes} min • {topic.difficulty}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      onAddSuggested(topic.name, topic.id, topic.estimatedMinutes, 'medium')
                      setShowSuggestions(false)
                    }}
                    className="w-full rounded-full bg-gradient-to-r from-sky-500 to-blue-500 px-3 py-1.5 text-xs font-semibold text-white transition hover:scale-105 dark:from-sky-600 dark:to-blue-600"
                  >
                    Add as Task
                  </button>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default TaskSuggestions
