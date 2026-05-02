import { useState } from 'react'
import { Bug } from 'lucide-react'
import FeedbackModal from './FeedbackModal'

const ReportIssueButton = ({ contextData = {}, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`inline-flex items-center gap-2 rounded-xl bg-rose-50 px-4 py-2 text-sm font-medium text-rose-600 transition hover:bg-rose-100 dark:bg-rose-500/10 dark:text-rose-400 dark:hover:bg-rose-500/20 ${className}`}
      >
        <Bug className="h-4 w-4" />
        Report Issue
      </button>

      <FeedbackModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        initialType="Report Issue"
        contextData={contextData}
      />
    </>
  )
}

export default ReportIssueButton
