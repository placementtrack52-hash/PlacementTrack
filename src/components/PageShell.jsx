import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useUI } from '../context/UIContext'
import Logo from './Logo'

const navItems = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/subjects', label: 'Subjects' },
  { to: '/challenge', label: 'Daily Challenge' },
  { to: '/mistakes', label: 'Mistake Notebook' },
  { to: '/feedback', label: 'Feedback' },
]

const PageShell = ({ title, subtitle, actions, children }) => {
  const { user, logout } = useAuth()
  const { isDark, toggleTheme } = useUI()

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.12),_transparent_22%),linear-gradient(180deg,#f8fafc,#eef4ff)] text-ink transition-colors duration-300 dark:bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.12),_transparent_24%),linear-gradient(180deg,#0f1720,#111827)] dark:text-slate-100">
      <header className="border-b border-slate-200/70 bg-white/85 backdrop-blur dark:border-slate-700/40 dark:bg-slate-950/90">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <Logo />
          <nav className="flex flex-wrap items-center gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm dark:bg-slate-100 dark:text-slate-950'
                      : 'bg-white text-slate-700 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-700'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full border border-slate-200/70 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700/70 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-700"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? '☀️ Light' : '🌙 Dark'}
            </button>
            <button
              type="button"
              onClick={logout}
              className="rounded-full border border-slate-200/70 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700/70 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              Logout
            </button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] bg-white/90 p-6 shadow-soft ring-1 ring-slate-200/60 backdrop-blur dark:bg-slate-900/80 dark:ring-slate-700/30 sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500 dark:text-emerald-300">Welcome back, {user?.name}</p>
              <h1 className="mt-2 font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">{title}</h1>
              {subtitle ? <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">{subtitle}</p> : null}
            </div>
            {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
          </div>
        </section>
        <div className="mt-8">{children}</div>
      </main>
    </div>
  )
}

export default PageShell
