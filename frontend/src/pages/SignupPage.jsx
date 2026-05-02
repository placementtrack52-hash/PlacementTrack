import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthShell from '../components/AuthShell'
import { useAuth } from '../context/AuthContext'

const SignupPage = () => {
  const navigate = useNavigate()
  const { signup } = useAuth()
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' })
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    // Client-side validation
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match. Please check and try again.')
      return
    }

    setIsSubmitting(true)
    const result = await signup({ name: form.name, email: form.email, password: form.password })
    setIsSubmitting(false)

    if (!result.success) {
      setError(result.message)
      return
    }

    navigate('/dashboard')
  }

  const field = (key) => ({
    value: form[key],
    onChange: (e) => setForm((c) => ({ ...c, [key]: e.target.value })),
  })

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
      <p className="mt-2 text-sm text-slate">We'll keep it simple and sync it to your account.</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        {/* Full name */}
        <div>
          <label className="text-sm font-medium text-ink">Full name</label>
          <input
            type="text"
            required
            {...field('name')}
            className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 outline-none transition focus:border-moss"
            placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium text-ink">Email</label>
          <input
            type="email"
            required
            {...field('email')}
            className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 outline-none transition focus:border-moss"
            placeholder="student@college.edu"
          />
        </div>

        {/* Password */}
        <div>
          <label className="text-sm font-medium text-ink">Password</label>
          <input
            type="password"
            minLength={6}
            required
            {...field('password')}
            className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 outline-none transition focus:border-moss"
            placeholder="Minimum 6 characters"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="text-sm font-medium text-ink">Confirm password</label>
          <input
            type="password"
            minLength={6}
            required
            {...field('confirmPassword')}
            className={`mt-2 w-full rounded-2xl border px-4 py-3 outline-none transition focus:border-moss ${
              form.confirmPassword && form.confirmPassword !== form.password
                ? 'border-red-400 bg-red-50'
                : 'border-black/10'
            }`}
            placeholder="Re-enter your password"
          />
          {form.confirmPassword && form.confirmPassword !== form.password && (
            <p className="mt-1 text-xs text-red-500">Passwords do not match</p>
          )}
          {form.confirmPassword && form.confirmPassword === form.password && form.password.length >= 6 && (
            <p className="mt-1 text-xs text-emerald-600">✓ Passwords match</p>
          )}
        </div>

        {error ? <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p> : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-2xl bg-moss px-4 py-3 font-semibold text-white transition hover:translate-y-[-1px] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? 'Creating account...' : 'Start learning'}
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
