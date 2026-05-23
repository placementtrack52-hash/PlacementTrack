import { useEffect, useState } from 'react'
import { Check, Zap } from 'lucide-react'

// Toast context and provider for showing XP notifications
const createToast = (message, type = 'success', duration = 2000) => {
  const id = Date.now()
  return { id, message, type, duration }
}

export const useToast = () => {
  const [toasts, setToasts] = useState([])

  const showToast = (message, type = 'success', duration = 2000) => {
    const toast = createToast(message, type, duration)
    setToasts((prev) => [...prev, toast])

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== toast.id))
    }, duration)
  }

  return { toasts, showToast }
}

// Toast component
export const Toast = ({ message, type = 'success' }) => {
  const isSuccess = type === 'success'
  const isXp = type === 'xp'

  return (
    <div
      className={`flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur animate-in fade-in slide-in-from-top-2 duration-200 ${
        isXp
          ? 'bg-gradient-to-r from-amber-500 to-orange-500 dark:from-amber-600 dark:to-orange-600'
          : 'bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-600 dark:to-teal-600'
      }`}
    >
      {isXp ? <Zap className="w-4 h-4" /> : <Check className="w-4 h-4" />}
      {message}
    </div>
  )
}

// Toast container
export const ToastContainer = ({ toasts }) => {
  return (
    <div className="fixed top-20 right-6 z-50 space-y-2 pointer-events-none">
      {toasts.map((toast) => (
        <div key={toast.id} className="pointer-events-auto">
          <Toast message={toast.message} type={toast.type} />
        </div>
      ))}
    </div>
  )
}
