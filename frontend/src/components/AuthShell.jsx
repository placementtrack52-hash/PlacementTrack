import Logo from './Logo'

const AuthShell = ({ title, subtitle, children, aside }) => (
  <div className="min-h-screen bg-hero-mesh px-4 py-6 sm:px-6 lg:px-8">
    <div className="mx-auto grid min-h-[calc(100vh-3rem)] max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-soft backdrop-blur sm:p-10">
        <Logo />
        <div className="mt-10 max-w-xl">
          <p className="inline-flex rounded-full bg-sand px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-moss">
            Campus Prep Companion
          </p>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-7 text-slate">{subtitle}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              'Structured notes from basics to shortcuts',
              'Topic quizzes with progress tracking',
              'Points, badges, and motivating wins',
            ].map((item) => (
              <div key={item} className="rounded-3xl bg-[#fff7ee] p-4 text-sm text-ink">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-between rounded-[2rem] bg-ink p-6 text-white shadow-soft sm:p-8">
        <div className="rounded-[1.75rem] bg-white/10 p-6 backdrop-blur">
          {aside}
        </div>
        <div className="mt-8 rounded-[1.75rem] bg-white p-6 text-ink sm:p-8">{children}</div>
      </section>
    </div>
  </div>
)

export default AuthShell
