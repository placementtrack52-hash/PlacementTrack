import { useMemo, useState } from 'react'
import { ArrowUpRight, PencilLine } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import PageShell from '../components/PageShell'

const buildRoomCode = () => Math.random().toString(36).slice(2, 8).toUpperCase()

const formatCodePreview = (value) => {
  const sanitized = value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase().slice(0, 6)
  return sanitized.padEnd(6, '0').split('').join(' ')
}

const StudyRoomPage = () => {
  const navigate = useNavigate()
  const [roomCode, setRoomCode] = useState('')
  const [error, setError] = useState('')

  const codePreview = useMemo(() => formatCodePreview(roomCode), [roomCode])

  const handleCreateRoom = () => {
    const generatedRoomCode = buildRoomCode()
    navigate('/study-room/create', {
      state: { generatedRoomCode },
    })
  }

  const handleJoinRoom = (event) => {
    event.preventDefault()
    const sanitizedCode = roomCode.replace(/[^a-zA-Z0-9]/g, '').toUpperCase().slice(0, 6)

    if (sanitizedCode.length !== 6) {
      setError('Enter a valid 6-character room code.')
      return
    }

    setError('')
    navigate(`/study-room/room/${sanitizedCode}`, {
      state: {
        roomCode: sanitizedCode,
        roomName: 'Joined Study Room',
        topic: 'Shared Session',
        focusMinutes: 45,
        breakMinutes: 10,
        goal: 'Join the session and stay accountable with your group.',
        privacy: 'private',
        mode: 'guest',
      },
    })
  }

  return (
    <PageShell
      title="Study Room"
      subtitle="Create a room or join one shared by your friends."
      actions={
        <Link
          to="/dashboard"
          className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-[#0f1720]"
        >
          Back to dashboard
        </Link>
      }
    >
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#f8fbff,#ffffff)] p-6 shadow-soft dark:border-slate-700 dark:bg-[#172430] sm:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink dark:text-white sm:text-5xl">
            Group Study Rooms
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-500 dark:text-slate-300">
            Sync up with high-achievers. Hold each other accountable in real-time.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <section className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-[#111b25] sm:p-8">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 dark:bg-emerald-500/10 dark:text-emerald-300">
              <PencilLine className="h-10 w-10" />
            </div>
            <div className="mt-8 text-center">
              <h2 className="text-3xl font-bold text-ink dark:text-white">Create a Room</h2>
              <p className="mt-5 text-lg leading-8 text-slate-500 dark:text-slate-300">
                Generate a secure link and code to invite your study group.
              </p>
            </div>

            <button
              type="button"
              onClick={handleCreateRoom}
              className="mt-10 inline-flex w-full items-center justify-center rounded-2xl bg-[#1fbc82] px-6 py-4 text-lg font-semibold text-white transition hover:bg-[#18a872] focus:outline-none focus:ring-2 focus:ring-[#1fbc82]/30"
            >
              Generate Room Code
            </button>
          </section>

          <section className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-[#111b25] sm:p-8">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-blue-500 dark:bg-blue-500/10 dark:text-blue-300">
              <ArrowUpRight className="h-10 w-10" />
            </div>
            <div className="mt-8 text-center">
              <h2 className="text-3xl font-bold text-ink dark:text-white">Join a Room</h2>
              <p className="mt-5 text-lg leading-8 text-slate-500 dark:text-slate-300">
                Enter a 6-character code to enter an active session.
              </p>
            </div>

            <form onSubmit={handleJoinRoom} className="mt-10">
              <label className="block">
                <span className="sr-only">Room code</span>
                <input
                  type="text"
                  inputMode="text"
                  value={roomCode}
                  onChange={(event) => {
                    setRoomCode(event.target.value)
                    if (error) setError('')
                  }}
                  placeholder="000000"
                  className="w-full rounded-2xl border border-slate-200 bg-[#f8fbff] px-6 py-5 text-center text-4xl font-semibold tracking-[0.45em] text-slate-400 outline-none transition focus:border-blue-400 focus:bg-white focus:text-slate-700 dark:border-slate-700 dark:bg-[#172430] dark:text-slate-300 dark:focus:border-blue-400 dark:focus:bg-[#101925]"
                />
              </label>

              <p className="mt-4 text-center text-2xl font-semibold tracking-[0.45em] text-slate-400 dark:text-slate-500">
                {codePreview}
              </p>

              {error ? (
                <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-center text-sm text-red-600 dark:bg-red-500/10 dark:text-red-300">
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                className="mt-8 inline-flex w-full items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-4 text-lg font-semibold text-ink transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 dark:border-slate-700 dark:bg-[#172430] dark:text-white dark:hover:bg-[#223244]"
              >
                Join Session
              </button>
            </form>
          </section>
        </div>
      </div>
    </PageShell>
  )
}

export default StudyRoomPage
