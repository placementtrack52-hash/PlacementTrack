import { BarChart3, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useUI } from '../context/UIContext'
import ProgressOverlay from '../features/studyDashboard/components/ProgressOverlay'
import Logo from './Logo'

const navItems = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/subjects', label: 'Subjects' },
  { to: '/company-prep', label: 'Company Prep' },
  { to: '/challenge', label: 'Daily Challenge' },
]

const PageShell = ({ title, subtitle, actions, children }) => {
  const { user, logout } = useAuth()
  const { isDark, toggleTheme } = useUI()
  const [isProgressOpen, setIsProgressOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.12),_transparent_22%),linear-gradient(180deg,#f8fafc,#eef4ff)] text-ink transition-colors duration-300 dark:bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.12),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(234,179,8,0.1),_transparent_20%),linear-gradient(180deg,#000000,#050505)] dark:text-white">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur dark:border-zinc-800 dark:bg-black/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-3">
            <nav className="flex items-center gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-sm font-medium transition ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-sm dark:bg-blue-500'
                        : 'bg-white text-slate-700 hover:bg-slate-100 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => setIsProgressOpen(true)}
              className="inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-400 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(16,185,129,0.25)] transition hover:scale-[1.02] dark:from-emerald-500 dark:to-lime-400 dark:text-black"
            >
              <BarChart3 className="h-4 w-4" />
              Progress
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              className="shrink-0 min-h-[44px] rounded-full border border-slate-200/70 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? 'Light mode' : 'Dark mode'}
            </button>

            <button
              type="button"
              onClick={logout}
              className="shrink-0 min-h-[44px] rounded-full bg-gradient-to-r from-rose-500 to-red-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(239,68,68,0.28)] transition hover:from-rose-600 hover:to-red-600 hover:shadow-[0_16px_36px_rgba(239,68,68,0.34)] dark:from-yellow-400 dark:to-amber-300 dark:text-black"
            >
              Log out
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setIsProgressOpen(true)}
              className="inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-green-400 text-white shadow-[0_12px_30px_rgba(16,185,129,0.25)] transition hover:scale-[1.02] dark:from-emerald-500 dark:to-lime-400 dark:text-black"
              aria-label="Progress"
            >
              <BarChart3 className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-full border border-slate-200/70 bg-white text-slate-700 transition hover:bg-slate-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200/70 bg-white/95 backdrop-blur dark:border-zinc-800 dark:bg-black/95">
            <nav className="flex flex-col space-y-1 px-4 py-4 sm:px-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-base font-medium transition ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-sm dark:bg-blue-500'
                        : 'text-slate-700 hover:bg-slate-100 dark:text-white dark:hover:bg-zinc-900'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-200 pt-4 dark:border-zinc-800">
                <button
                  type="button"
                  onClick={() => { toggleTheme(); setIsMobileMenuOpen(false); }}
                  className="flex min-h-[44px] items-center justify-center rounded-xl border border-slate-200/70 bg-white px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900"
                >
                  {isDark ? 'Light mode' : 'Dark mode'}
                </button>
                <button
                  type="button"
                  onClick={() => { logout(); setIsMobileMenuOpen(false); }}
                  className="flex min-h-[44px] items-center justify-center rounded-xl bg-gradient-to-r from-rose-500 to-red-500 px-4 text-sm font-semibold text-white shadow-sm transition hover:from-rose-600 hover:to-red-600 dark:from-yellow-400 dark:to-amber-300 dark:text-black"
                >
                  Log out
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <section className="practice-feedback-header rounded-[2rem] bg-white/90 p-5 sm:p-8 shadow-soft ring-1 ring-slate-200/60 backdrop-blur dark:bg-zinc-900 dark:ring-zinc-800">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-slate-500 dark:text-emerald-300">
                Welcome back, {user?.name}
              </p>
              <h1 className="mt-2 rounded-xl bg-white px-3 sm:px-4 py-2 font-display text-2xl sm:text-3xl md:text-4xl font-bold text-ink dark:bg-zinc-800 dark:text-white break-words">
                {title}
              </h1>
              {subtitle ? (
                <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-600 dark:text-slate-300">{subtitle}</p>
              ) : null}
            </div>
            {actions ? <div className="flex flex-col sm:flex-row flex-wrap gap-3 w-full md:w-auto">{actions}</div> : null}
          </div>
        </section>
        <div className="mt-6 sm:mt-8">{children}</div>
      </main>
      <ProgressOverlay isOpen={isProgressOpen} onClose={() => setIsProgressOpen(false)} />
    </div>
  )
}

export default PageShell

