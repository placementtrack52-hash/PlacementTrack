import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const InterviewSection = ({ questions = [] }) => {
  const [openIndex, setOpenIndex] = useState(0)

  if (!questions.length) return null

  return (
    <section className="mb-8 border-t border-slate-200 pt-8 dark:border-zinc-800">
      <h2 className="text-xl font-bold text-slate-900 dark:text-white">Interview questions</h2>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
        Common placement interview prompts for this topic.
      </p>
      <div className="mt-4 divide-y divide-slate-200 dark:divide-zinc-800">
        {questions.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <div key={index} className="py-3">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-start justify-between gap-3 text-left"
              >
                <span className="font-medium text-slate-800 dark:text-white">
                  Q{index + 1}. {item.question}
                </span>
                <ChevronDown
                  className={`mt-1 h-5 w-5 shrink-0 text-slate-400 transition ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isOpen ? (
                <p className="mt-3 rounded border border-slate-100 bg-[#f8fafc] p-4 text-sm leading-relaxed text-slate-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-slate-300">
                  {item.answer}
                </p>
              ) : null}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default InterviewSection
