import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import ProgressBar from '../components/ProgressBar'
import { useProgress } from '../context/ProgressContext'

const DailyChallengePage = () => {
  const { dailyChallenge, saveDailyChallengeResult } = useProgress()
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(Boolean(dailyChallenge.savedResult))
  const startRef = useRef(Date.now())
  const result = dailyChallenge.savedResult

  const scorePreview = useMemo(() => {
    const correctAnswers = dailyChallenge.questions.reduce(
      (sum, question, index) => sum + (answers[index] === question.answer ? 1 : 0),
      0,
    )

    return {
      correctAnswers,
      totalQuestions: dailyChallenge.questions.length,
      score: Math.round((correctAnswers / dailyChallenge.questions.length) * 100),
      timeTakenSeconds: Math.round((Date.now() - startRef.current) / 1000),
    }
  }, [answers, dailyChallenge.questions])

  const handleSubmit = () => {
    const payload = {
      ...scorePreview,
      completedAt: new Date().toISOString(),
      answers,
    }
    saveDailyChallengeResult({ dateKey: dailyChallenge.dateKey, payload })
    setSubmitted(true)
  }

  const activeResult = result ?? (submitted ? scorePreview : null)
  const resultRef = useRef(null)

  useEffect(() => {
    if (activeResult && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [activeResult])

  return (
    <PageShell
      title="Daily challenge"
      subtitle="Five rotating questions, refreshed by the day. Great for keeping your streak alive and your brain warm."
      actions={<Link to="/dashboard" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink dark:bg-white dark:text-[#0f1720]">Back to dashboard</Link>}
    >
      <div className="space-y-6">
        <section className="rounded-[1.75rem] bg-white p-6 shadow-soft dark:bg-[#172430]">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl font-semibold text-ink dark:text-white">Today's 5 questions</h2>
            <span className="rounded-full bg-sand px-4 py-2 text-sm text-moss dark:bg-[#223244] dark:text-emerald-300">{dailyChallenge.dateKey}</span>
          </div>
          <div className="mt-4">
            <ProgressBar value={Math.round((Object.keys(answers).length / dailyChallenge.questions.length) * 100)} />
          </div>
          <div className="mt-6 space-y-4">
            {dailyChallenge.questions.map((question, index) => (
              <div key={question.id} className="rounded-[1.5rem] bg-[#faf6f0] p-5 dark:bg-[#111b25]">
                <p className="font-semibold text-ink dark:text-white">{index + 1}. {question.question}</p>
                <div className="mt-3 space-y-2">
                  {question.options.map((option, optionIndex) => (
                    <label key={option} className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-sm ${answers[index] === optionIndex ? 'border-moss bg-emerald-50 dark:bg-[#10281f]' : 'border-black/5 bg-white dark:border-white/10 dark:bg-[#172430]'}`}>
                      <input type="radio" name={`challenge-${index}`} checked={answers[index] === optionIndex} onChange={() => setAnswers((current) => ({ ...current, [index]: optionIndex }))} className="h-4 w-4" disabled={submitted || Boolean(result)} />
                      <span className="text-slate dark:text-slate-200">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {!result ? (
            <button type="button" onClick={handleSubmit} disabled={Object.keys(answers).length !== dailyChallenge.questions.length} className="mt-6 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white disabled:opacity-50 dark:bg-white dark:text-[#0f1720]">
              Submit challenge
            </button>
          ) : null}
        </section>

        {activeResult ? (
          <section ref={resultRef} className="rounded-[1.75rem] bg-white p-6 shadow-soft dark:bg-[#172430]">
            <h2 className="font-display text-2xl font-semibold text-ink dark:text-white">Daily result</h2>
            <p className="mt-3 text-4xl font-bold text-moss">{activeResult.score}%</p>
            <p className="mt-2 text-sm text-slate dark:text-slate-300">{activeResult.correctAnswers} of {activeResult.totalQuestions} correct</p>
            <p className="mt-2 text-sm text-slate dark:text-slate-300">Time used: {activeResult.timeTakenSeconds}s</p>
          </section>
        ) : null}
      </div>
    </PageShell>
  )
}

export default DailyChallengePage
