const LoadingScreen = ({ label = 'Loading Placement Track...' }) => (
  <div className="flex min-h-screen items-center justify-center bg-hero-mesh px-6">
    <div className="rounded-[2rem] border border-white/70 bg-white/80 px-8 py-10 text-center shadow-soft backdrop-blur">
      <div className="mx-auto mb-4 h-12 w-12 animate-pulse rounded-2xl bg-ink" />
      <p className="font-display text-xl font-semibold text-ink">{label}</p>
      <p className="mt-2 text-sm text-slate">Warming up your personal prep space.</p>
    </div>
  </div>
)

export default LoadingScreen
