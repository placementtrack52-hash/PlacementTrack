const ProgressBar = ({ value }) => (
  <div className="h-3 w-full overflow-hidden rounded-full bg-[#e7ddd2] dark:bg-[#223244]">
    <div
      className="h-full rounded-full bg-gradient-to-r from-ember via-sun to-moss transition-all duration-500"
      style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
    />
  </div>
)

export default ProgressBar
