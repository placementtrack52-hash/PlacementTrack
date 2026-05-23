import { useState } from 'react'

const McqSection = ({ mcqs = [] }) => {
  const [answers, setAnswers] = useState({})

  if (!mcqs.length) return null

  const handleSelect = (index, optionIndex) => {
    setAnswers((prev) => ({ ...prev, [index]: optionIndex }))
  }

  return (
    <section className="mb-10 border-t border-slate-200 pt-8 dark:border-zinc-800">
      <h2 className="text-xl font-bold text-slate-900 dark:text-white">Practice questions</h2>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
        Quick MCQs to check your understanding.
      </p>
      <div className="mt-6 space-y-8">
        {mcqs.map((mcq, qIndex) => {
          const selected = answers[qIndex]
          const isAnswered = selected !== undefined
          const isCorrect = selected === mcq.answer

          return (
            <div key={qIndex}>
              <p className="font-medium text-slate-800 dark:text-white">
                {qIndex + 1}. {mcq.question}
              </p>
              <ul className="mt-3 space-y-2">
                {mcq.options.map((opt, oIndex) => {
                  let itemClass =
                    'cursor-pointer rounded border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 hover:border-[#2563eb] hover:bg-[#f0f6ff] dark:border-zinc-700 dark:bg-zinc-950 dark:text-slate-300 dark:hover:border-blue-500'
                  if (isAnswered) {
                    if (oIndex === mcq.answer) {
                      itemClass =
                        'rounded border border-[#2e7d32] bg-[#f6fbf6] px-4 py-2.5 text-sm text-[#1b5e20] dark:border-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-300'
                    } else if (oIndex === selected) {
                      itemClass =
                        'rounded border border-rose-300 bg-rose-50 px-4 py-2.5 text-sm text-rose-800 dark:border-rose-700 dark:bg-rose-950/30'
                    } else {
                      itemClass =
                        'rounded border border-slate-100 bg-slate-50 px-4 py-2.5 text-sm text-slate-500 dark:border-zinc-800 dark:bg-zinc-900/50'
                    }
                  }

                  return (
                    <li key={oIndex}>
                      <button
                        type="button"
                        disabled={isAnswered}
                        onClick={() => handleSelect(qIndex, oIndex)}
                        className={`w-full text-left ${itemClass}`}
                      >
                        {opt}
                      </button>
                    </li>
                  )
                })}
              </ul>
              {isAnswered ? (
                <p
                  className={`mt-3 text-sm ${isCorrect ? 'text-[#2e7d32] dark:text-emerald-400' : 'text-amber-800 dark:text-amber-400'}`}
                >
                  {isCorrect ? 'Correct. ' : 'Incorrect. '}
                  {mcq.explanation}
                </p>
              ) : null}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default McqSection
