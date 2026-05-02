import { useState } from 'react'
import { ThumbsUp, ThumbsDown } from 'lucide-react'
import { feedbackApi } from '../services/api'
import { useAuth } from '../context/AuthContext'

const HelpfulWidget = ({ contextData = {} }) => {
  const { user } = useAuth()
  const [status, setStatus] = useState('idle') // idle, submitting, success

  const handleVote = async (isHelpful) => {
    if (status !== 'idle') return
    setStatus('submitting')
    
    try {
      await feedbackApi.submitHelpful({
        url: window.location.pathname,
        contextData: { ...contextData, isHelpful },
        user: user?._id || undefined
      })
      setStatus('success')
    } catch (error) {
      console.error('Failed to submit helpful feedback', error)
      setStatus('idle')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-2 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 ring-1 ring-emerald-200 dark:ring-emerald-500/20 w-fit animate-in fade-in duration-300">
        <ThumbsUp className="h-4 w-4" />
        Thanks for your feedback!
      </div>
    )
  }

  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white px-5 py-3 shadow-sm ring-1 ring-slate-200 dark:bg-zinc-900 dark:ring-zinc-800 w-fit">
      <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Was this helpful?</span>
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleVote(true)}
          disabled={status === 'submitting'}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition hover:bg-emerald-100 hover:text-emerald-600 dark:bg-zinc-800 dark:text-slate-400 dark:hover:bg-emerald-500/20 dark:hover:text-emerald-400"
        >
          <ThumbsUp className="h-4 w-4" />
        </button>
        <button
          onClick={() => handleVote(false)}
          disabled={status === 'submitting'}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition hover:bg-rose-100 hover:text-rose-600 dark:bg-zinc-800 dark:text-slate-400 dark:hover:bg-rose-500/20 dark:hover:text-rose-400"
        >
          <ThumbsDown className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

export default HelpfulWidget
