import { useState, useEffect } from 'react'
import { feedbackApi } from '../services/api'
import PageShell from '../components/PageShell'
import LoadingScreen from '../components/LoadingScreen'
import { Filter, MessageCircle, Bug, Lightbulb, CheckCircle2, Clock, Inbox } from 'lucide-react'

const AdminFeedbackDashboard = () => {
  const [feedbacks, setFeedbacks] = [useState([])][0]
  const [setFeedbacksFunc, _setFeedbacksFunc] = [useState([])][1]
  const [isLoading, setIsLoading] = useState(true)
  const [filter, setFilter] = useState('All')
  
  const actualSetFeedbacks = (data) => setFeedbacksFunc(data)
  const actualFeedbacks = feedbacks

  useEffect(() => {
    fetchFeedbacks()
  }, [])

  const fetchFeedbacks = async () => {
    try {
      setIsLoading(true)
      const data = await feedbackApi.getAll()
      actualSetFeedbacks(data.feedbacks)
    } catch (error) {
      console.error('Failed to fetch feedbacks', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleStatusChange = async (id, newStatus) => {
    try {
      await feedbackApi.updateStatus(id, { status: newStatus })
      actualSetFeedbacks(prev => 
        prev.map(f => f._id === id ? { ...f, status: newStatus } : f)
      )
    } catch (error) {
      console.error('Failed to update status', error)
    }
  }

  const filteredFeedbacks = actualFeedbacks.filter(f => {
    if (filter === 'All') return true
    return f.status === filter
  })

  const getIconForType = (type) => {
    switch (type) {
      case 'Bug Report':
      case 'Report Issue':
        return <Bug className="h-5 w-5 text-rose-500" />
      case 'Topic Request':
      case 'Feature Request':
        return <Lightbulb className="h-5 w-5 text-amber-500" />
      default:
        return <MessageCircle className="h-5 w-5 text-blue-500" />
    }
  }

  if (isLoading) return <LoadingScreen />

  return (
    <PageShell 
      title="Feedback Dashboard" 
      subtitle="Manage and respond to user feedback, bug reports, and topic requests."
    >
      <div className="mb-6 flex items-center gap-4 border-b border-slate-200 pb-4 dark:border-zinc-800">
        <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
          <Filter className="h-4 w-4" />
          Status Filter:
        </div>
        <div className="flex gap-2">
          {['All', 'Open', 'In Progress', 'Resolved'].map(status => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                filter === status
                  ? 'bg-slate-900 text-white dark:bg-emerald-500 dark:text-black'
                  : 'bg-white text-slate-600 hover:bg-slate-100 dark:bg-zinc-900 dark:text-slate-400 dark:hover:bg-zinc-800'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        {filteredFeedbacks.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white/50 py-16 text-slate-500 dark:border-zinc-800 dark:bg-zinc-900/50">
            <Inbox className="mb-4 h-12 w-12 opacity-20" />
            <p>No feedback found matching the selected filter.</p>
          </div>
        ) : (
          filteredFeedbacks.map(feedback => (
            <div key={feedback._id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-50 dark:bg-zinc-800">
                    {getIconForType(feedback.type)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        {feedback.type}
                      </h3>
                      {feedback.user && (
                        <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                          {feedback.user.email}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      URL: <a href={feedback.url} target="_blank" rel="noreferrer" className="text-emerald-600 hover:underline">{feedback.url}</a>
                    </p>
                    <p className="mt-3 text-slate-700 dark:text-slate-300">
                      {feedback.message}
                    </p>
                    
                    {feedback.contextData && Object.keys(feedback.contextData).length > 0 && (
                      <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs font-mono text-slate-600 dark:bg-zinc-950 dark:text-slate-400">
                        {JSON.stringify(feedback.contextData, null, 2)}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2 shrink-0">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
                    feedback.status === 'Open' ? 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400' :
                    feedback.status === 'In Progress' ? 'bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400' :
                    'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400'
                  }`}>
                    {feedback.status === 'Resolved' ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Clock className="h-3.5 w-3.5" />}
                    {feedback.status}
                  </span>
                  
                  <div className="mt-2 flex gap-2">
                    {feedback.status !== 'Resolved' && (
                      <button 
                        onClick={() => handleStatusChange(feedback._id, 'Resolved')}
                        className="text-xs font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                      >
                        Mark Resolved
                      </button>
                    )}
                    {feedback.status === 'Open' && (
                      <button 
                        onClick={() => handleStatusChange(feedback._id, 'In Progress')}
                        className="text-xs font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        Mark In Progress
                      </button>
                    )}
                  </div>
                  <span className="mt-auto text-xs text-slate-400">
                    {new Date(feedback.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </PageShell>
  )
}

export default AdminFeedbackDashboard
