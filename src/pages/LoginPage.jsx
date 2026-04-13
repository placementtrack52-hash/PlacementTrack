import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthShell from '../components/AuthShell'
import { useAuth } from '../context/AuthContext'

const LoginPage = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const result = login(form)

    if (!result.success) {
      setError(result.message)
      return
    }

    navigate('/dashboard')
  }

  return (
    <AuthShell
      title="Prep smarter, stay consistent, and see every win."
      subtitle="Prep Master gives college students a calm, modern space to revise notes, attempt quizzes, and track progress across aptitude, verbal, and reasoning."
      aside={
        <>
          <p className="text-sm uppercase tracking-[0.2em] text-white/70">Why students stay here</p>
          <div className="mt-4 space-y-4 text-sm leading-6 text-white/85">
            <p>Structured topic notes help you move from basics to shortcuts without feeling scattered.</p>
            <p>Every quiz result, topic completion, and feedback entry stays safely in your browser using LocalStorage.</p>
            <p>It’s your own private prep cockpit, minus the backend drama.</p>
          </div>
        </>
      }
    >
      <h2 className="font-display text-3xl font-bold text-ink">Login</h2>
      <p className="mt-2 text-sm text-slate">Welcome back. Let’s continue your streak.</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
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
            required
            value={form.password}
            onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))}
            className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 outline-none transition focus:border-moss"
            placeholder="Enter your password"
          />
        </div>
        {error ? <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p> : null}
        <button
          type="submit"
          className="w-full rounded-2xl bg-ink px-4 py-3 font-semibold text-white transition hover:translate-y-[-1px]"
        >
          Enter dashboard
        </button>
      </form>

      <p className="mt-6 text-sm text-slate">
        New here?{' '}
        <Link to="/signup" className="font-semibold text-moss">
          Create an account
        </Link>
      </p>
    </AuthShell>
  )
}

export default LoginPage
