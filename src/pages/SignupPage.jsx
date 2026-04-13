import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthShell from '../components/AuthShell'
import { useAuth } from '../context/AuthContext'

const SignupPage = () => {
  const navigate = useNavigate()
  const { signup } = useAuth()
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const result = signup(form)

    if (!result.success) {
      setError(result.message)
      return
    }

    navigate('/dashboard')
  }

  return (
    <AuthShell
      title="Build your own college prep rhythm in one place."
      subtitle="Create an account to unlock progress tracking, quiz history, motivational nudges, and a polished learning flow that keeps revision organized."
      aside={
        <>
          <p className="text-sm uppercase tracking-[0.2em] text-white/70">Inside your setup</p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-white/85">
            <li>Track completed topics across all three subjects</li>
            <li>Watch accuracy grow level by level</li>
            <li>Collect Prep Points and badges as you go</li>
          </ul>
        </>
      }
    >
      <h2 className="font-display text-3xl font-bold text-ink">Create account</h2>
      <p className="mt-2 text-sm text-slate">We’ll keep it simple and all in-browser.</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div>
          <label className="text-sm font-medium text-ink">Full name</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 outline-none transition focus:border-moss"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-ink">Email</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 outline-none transition focus:border-moss"
            placeholder="student@college.edu"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-ink">Password</label>
          <input
            type="password"
            minLength={6}
            required
            value={form.password}
            onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))}
            className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 outline-none transition focus:border-moss"
            placeholder="Minimum 6 characters"
          />
        </div>
        {error ? <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p> : null}
        <button
          type="submit"
          className="w-full rounded-2xl bg-moss px-4 py-3 font-semibold text-white transition hover:translate-y-[-1px]"
        >
          Start learning
        </button>
      </form>

      <p className="mt-6 text-sm text-slate">
        Already have an account?{' '}
        <Link to="/login" className="font-semibold text-moss">
          Log in
        </Link>
      </p>
    </AuthShell>
  )
}

export default SignupPage
