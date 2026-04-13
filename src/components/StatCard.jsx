const StatCard = ({ label, value, helper, accent = 'bg-white' }) => (
  <div className={`${accent} rounded-[1.75rem] p-5 shadow-soft`}>
    <p className="text-sm uppercase tracking-[0.2em] text-slate dark:text-slate-300">{label}</p>
    <p className="mt-4 font-display text-4xl font-bold text-ink dark:text-white">{value}</p>
    <p className="mt-2 text-sm text-slate dark:text-slate-300">{helper}</p>
  </div>
)

export default StatCard
