import { useState } from 'react'
import PageShell from '../components/PageShell'
import { useProgress } from '../context/ProgressContext'

const stars = [1, 2, 3, 4, 5]

const FeedbackPage = () => {
  const { feedback, submitFeedback } = useProgress()
  const [rating, setRating] = useState(5)
  const [message, setMessage] = useState('')
  const [saved, setSaved] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    submitFeedback({ rating, message })
    setSaved(true)
    setMessage('')
  }

  return (
    <PageShell title="Feedback" subtitle="Share what feels smooth, what feels confusing, and what would make Prep Master even more useful for your study flow.">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="rounded-[1.75rem] bg-white p-6 shadow-soft">
          <h2 className="font-display text-2xl font-semibold text-ink">Rate your experience</h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <p className="text-sm font-medium text-ink">Rating</p>
              <div className="mt-3 flex gap-3">
                {stars.map((value) => (
                  <button key={value} type="button" onClick={() => setRating(value)} className={`h-12 w-12 rounded-2xl text-lg font-bold transition ${rating >= value ? 'bg-amber-300 text-ink' : 'bg-[#faf6f0] text-slate'}`}>
                    {value}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-ink">Feedback</label>
              <textarea rows="6" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Tell us what’s working well and what should improve." className="mt-2 w-full rounded-3xl border border-black/10 px-4 py-3 outline-none transition focus:border-moss" required />
            </div>
            {saved ? <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-moss">Thanks — your feedback is saved in LocalStorage.</p> : null}
            <button type="submit" className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white">Submit feedback</button>
          </form>
        </section>

        <section className="rounded-[1.75rem] bg-white p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl font-semibold text-ink">Your previous feedback</h2>
            <span className="rounded-full bg-sand px-4 py-2 text-sm text-moss">{feedback.length} entries</span>
          </div>
          <div className="mt-6 space-y-4">
            {feedback.length ? feedback.map((item) => (
              <div key={item.id} className="rounded-[1.5rem] bg-[#faf6f0] p-5">
                <p className="font-semibold text-ink">{'★'.repeat(item.rating)}</p>
                <p className="mt-3 text-sm leading-6 text-slate">{item.message}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-slate">{new Date(item.createdAt).toLocaleString()}</p>
              </div>
            )) : <div className="rounded-[1.5rem] bg-[#faf6f0] p-5 text-sm text-slate">No feedback saved yet. Your first note can help shape the next polish pass.</div>}
          </div>
        </section>
      </div>
    </PageShell>
  )
}

export default FeedbackPage
