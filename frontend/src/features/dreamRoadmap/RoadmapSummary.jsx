const RoadmapSummary = ({ roadmap }) => {
  return (
    <div className="rounded-[1.75rem] bg-gradient-to-br from-blue-200 via-indigo-100 to-white p-6 shadow-soft ring-1 ring-slate-200/60 dark:!bg-gradient-to-br dark:!from-zinc-800 dark:!via-zinc-900 dark:!to-zinc-800 dark:ring-zinc-700">
      <h3 className="font-display text-xl font-bold text-ink dark:text-white mb-4">Your Roadmap</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg bg-white/70 p-4 dark:bg-zinc-700/50">
          <p className="text-xs uppercase tracking-widest text-slate-600 dark:text-slate-400">Company</p>
          <p className="mt-2 font-semibold text-ink dark:text-white">{roadmap.company}</p>
        </div>
        <div className="rounded-lg bg-white/70 p-4 dark:bg-zinc-700/50">
          <p className="text-xs uppercase tracking-widest text-slate-600 dark:text-slate-400">Role</p>
          <p className="mt-2 font-semibold text-ink dark:text-white">{roadmap.role}</p>
        </div>
        <div className="rounded-lg bg-white/70 p-4 dark:bg-zinc-700/50">
          <p className="text-xs uppercase tracking-widest text-slate-600 dark:text-slate-400">Level</p>
          <p className="mt-2 font-semibold text-ink dark:text-white">{roadmap.level}</p>
        </div>
        <div className="rounded-lg bg-white/70 p-4 dark:bg-zinc-700/50">
          <p className="text-xs uppercase tracking-widest text-slate-600 dark:text-slate-400">Duration</p>
          <p className="mt-2 font-semibold text-ink dark:text-white">{roadmap.totalDuration}</p>
        </div>
      </div>
    </div>
  )
}

export default RoadmapSummary
