import { useState } from 'react'

const McqSection = ({ mcqs = [] }) => {
  const [answers, setAnswers] = useState({})

  if (!mcqs.length) return null

  const handleSelect = (index, optionIndex) => {
    setAnswers((prev) => ({ ...prev, [index]: optionIndex }))
  }

  return (
    <section className="rounded-[1.75rem] bg-white p-6 shadow-soft dark:bg-gradient-to-br dark:from-zinc-900 dark:via-black dark:to-zinc-900">
      <h3 className="font-display text-xl font-semibold text-ink dark:text-white">Quick quiz</h3>
      <p className="mt-1 text-sm text-slate dark:text-white/70">Check your understanding before moving on.</p>
      <div className="mt-6 space-y-6">
        {mcqs.map((mcq, qIndex) => {
          const selected = answers[qIndex]
          const isAnswered = selected !== undefined
          const isCorrect = selected === mcq.answer

          return (
            <div
              key={qIndex}
              className="rounded-[1.25rem] border border-[#f1e6d8] p-4 dark:border-white/10 dark:bg-zinc-950/50"
            >
              <p className="font-medium text-ink dark:text-white">
                {qIndex + 1}. {mcq.question}
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {mcq.options.map((opt, oIndex) => {
                  let btnClass =
                    'rounded-full border border-black/10 px-4 py-2.5 text-left text-sm text-ink transition hover:bg-sand dark:border-white/10 dark:text-white dark:hover:bg-zinc-800'
                  if (isAnswered) {
                    if (oIndex === mcq.answer) {
                      btnClass =
                        'rounded-full border border-emerald-300 bg-[#eef7f2] px-4 py-2.5 text-left text-sm text-moss dark:border-emerald-500/50 dark:bg-emerald-950/40 dark:text-emerald-200'
                    } else if (oIndex === selected) {
                      btnClass =
                        'rounded-full border border-rose-300 bg-rose-50 px-4 py-2.5 text-left text-sm text-rose-800 dark:border-rose-500/50 dark:bg-rose-950/40 dark:text-rose-200'
                    }
                  }

                  return (
                    <button
                      key={oIndex}
                      type="button"
                      disabled={isAnswered}
                      onClick={() => handleSelect(qIndex, oIndex)}
                      className={btnClass}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>
              {isAnswered ? (
                <p
                  className={`mt-3 text-sm ${isCorrect ? 'text-moss dark:text-emerald-400' : 'text-amber-700 dark:text-amber-400'}`}
                >
                  {isCorrect ? 'Correct. ' : 'Not quite. '}
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
