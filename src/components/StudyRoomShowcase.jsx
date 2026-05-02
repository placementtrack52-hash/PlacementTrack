import { ArrowRight, Clock3, DoorOpen, MessageSquareText, ShieldCheck, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext'

const roomHighlights = [
  {
    title: 'Focus Timer',
    description: 'Run clean Pomodoro sessions without any paid integrations.',
    icon: Clock3,
    accent: 'bg-[#fff1e8] text-[#d97745] dark:bg-[#2b1e18] dark:text-[#f4b187]',
  },
  {
    title: 'Create Or Join',
    description: 'Open your own room or enter a shared room code with friends.',
    icon: DoorOpen,
    accent: 'bg-[#eaf7ef] text-[#2f7a62] dark:bg-[#13251d] dark:text-[#8ad0b7]',
  },
  {
    title: 'Text Chat',
    description: 'Coordinate quietly with room chat and task reminders only.',
    icon: MessageSquareText,
    accent: 'bg-[#eaf2ff] text-[#3b6dd8] dark:bg-[#16233a] dark:text-[#9fc0ff]',
  },
]

const StudyRoomShowcase = () => {
  const { streakDays, progress, completedCount } = useProgress()

  const totalSessions = [
    ...Object.values(progress.quizResults).flatMap((levels) => Object.values(levels)),
    ...Object.values(progress.finalTests),
    ...Object.values(progress.dailyChallenges),
  ].length

  return (
    <section className="overflow-hidden rounded-[1.85rem] border border-slate-200 bg-[linear-gradient(140deg,rgba(255,248,242,0.96),rgba(255,255,255,0.96),rgba(239,246,255,0.96))] p-6 shadow-soft dark:border-slate-700 dark:bg-[#172430]">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-stretch">
        <div className="flex-1 rounded-[1.65rem] border border-white/80 bg-white/85 p-6 shadow-[0_20px_55px_rgba(148,163,184,0.16)] dark:border-white/10 dark:bg-white/5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0f172a] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-white dark:bg-white dark:text-[#0f172a]">
                <ShieldCheck className="h-4 w-4" />
                Free Study Room
              </div>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ink dark:text-white">
                Quiet group focus for students who want structure, not clutter
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
                Create a room, join by code, run a focus session, and keep the energy calm with a text-only setup.
                This version stays aligned with your free-safe direction and avoids fake live preview data.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 xl:w-[23rem] xl:grid-cols-1">
              <div className="rounded-2xl bg-[#f8fafc] px-4 py-4 dark:bg-[#111b25]">
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Learning Streak</p>
                <p className="mt-2 text-2xl font-bold text-ink dark:text-white">{streakDays} days</p>
              </div>
              <div className="rounded-2xl bg-[#f8fafc] px-4 py-4 dark:bg-[#111b25]">
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Completed Topics</p>
                <p className="mt-2 text-2xl font-bold text-ink dark:text-white">{completedCount}</p>
              </div>
              <div className="rounded-2xl bg-[#f8fafc] px-4 py-4 dark:bg-[#111b25]">
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Tracked Sessions</p>
                <p className="mt-2 text-2xl font-bold text-ink dark:text-white">{totalSessions}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {roomHighlights.map(({ title, description, icon: Icon, accent }) => (
              <article key={title} className="rounded-[1.45rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#111b25]">
                <div className={`inline-flex rounded-2xl p-3 ${accent}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink dark:text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="xl:w-[24rem] rounded-[1.65rem] bg-[#0f172a] p-6 text-white shadow-[0_26px_70px_rgba(15,23,42,0.30)]">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-white/10 p-3">
              <Users className="h-5 w-5 text-sky-300" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-300">Study Room</p>
              <h3 className="mt-1 text-2xl font-semibold">Open a real room page</h3>
            </div>
          </div>

          <div className="mt-5 rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
            <p className="text-sm leading-6 text-slate-200">
              Use this as your distraction-free focus corner. Start a timer, keep your streak moving, and pair it
              with notes or daily routine planning.
            </p>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                <span>Entry</span>
                <span className="font-semibold text-white">Create or Join</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                <span>Chat</span>
                <span className="font-semibold text-white">Text only</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                <span>Cost model</span>
                <span className="font-semibold text-emerald-300">Free-safe setup</span>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <Link
              to="/study-room"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0f172a] transition hover:bg-slate-100"
            >
              Open Study Room
              <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              <Link
                to="/study-room/create"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Create Room
              </Link>
              <Link
                to="/study-room/join"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Join Room
              </Link>
              <Link
                to="/notes"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Open Notes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudyRoomShowcase
