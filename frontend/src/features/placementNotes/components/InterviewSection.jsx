import { useState } from 'react'
import { ChevronDown, MessageCircle } from 'lucide-react'

const InterviewSection = ({ questions = [] }) => {
  const [openIndex, setOpenIndex] = useState(null)

  if (!questions.length) return null

  return (
    <section className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <MessageCircle className="h-5 w-5 text-violet-400" />
        <h3 className="font-display text-xl font-bold text-white">Interview Questions</h3>
      </div>
      <p className="mt-1 text-sm text-zinc-400">Common placement interview prompts for this topic.</p>
      <div className="mt-4 divide-y divide-white/10">
        {questions.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <div key={index} className="py-3">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-3 text-left"
              >
                <span className="font-medium text-zinc-100">{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-zinc-500 transition ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isOpen ? (
                <p className="mt-3 rounded-lg bg-zinc-950/60 p-4 text-sm leading-relaxed text-zinc-300">
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
