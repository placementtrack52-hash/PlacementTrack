import { useMemo } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import PageShell from '../components/PageShell'
import StudyRoom from '../components/StudyRoom'

const StudyRoomWorkspacePage = () => {
  const { roomCode } = useParams()
  const location = useLocation()

  const room = useMemo(() => {
    const state = location.state ?? {}

    return {
      roomCode: roomCode?.toUpperCase() ?? 'ROOM',
      roomName: state.roomName || 'Study Room',
      topic: state.topic || 'General Study',
      focusMinutes: state.focusMinutes || 45,
      breakMinutes: state.breakMinutes || 10,
      goal: state.goal || 'Stay focused and complete this session with intention.',
      privacy: state.privacy || 'private',
      mode: state.mode || 'guest',
      displayName: state.displayName || 'You',
    }
  }, [location.state, roomCode])

  return (
    <PageShell
      title={room.roomName}
      subtitle={`${room.topic} room • Code ${room.roomCode} • ${room.privacy === 'private' ? 'Private by code' : 'Public room'}`}
      actions={
        <div className="flex flex-wrap gap-3">
          <Link
            to="/study-room"
            className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-[#111b25] dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Back to room hub
          </Link>
          <Link
            to="/study-room/create"
            className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-[#0f1720]"
          >
            New room
          </Link>
        </div>
      }
    >
      <div className="grid gap-6 xl:grid-cols-[1.12fr_0.88fr]">
        <StudyRoom room={room} />

        <aside className="space-y-6">
          <section className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-700 dark:bg-[#172430]">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Room Details</p>
            <div className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center justify-between rounded-2xl bg-[#faf6f0] px-4 py-4 dark:bg-[#111b25]">
                <span>Room Code</span>
                <span className="font-semibold text-ink dark:text-white">{room.roomCode}</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-[#eef7f2] px-4 py-4 dark:bg-[#10281f]">
                <span>Focus Length</span>
                <span className="font-semibold text-ink dark:text-white">{room.focusMinutes} min</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-[#edf4ff] px-4 py-4 dark:bg-[#142133]">
                <span>Break Length</span>
                <span className="font-semibold text-ink dark:text-white">{room.breakMinutes} min</span>
              </div>
              <div className="rounded-2xl bg-[#fff7ed] px-4 py-4 leading-6 dark:bg-[#2a1f18]">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Session Goal</p>
                <p className="mt-2 text-sm font-medium text-ink dark:text-white">{room.goal}</p>
              </div>
            </div>
          </section>

          <section className="rounded-[1.8rem] border border-slate-200 bg-[linear-gradient(145deg,#fff8ef,#ffffff,#eff6ff)] p-6 shadow-soft dark:border-slate-700 dark:bg-[#172430]">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Room Actions</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="/notes"
                className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1c2541] dark:bg-white dark:text-[#0f1720] dark:hover:bg-slate-200"
              >
                Open notes
              </Link>
              <Link
                to="/daily-routine"
                className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-[#111b25] dark:text-slate-200 dark:hover:bg-slate-800"
              >
                Open routine
              </Link>
            </div>
          </section>
        </aside>
      </div>
    </PageShell>
  )
}

export default StudyRoomWorkspacePage
