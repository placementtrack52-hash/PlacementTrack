const ProgressBar = ({ value }) => (
  <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-zinc-700">
    <div
      className="h-full rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-emerald-500 transition-all duration-700 ease-out"
      style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
    />
  </div>
)

export default ProgressBar
