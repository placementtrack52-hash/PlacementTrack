import { useState, useRef, useEffect } from 'react'
import { MessageCircle, Bug, Lightbulb, FileQuestion, X } from 'lucide-react'
import FeedbackModal from './FeedbackModal'

const FeedbackWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedType, setSelectedType] = useState('General Feedback')
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleOptionClick = (type) => {
    setSelectedType(type)
    setModalOpen(true)
    setIsOpen(false)
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3" ref={menuRef}>
        {/* Menu Options */}
        <div
          className={`flex flex-col gap-2 transition-all duration-300 origin-bottom ${
            isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
          }`}
        >
          <button
            onClick={() => handleOptionClick('Give Feedback')}
            className="group flex items-center justify-end gap-3 hover:-translate-x-1 transition-transform"
          >
            <span className="rounded bg-white/90 px-2.5 py-1.5 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 backdrop-blur dark:bg-zinc-800 dark:text-slate-200 dark:ring-zinc-700">
              Give Feedback
            </span>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg">
              <MessageCircle className="h-5 w-5" />
            </div>
          </button>

          <button
            onClick={() => handleOptionClick('Report Issue')}
            className="group flex items-center justify-end gap-3 hover:-translate-x-1 transition-transform"
          >
            <span className="rounded bg-white/90 px-2.5 py-1.5 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 backdrop-blur dark:bg-zinc-800 dark:text-slate-200 dark:ring-zinc-700">
              Report Issue
            </span>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-500 text-white shadow-lg">
              <Bug className="h-5 w-5" />
            </div>
          </button>

          <button
            onClick={() => handleOptionClick('Topic Request')}
            className="group flex items-center justify-end gap-3 hover:-translate-x-1 transition-transform"
          >
            <span className="rounded bg-white/90 px-2.5 py-1.5 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 backdrop-blur dark:bg-zinc-800 dark:text-slate-200 dark:ring-zinc-700">
              Request Topic
            </span>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-white shadow-lg">
              <Lightbulb className="h-5 w-5" />
            </div>
          </button>
        </div>

        {/* Main Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`group flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-all duration-300 hover:scale-105 ${
            isOpen 
              ? 'bg-slate-800 text-white dark:bg-slate-100 dark:text-black rotate-90' 
              : 'bg-gradient-to-r from-emerald-500 to-green-400 text-white dark:from-emerald-600 dark:to-emerald-400'
          }`}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <FileQuestion className="h-6 w-6" />
          )}
        </button>
      </div>

      <FeedbackModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        initialType={selectedType} 
      />
    </>
  )
}

export default FeedbackWidget
