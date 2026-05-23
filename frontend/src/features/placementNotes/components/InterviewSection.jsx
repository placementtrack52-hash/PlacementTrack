import { useState } from 'react'
import { ChevronDown, MessageCircle } from 'lucide-react'

const InterviewSection = ({ questions = [] }) => {
  const [openIndex, setOpenIndex] = useState(null)

  if (!questions.length) return null

  return (
    <section className="rounded-[1.75rem] bg-white p-6 shadow-soft dark:bg-gradient-to-br dark:from-zinc-900 dark:via-black dark:to-zinc-900">
      <div className="flex items-center gap-2">
        <MessageCircle className="h-5 w-5 text-moss dark:text-emerald-400" />
        <h3 className="font-display text-xl font-semibold text-ink dark:text-white">Interview questions</h3>
      </div>
      <p className="mt-1 text-sm text-slate dark:text-white/70">
        Common placement interview prompts for this topic.
      </p>
      <div className="mt-4 divide-y divide-[#f1e6d8] dark:divide-white/10">
        {questions.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <div key={index} className="py-3">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-3 text-left"
              >
                <span className="font-medium text-ink dark:text-white">{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-slate transition dark:text-white/50 ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isOpen ? (
                <p className="mt-3 rounded-[1.25rem] border border-[#f1e6d8] bg-sand/40 p-4 text-sm leading-relaxed text-slate dark:border-white/10 dark:bg-zinc-950 dark:text-white/80">
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
