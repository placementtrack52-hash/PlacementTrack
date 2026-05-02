import { useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import PageShell from '../components/PageShell'

const roomTopics = ['General Study', 'Aptitude', 'Reasoning', 'Verbal', 'Company Prep']
const focusOptions = [25, 45, 60, 90]
const breakOptions = [5, 10, 15]

const buildRoomCode = () =>
  Math.random().toString(36).slice(2, 8).toUpperCase()

const StudyRoomCreatePage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const generatedRoomCode = useMemo(
    () => location.state?.generatedRoomCode || buildRoomCode(),
    [location.state],
  )
  const [form, setForm] = useState({
    roomName: '',
    topic: roomTopics[0],
    focusMinutes: 45,
    breakMinutes: 10,
    goal: '',
    privacy: 'private',
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(`/study-room/room/${generatedRoomCode}`, {
      state: {
        roomName: form.roomName.trim() || 'Study Room',
        topic: form.topic,
        focusMinutes: Number(form.focusMinutes),
        breakMinutes: Number(form.breakMinutes),
        goal: form.goal.trim() || 'Stay focused and complete this study sprint.',
        privacy: form.privacy,
        roomCode: generatedRoomCode,
        mode: 'host',
      },
    })
  }

  return (
    <PageShell
      title="Create Room"
      subtitle="Set up a clean room with a timer, a topic, and a single study goal."
      actions={
        <Link
          to="/study-room"
          className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-[#0f1720]"
        >
          Back to room hub
        </Link>
      }
    >
      <div className="mx-auto max-w-4xl">
        <form
          onSubmit={handleSubmit}
          className="rounded-[1.9rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-700 dark:bg-[#172430]"
        >
          <div className="mb-6 rounded-[1.5rem] bg-[linear-gradient(145deg,#fff8ef,#ffffff,#eef6ff)] px-5 py-5 dark:bg-[#111b25]">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Generated Room Code</p>
            <p className="mt-3 text-3xl font-bold tracking-[0.24em] text-ink dark:text-white">{generatedRoomCode}</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Share this code with your friends after you finish setting up the room.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              Room Name
              <input
                type="text"
                value={form.roomName}
                onChange={(event) => setForm((current) => ({ ...current, roomName: event.target.value }))}
                placeholder="Amazon Aptitude Sprint"
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-[#0f1720] dark:text-slate-100"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              Topic
              <select
                value={form.topic}
                onChange={(event) => setForm((current) => ({ ...current, topic: event.target.value }))}
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-[#0f1720] dark:text-slate-100"
              >
                {roomTopics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              Focus Minutes
              <select
                value={form.focusMinutes}
                onChange={(event) => setForm((current) => ({ ...current, focusMinutes: Number(event.target.value) }))}
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-[#0f1720] dark:text-slate-100"
              >
                {focusOptions.map((minutes) => (
                  <option key={minutes} value={minutes}>
                    {minutes} minutes
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              Break Minutes
              <select
                value={form.breakMinutes}
                onChange={(event) => setForm((current) => ({ ...current, breakMinutes: Number(event.target.value) }))}
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-[#0f1720] dark:text-slate-100"
              >
                {breakOptions.map((minutes) => (
                  <option key={minutes} value={minutes}>
                    {minutes} minutes
                  </option>
                ))}
              </select>
            </label>

            <label className="md:col-span-2 flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              Session Goal
              <textarea
                rows={4}
                value={form.goal}
                onChange={(event) => setForm((current) => ({ ...current, goal: event.target.value }))}
                placeholder="Finish percentages revision and solve 15 questions."
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-[#0f1720] dark:text-slate-100"
              />
            </label>

            <div className="md:col-span-2 flex flex-wrap gap-3">
              {['private', 'public'].map((privacy) => (
                <button
                  key={privacy}
                  type="button"
                  onClick={() => setForm((current) => ({ ...current, privacy }))}
                  className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                    form.privacy === privacy
                      ? 'bg-ink text-white dark:bg-white dark:text-[#0f1720]'
                      : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-[#111b25] dark:text-slate-200 dark:hover:bg-slate-800'
                  }`}
                >
                  {privacy === 'private' ? 'Private by code' : 'Public room'}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="submit"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1c2541] dark:bg-white dark:text-[#0f1720] dark:hover:bg-slate-200"
            >
              Create room
            </button>
            <Link
              to="/study-room/join"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-[#111b25] dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Join a room instead
            </Link>
          </div>
        </form>
      </div>
    </PageShell>
  )
}

export default StudyRoomCreatePage
