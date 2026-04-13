import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ConfettiBurst from '../components/ConfettiBurst'
import PageShell from '../components/PageShell'
import ProgressBar from '../components/ProgressBar'
import QuizReview from '../components/QuizReview'
import { useProgress } from '../context/ProgressContext'
import questions from '../data/questions.json'
import { playCorrectSound, playWrongSound } from '../utils/audio'
import { buildIncorrectEntries, getTopicMeta } from '../utils/learning'

const FinalTestPage = () => {
  const { subjectId, topicId } = useParams()
  const { saveFinalTestResult } = useProgress()
  const meta = getTopicMeta(subjectId, topicId)
  const questionSet = questions[subjectId]?.[topicId]?.final ?? []
  const [answers, setAnswers] = useState({})
  const [timerEnabled, setTimerEnabled] = useState(true)
  const [secondsLeft, setSecondsLeft] = useState(300)
  const [submitted, setSubmitted] = useState(false)

  const result = useMemo(() => {
    const correctAnswers = questionSet.reduce(
      (score, question, index) => score + (answers[index] === question.answer ? 1 : 0),
      0,
    )
    const incorrectAnswers = buildIncorrectEntries({
      subjectId,
      topicKey: `${subjectId}:${topicId}`,
      topicName: meta?.topic.name,
      subjectName: meta?.subject.name,
      level: 'final',
      mode: 'accuracy',
      questionsSet: questionSet,
      answers,
      questionTimes: questionSet.reduce((acc, _, index) => ({ ...acc, [index]: timerEnabled ? (300 - secondsLeft) / questionSet.length : 0 }), {}),
    })

    return {
      score: questionSet.length ? Math.round((correctAnswers / questionSet.length) * 100) : 0,
      correctAnswers,
      totalQuestions: questionSet.length,
      answers,
      timeTakenSeconds: timerEnabled ? 300 - secondsLeft : null,
      averageTimePerQuestion: timerEnabled ? Math.round((300 - secondsLeft) / questionSet.length) : 0,
      incorrectAnswers,
      completedAt: new Date().toISOString(),
    }
  }, [answers, meta, questionSet, secondsLeft, subjectId, timerEnabled, topicId])

  useEffect(() => {
    if (!timerEnabled || submitted) return undefined
    const interval = setInterval(() => setSecondsLeft((current) => (current <= 1 ? 0 : current - 1)), 1000)
    return () => clearInterval(interval)
  }, [timerEnabled, submitted])

  useEffect(() => {
    if (secondsLeft === 0 && !submitted && questionSet.length) {
      setSubmitted(true)
      saveFinalTestResult({ topicKey: `${subjectId}:${topicId}`, payload: result })
      if (result.score >= 60) playCorrectSound()
      else playWrongSound()
    }
  }, [questionSet.length, result, saveFinalTestResult, secondsLeft, subjectId, submitted, topicId])

  if (!meta || !questionSet.length) {
    return (
      <PageShell title="Final test not found" subtitle="We could not load this mixed test.">
        <Link to="/subjects" className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white">
          Back to subjects
        </Link>
      </PageShell>
    )
  }

  const answeredCount = Object.keys(answers).length
  const progressValue = Math.round((answeredCount / questionSet.length) * 100)
  const timeLabel = `${String(Math.floor(secondsLeft / 60)).padStart(2, '0')}:${String(secondsLeft % 60).padStart(2, '0')}`
  const analysisLabel = result.score >= 80 ? 'Strong retention' : result.score >= 60 ? 'Steady but patchy' : 'Needs revision first'

  const handleSubmit = () => {
    setSubmitted(true)
    saveFinalTestResult({ topicKey: `${subjectId}:${topicId}`, payload: result })
    if (result.score >= 60) playCorrectSound()
    else playWrongSound()
  }

  return (
    <PageShell
      title={`${meta.topic.name} - Final test`}
      subtitle="Timed exam-style wrap-up with performance analysis, speed tracking, and mistake capture."
      actions={<Link to={`/subjects/${subjectId}/topics/${topicId}`} className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink dark:bg-[#172430] dark:text-slate-100">Back to topic</Link>}
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="relative rounded-[1.75rem] bg-white p-6 shadow-soft dark:bg-[#172430]">
          {submitted && result.score >= 80 ? <ConfettiBurst /> : null}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold text-ink dark:text-white">Final test questions</h2>
            <div className="flex items-center gap-3">
              <label className="inline-flex items-center gap-2 text-sm text-slate dark:text-slate-300">
                <input type="checkbox" checked={timerEnabled} onChange={(event) => setTimerEnabled(event.target.checked)} className="h-4 w-4 rounded border-ink/20 text-moss focus:ring-moss" />
                Timer
              </label>
              <span className="rounded-full bg-sand px-4 py-2 text-sm font-semibold text-ink dark:bg-[#223244] dark:text-slate-100">{timeLabel}</span>
            </div>
          </div>
          <div className="mt-4">
            <ProgressBar value={progressValue} />
          </div>

          <div className="mt-6 space-y-5">
            {questionSet.map((question, index) => (
              <div key={question.id} className="rounded-[1.5rem] bg-[#faf6f0] p-5 dark:bg-[#111b25]">
                <p className="font-semibold text-ink dark:text-white">{index + 1}. {question.question}</p>
                <div className="mt-4 space-y-3">
                  {question.options.map((option, optionIndex) => (
                    <label key={option} className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-sm transition ${answers[index] === optionIndex ? 'border-moss bg-emerald-50 dark:bg-[#10281f]' : 'border-black/5 bg-white dark:border-white/10 dark:bg-[#172430]'}`}>
                      <input type="radio" name={`final-question-${index}`} checked={answers[index] === optionIndex} onChange={() => setAnswers((current) => ({ ...current, [index]: optionIndex }))} className="h-4 w-4 border-ink/20 text-moss focus:ring-moss" />
                      <span className="text-slate dark:text-slate-200">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button type="button" onClick={handleSubmit} className="mt-6 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white dark:bg-white dark:text-[#0f1720]">
            Submit final test
          </button>
        </section>

        <section className="space-y-6">
          <div className="rounded-[1.75rem] bg-ink p-6 text-white shadow-soft dark:bg-[#111b25]">
            <p className="text-sm uppercase tracking-[0.25em] text-white/70">Performance lens</p>
            <p className="mt-4 text-sm leading-7 text-white/85">This final test blends topic practice into an exam-like snapshot. It is great for checking retention after notes plus quizzes.</p>
          </div>

          {submitted ? (
            <>
              <div className="rounded-[1.75rem] bg-white p-6 shadow-soft dark:bg-[#172430]">
                <h2 className="font-display text-2xl font-semibold text-ink dark:text-white">Final score</h2>
                <p className="mt-3 text-4xl font-bold text-moss">{result.score}%</p>
                <p className="mt-2 text-sm text-slate dark:text-slate-300">{result.correctAnswers} of {result.totalQuestions} correct</p>
                <p className="mt-2 text-sm text-slate dark:text-slate-300">Average pace: {result.averageTimePerQuestion}s per question</p>
                <p className="mt-4 rounded-2xl bg-[#fff4e9] px-4 py-4 text-sm text-ink dark:bg-[#2a1f18] dark:text-slate-100">Performance analysis: {analysisLabel}. Recommended next step: review mistakes, then retry a hard quiz in accuracy mode.</p>
              </div>
              <div className="rounded-[1.75rem] bg-white p-6 shadow-soft dark:bg-[#172430]">
                <h2 className="font-display text-2xl font-semibold text-ink dark:text-white">Answer review</h2>
                <div className="mt-5">
                  <QuizReview questions={questionSet} answers={answers} />
                </div>
              </div>
            </>
          ) : null}
        </section>
      </div>
    </PageShell>
  )
}

export default FinalTestPage
