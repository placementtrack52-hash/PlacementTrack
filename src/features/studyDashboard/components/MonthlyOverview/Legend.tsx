import { memo } from 'react'

const legendItems = [
  { label: '0-1h', color: '#1a1f35' },
  { label: '1-2h', color: '#10b981' },
  { label: '2-3h', color: '#22c55e' },
  { label: '3+h', color: '#34d399' },
]

const Legend = memo(() => (
  <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-4">
    <div className="flex flex-wrap items-center gap-4 text-sm text-white">
      {legendItems.map((item) => (
        <div key={item.label} className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
    <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white">
      <span>Low</span>
      <div className="mx-4 h-2 flex-1 rounded-full bg-gradient-to-r from-[#1a1f35] via-[#10b981] to-[#34d399]" />
      <span>High</span>
    </div>
  </div>
))

Legend.displayName = 'Legend'

export default Legend
