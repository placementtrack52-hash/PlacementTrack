const DailyTaskBox = ({ tasks }) => {
  return (
    <div className="rounded-[1.75rem] bg-gradient-to-br from-amber-200 via-orange-100 to-white p-6 shadow-soft ring-1 ring-slate-200/60 dark:!bg-gradient-to-br dark:!from-zinc-800 dark:!via-zinc-900 dark:!to-zinc-800 dark:ring-zinc-700">
      <h3 className="font-display text-xl font-bold text-ink dark:text-white mb-4">Today's Plan</h3>
      <div className="space-y-3">
        {tasks.map((task, index) => (
          <div key={index} className="flex items-start gap-4 rounded-lg bg-white/70 p-4 dark:bg-zinc-700/50">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-orange-400 to-amber-500 text-sm font-bold text-white flex-shrink-0">
              {index + 1}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-ink dark:text-white">{task.type}</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">{task.title}</p>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">⏱️ {task.duration} • Importance: {task.importance}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DailyTaskBox
