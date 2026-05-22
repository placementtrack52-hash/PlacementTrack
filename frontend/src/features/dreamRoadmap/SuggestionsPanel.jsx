import { Lightbulb } from 'lucide-react'

const SuggestionsPanel = ({ suggestions }) => {
  return (
    <div className="rounded-[1.75rem] bg-gradient-to-br from-violet-200 via-purple-100 to-white p-6 shadow-soft ring-1 ring-slate-200/60 dark:!bg-gradient-to-br dark:!from-zinc-800 dark:!via-zinc-900 dark:!to-zinc-800 dark:ring-zinc-700">
      <div className="flex items-center gap-3 mb-4">
        <Lightbulb className="h-6 w-6 text-purple-600 dark:text-purple-400" />
        <h3 className="font-display text-xl font-bold text-ink dark:text-white">Improvement Suggestions</h3>
      </div>
      <ul className="grid gap-3 sm:grid-cols-2">
        {suggestions.map((suggestion, index) => (
          <li key={index} className="rounded-lg bg-white/70 p-4 dark:bg-zinc-700/50">
            <p className="text-sm font-medium text-ink dark:text-white">{suggestion}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SuggestionsPanel
