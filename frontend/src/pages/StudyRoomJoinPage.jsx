import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PageShell from '../components/PageShell'

const StudyRoomJoinPage = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    roomCode: '',
    displayName: '',
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    const roomCode = form.roomCode.trim().toUpperCase()
    if (!roomCode) return

    navigate(`/study-room/room/${roomCode}`, {
      state: {
        roomCode,
        displayName: form.displayName.trim() || 'Guest',
        mode: 'guest',
      },
    })
  }

  return (
    <PageShell
      title="Join Room"
      subtitle="Enter a room code from your friend and go straight into the room."
      actions={
        <Link
          to="/study-room"
          className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-[#0f1720]"
        >
          Back to room hub
        </Link>
      }
    >
      <div className="mx-auto max-w-3xl">
        <form
          onSubmit={handleSubmit}
          className="rounded-[1.9rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-700 dark:bg-[#172430]"
        >
          <div className="grid gap-5">
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              Room Code
              <input
                type="text"
                value={form.roomCode}
                onChange={(event) => setForm((current) => ({ ...current, roomCode: event.target.value.replace(/\s+/g, '') }))}
                placeholder="APT245"
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 uppercase tracking-[0.18em] text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-[#0f1720] dark:text-slate-100"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              Your Display Name
              <input
                type="text"
                value={form.displayName}
                onChange={(event) => setForm((current) => ({ ...current, displayName: event.target.value }))}
                placeholder="Gaurav"
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-[#0f1720] dark:text-slate-100"
              />
            </label>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="submit"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1c2541] dark:bg-white dark:text-[#0f1720] dark:hover:bg-slate-200"
            >
              Join room
            </button>
            <Link
              to="/study-room/create"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-[#111b25] dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Create a room instead
            </Link>
          </div>
        </form>
      </div>
    </PageShell>
  )
}

export default StudyRoomJoinPage
