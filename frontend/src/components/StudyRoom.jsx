import { useEffect, useMemo, useState } from 'react'
import { CheckCircle2, ClipboardList, Copy, PauseCircle, PlayCircle, RotateCcw } from 'lucide-react'
import { useProgress } from '../context/ProgressContext'

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

const StudyRoom = ({ room }) => {
  const { streakDays } = useProgress()
  const focusSeconds = (room?.focusMinutes ?? 45) * 60
  const breakSeconds = (room?.breakMinutes ?? 10) * 60
  const [mode, setMode] = useState('focus')
  const [timeLeft, setTimeLeft] = useState(focusSeconds)
  const [isRunning, setIsRunning] = useState(false)
  const [focusScore, setFocusScore] = useState(0)
  const [taskInput, setTaskInput] = useState(room?.goal ?? '')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setMode('focus')
    setTimeLeft(focusSeconds)
    setIsRunning(false)
    setFocusScore(0)
    setTaskInput(room?.goal ?? '')
  }, [focusSeconds, room?.goal])

  useEffect(() => {
    if (!isRunning) return undefined

    const interval = setInterval(() => {
      setTimeLeft((current) => {
        if (current <= 1) {
          if (mode === 'focus') {
            setMode('break')
            return breakSeconds
          }

          setMode('focus')
          return focusSeconds
        }

        return current - 1
      })

      if (mode === 'focus') {
        setFocusScore((previous) => previous + 1)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [breakSeconds, focusSeconds, isRunning, mode])

  useEffect(() => {
    if (!copied) return undefined
    const timer = window.setTimeout(() => setCopied(false), 1800)
    return () => window.clearTimeout(timer)
  }, [copied])

  const totalSeconds = mode === 'focus' ? focusSeconds : breakSeconds
  const progressPercent = ((totalSeconds - timeLeft) / totalSeconds) * 100

  const message = useMemo(() => {
    if (mode === 'break') {
      return 'Break mode is active. Stretch, reset, and return with a clear head.'
    }

    if (isRunning) {
      return 'Your room is live. Keep the session simple and protect this sprint from distractions.'
    }

    return 'Start the session when you are ready. One focused block is better than scattered effort.'
  }, [isRunning, mode])

  const handleCopyCode = async () => {
    if (!room?.roomCode) return

    try {
      await navigator.clipboard.writeText(room.roomCode)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="rounded-[1.85rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-700 dark:bg-[#172430]">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.26em] text-slate-500 dark:text-slate-400">Study Workspace</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink dark:text-white">{room?.roomName ?? 'Study Room'}</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{message}</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 lg:w-[24rem] lg:grid-cols-1">
          <div className="rounded-2xl bg-[#faf6f0] px-4 py-4 dark:bg-[#111b25]">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Room Code</p>
            <div className="mt-2 flex items-center justify-between gap-3">
              <p className="text-xl font-bold tracking-[0.18em] text-ink dark:text-white">{room?.roomCode ?? 'ROOM'}</p>
              <button
                type="button"
                onClick={handleCopyCode}
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-ink transition hover:bg-slate-100 dark:bg-[#172430] dark:text-slate-100 dark:hover:bg-[#223244]"
              >
                <Copy className="h-3.5 w-3.5" />
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>
          <div className="rounded-2xl bg-[#eef7f2] px-4 py-4 dark:bg-[#10281f]">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Mode</p>
            <p className="mt-2 text-xl font-bold capitalize text-ink dark:text-white">{mode}</p>
          </div>
          <div className="rounded-2xl bg-[#edf4ff] px-4 py-4 dark:bg-[#142133]">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Streak</p>
            <p className="mt-2 text-xl font-bold text-ink dark:text-white">{streakDays} days</p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
        <div className="rounded-[1.65rem] bg-[linear-gradient(180deg,#f8fafc,#ffffff)] p-6 shadow-sm dark:bg-[#111b25]">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Session Timer</p>
          <div className="mt-6 flex flex-col items-center text-center">
            <div className="flex h-60 w-60 items-center justify-center rounded-full border-[14px] border-emerald-400/30 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),rgba(255,255,255,0.92)_62%)] dark:bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.24),rgba(17,27,37,0.92)_62%)]">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  {mode === 'focus' ? 'Focus Session' : 'Break Session'}
                </p>
                <p className="mt-3 font-display text-6xl font-bold tracking-[0.08em] text-ink dark:text-white">
                  {formatTime(timeLeft)}
                </p>
              </div>
            </div>

            <div className="mt-6 w-full">
              <div className="h-3 w-full overflow-hidden rounded-full bg-[#e7ddd2] dark:bg-[#223244]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#f28b55] via-[#d9a24d] to-[#3f7a67] transition-all duration-700"
                  style={{ width: `${Math.max(0, Math.min(100, progressPercent))}%` }}
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {!isRunning ? (
                <button
                  type="button"
                  onClick={() => setIsRunning(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1c2541] dark:bg-white dark:text-[#0f1720] dark:hover:bg-slate-200"
                >
                  <PlayCircle className="h-4 w-4" />
                  {timeLeft === (mode === 'focus' ? focusSeconds : breakSeconds) ? 'Start session' : 'Resume'}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsRunning(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  <PauseCircle className="h-4 w-4" />
                  Pause
                </button>
              )}
              <button
                type="button"
                onClick={() => {
                  setIsRunning(false)
                  setMode('focus')
                  setTimeLeft(focusSeconds)
                  setFocusScore(0)
                }}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-[#172430] dark:text-slate-100 dark:hover:bg-[#223244]"
              >
                <RotateCcw className="h-4 w-4" />
                Reset
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <section className="rounded-[1.65rem] bg-[#faf6f0] p-5 shadow-sm dark:bg-[#111b25]">
            <div className="flex items-center gap-2">
              <ClipboardList className="h-5 w-5 text-[#d97745]" />
              <h3 className="text-lg font-semibold text-ink dark:text-white">Room Goal</h3>
            </div>
            <textarea
              rows={5}
              value={taskInput}
              onChange={(event) => setTaskInput(event.target.value)}
              className="mt-4 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-[#172430] dark:text-slate-100"
            />
          </section>

          <section className="rounded-[1.65rem] bg-[#eef7f2] p-5 shadow-sm dark:bg-[#10281f]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-[#2f7a62]" />
              <h3 className="text-lg font-semibold text-ink dark:text-white">Session Summary</h3>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/80 px-4 py-4 dark:bg-white/10">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Focus Score</p>
                <p className="mt-2 text-2xl font-bold text-ink dark:text-white">{focusScore}</p>
              </div>
              <div className="rounded-2xl bg-white/80 px-4 py-4 dark:bg-white/10">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Focus Length</p>
                <p className="mt-2 text-2xl font-bold text-ink dark:text-white">{room?.focusMinutes ?? 45} min</p>
              </div>
              <div className="rounded-2xl bg-white/80 px-4 py-4 dark:bg-white/10">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Break Length</p>
                <p className="mt-2 text-2xl font-bold text-ink dark:text-white">{room?.breakMinutes ?? 10} min</p>
              </div>
              <div className="rounded-2xl bg-white/80 px-4 py-4 dark:bg-white/10">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Role</p>
                <p className="mt-2 text-2xl font-bold capitalize text-ink dark:text-white">{room?.mode ?? 'guest'}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default StudyRoom
