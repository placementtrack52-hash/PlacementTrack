import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const McqSection = ({ mcqs = [] }) => {
  const [answers, setAnswers] = useState({})

  if (!mcqs.length) return null

  const handleSelect = (index, optionIndex) => {
    setAnswers((prev) => ({ ...prev, [index]: optionIndex }))
  }

  return (
    <section className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur-md">
      <h3 className="font-display text-xl font-bold text-white">Quick Quiz</h3>
      <p className="mt-1 text-sm text-zinc-400">Test your understanding before moving on.</p>
      <div className="mt-6 space-y-8">
        {mcqs.map((mcq, qIndex) => {
          const selected = answers[qIndex]
          const isAnswered = selected !== undefined
          const isCorrect = selected === mcq.answer

          return (
            <div key={qIndex} className="rounded-xl border border-white/5 bg-zinc-950/50 p-4">
              <p className="font-medium text-zinc-100">
                {qIndex + 1}. {mcq.question}
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {mcq.options.map((opt, oIndex) => {
                  let btnClass =
                    'rounded-lg border border-white/10 px-4 py-2.5 text-left text-sm transition hover:border-violet-400/50 hover:bg-violet-500/10'
                  if (isAnswered) {
                    if (oIndex === mcq.answer) {
                      btnClass =
                        'rounded-lg border border-emerald-500/50 bg-emerald-500/15 px-4 py-2.5 text-left text-sm text-emerald-200'
                    } else if (oIndex === selected) {
                      btnClass =
                        'rounded-lg border border-rose-500/50 bg-rose-500/15 px-4 py-2.5 text-left text-sm text-rose-200'
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
              <AnimatePresence>
                {isAnswered ? (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-3 text-sm ${isCorrect ? 'text-emerald-400' : 'text-amber-400'}`}
                  >
                    {isCorrect ? '✓ Correct! ' : '✗ Not quite. '}
                    {mcq.explanation}
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default McqSection
