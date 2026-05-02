import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import questions from '../data/questions.json'
import quotes from '../data/quotes.json'
import ConfettiBurst from '../components/ConfettiBurst'
import PageShell from '../components/PageShell'
import ProgressBar from '../components/ProgressBar'
import QuizReview from '../components/QuizReview'
import { useProgress } from '../context/ProgressContext'
import { buildIncorrectEntries, getTopicMeta } from '../utils/learning'
import HelpfulWidget from '../components/HelpfulWidget'
import ReportIssueButton from '../components/ReportIssueButton'

const levelBaseTimes = {
  easy: 90,
  medium: 120,
  hard: 150,
}

const QuizPage = () => {
  const { subjectId, topicId, level } = useParams()
  const { saveQuizResult } = useProgress()
  const meta = getTopicMeta(subjectId, topicId)
  const questionSet = questions[subjectId]?.[topicId]?.[level] ?? []
  const [mode, setMode] = useState('accuracy')
  const [focusMode, setFocusMode] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [questionTimes, setQuestionTimes] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [resultData, setResultData] = useState(null)
  const [secondsLeft, setSecondsLeft] = useState(levelBaseTimes[level] ?? 90)
  const [timerEnabled, setTimerEnabled] = useState(true)
  const questionStartedAtRef = useRef(Date.now())
  const hasSubmittedRef = useRef(false)

  useEffect(() => {
    const base = levelBaseTimes[level] ?? 90
    setSecondsLeft(mode === 'speed' ? Math.max(45, base - 25) : base + 25)
    setAnswers({})
    setQuestionTimes({})
    setSubmitted(false)
    setResultData(null)
    setActiveIndex(0)
    hasSubmittedRef.current = false
    questionStartedAtRef.current = Date.now()
  }, [mode, level])

  useEffect(() => {
    if (submitted || !timerEnabled) return undefined
    const interval = setInterval(() => {
      setSecondsLeft((current) => (current <= 1 ? 0 : current - 1))
    }, 1000)
    return () => clearInterval(interval)
  }, [submitted, timerEnabled])

  const buildFinalQuestionTimes = () => ({
    ...questionTimes,
    [activeIndex]: (questionTimes[activeIndex] ?? 0) + (Date.now() - questionStartedAtRef.current) / 1000,
  })

  const buildPayload = (finalQuestionTimes) => {
    const correctAnswers = questionSet.reduce(
      (score, question, index) => score + (answers[index] === question.answer ? 1 : 0),
      0,
    )
    const totalQuestions = questionSet.length
    const timeTakenSeconds = Object.values(finalQuestionTimes).reduce((sum, value) => sum + value, 0)

    return {
      score: totalQuestions ? Math.round((correctAnswers / totalQuestions) * 100) : 0,
      correctAnswers,
      totalQuestions,
      answers,
      mode,
      questionTimes: finalQuestionTimes,
      timeTakenSeconds: Math.round(timeTakenSeconds),
      averageTimePerQuestion: totalQuestions ? Math.round(timeTakenSeconds / totalQuestions) : 0,
      completedAt: new Date().toISOString(),
      quote: quotes[(correctAnswers + totalQuestions) % quotes.length],
      incorrectAnswers: buildIncorrectEntries({
        subjectId,
        topicKey: `${subjectId}:${topicId}`,
        topicName: meta?.topic.name,
        subjectName: meta?.subject.name,
        level,
        mode,
        questionsSet: questionSet,
        answers,
        questionTimes: finalQuestionTimes,
      }),
    }
  }

  const handleSubmit = () => {
    if (hasSubmittedRef.current) return
    hasSubmittedRef.current = true

    const finalQuestionTimes = buildFinalQuestionTimes()
    const payload = buildPayload(finalQuestionTimes)

    setQuestionTimes(finalQuestionTimes)
    setResultData(payload)
    setSubmitted(true)
    saveQuizResult({ topicKey: `${subjectId}:${topicId}`, level, payload })

    if (payload.score >= 60) playCorrectSound()
    else playWrongSound()
  }

  useEffect(() => {
    if (secondsLeft === 0 && !hasSubmittedRef.current && questionSet.length) {
      handleSubmit()
    }
  }, [secondsLeft, questionSet.length])

  const result = useMemo(() => resultData, [resultData])
  const resultRef = useRef(null)

  useEffect(() => {
    if (submitted && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [submitted])

  if (!meta || !questionSet.length) {
    return (
      <PageShell title="Quiz not found" subtitle="That quiz level does not exist yet.">
        <Link to="/subjects" className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white">
          Back to subjects
        </Link>
      </PageShell>
    )
  }

  const answeredCount = Object.keys(answers).length
  const progressValue = Math.round((answeredCount / questionSet.length) * 100)
  const currentQuestion = questionSet[activeIndex]

  const handleAnswerChange = (optionIndex) => {
    setAnswers((current) => ({ ...current, [activeIndex]: optionIndex }))
  }

  const moveToQuestion = (nextIndex) => {
    const elapsed = (Date.now() - questionStartedAtRef.current) / 1000
    setQuestionTimes((current) => ({
      ...current,
      [activeIndex]: (current[activeIndex] ?? 0) + elapsed,
    }))
    questionStartedAtRef.current = Date.now()
    setActiveIndex(nextIndex)
  }

  return (
    <PageShell
      title={`${meta.topic.name} - ${level} quiz`}
      subtitle="Use Speed Mode for time pressure or Accuracy Mode for calmer solving. Every answer and mistake syncs to your account."
      actions={
        <>
          <button type="button" onClick={() => setFocusMode((current) => !current)} className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink dark:bg-white dark:text-[#0f1720]">
            {focusMode ? 'Exit focus mode' : 'Focus mode'}
          </button>
          <Link to={`/subjects/${subjectId}/topics/${topicId}`} className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink dark:bg-white dark:text-[#0f1720]">
            Back to topic
          </Link>
        </>
      }
    >
      <div className="space-y-6">
        <section className="relative rounded-[1.75rem] bg-white p-6 shadow-soft dark:bg-black">
          {submitted && result?.score >= 80 ? <ConfettiBurst /> : null}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold text-ink dark:text-white">Question {activeIndex + 1} of {questionSet.length}</h2>
            <div className="flex items-center gap-3">
              <div className="flex rounded-full bg-[#f0f0f0] p-1 dark:bg-zinc-800">
                {['accuracy', 'speed'].map((modeOption) => (
                  <button key={modeOption} type="button" onClick={() => setMode(modeOption)} className={`rounded-full px-4 py-2 text-sm font-semibold capitalize ${mode === modeOption ? 'bg-ink text-white dark:bg-emerald-500 dark:text-white' : 'text-slate dark:text-white/70'}`}>
                    {modeOption}
                  </button>
                ))}
              </div>
              <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink dark:bg-emerald-500 dark:text-white">
                {Math.floor(secondsLeft / 60)}:{(secondsLeft % 60).toString().padStart(2, '0')}
              </span>
              <label className="inline-flex items-center gap-2 text-sm text-slate dark:text-white">
                <input type="checkbox" checked={timerEnabled} onChange={(event) => setTimerEnabled(event.target.checked)} className="h-4 w-4 rounded border-ink/20 text-moss focus:ring-moss" />
                Timer
              </label>
            </div>
          </div>
          <div className="mt-4">
            <ProgressBar value={progressValue} />
          </div>

          <div className="mt-6 rounded-[1.5rem] bg-[#faf6f0] p-5 dark:bg-zinc-800">
            <p className="font-semibold text-ink dark:text-white">{currentQuestion.question}</p>
            <div className="mt-4 space-y-3">
              {currentQuestion.options.map((option, optionIndex) => (
                <label key={option} className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-sm transition ${answers[activeIndex] === optionIndex ? 'border-moss bg-emerald-50 dark:border-emerald-500 dark:bg-emerald-500/20' : 'border-black/5 bg-white dark:border-white/10 dark:bg-zinc-700'}`}>
                  <input type="radio" name={`question-${activeIndex}`} checked={answers[activeIndex] === optionIndex} onChange={() => handleAnswerChange(optionIndex)} className="h-4 w-4 border-ink/20 text-moss focus:ring-moss" />
                  <span className="text-slate dark:text-white">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <button type="button" onClick={() => moveToQuestion(Math.max(0, activeIndex - 1))} disabled={activeIndex === 0} className="rounded-full bg-[#faf6f0] px-5 py-3 text-sm font-semibold text-ink disabled:opacity-40 dark:bg-zinc-800 dark:text-white">
              Previous
            </button>
            <div className="flex flex-wrap gap-2">
              {questionSet.map((_, index) => (
                <button key={index} type="button" onClick={() => moveToQuestion(index)} className={`h-10 w-10 rounded-full text-sm font-semibold ${activeIndex === index ? 'bg-ink text-white dark:bg-white dark:text-[#0f1720]' : answers[index] !== undefined ? 'bg-[#eef7f2] text-ink dark:bg-emerald-500/20 dark:text-white' : 'bg-[#faf6f0] text-slate dark:bg-zinc-800 dark:text-white'}`}>
                  {index + 1}
                </button>
              ))}
            </div>
            {activeIndex === questionSet.length - 1 ? (
              <button type="button" onClick={handleSubmit} disabled={answeredCount !== questionSet.length} className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white disabled:opacity-50 dark:bg-white dark:text-[#0f1720]">
                Submit quiz
              </button>
            ) : (
              <button type="button" onClick={() => moveToQuestion(Math.min(questionSet.length - 1, activeIndex + 1))} className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white dark:bg-white dark:text-[#0f1720]">
                Next
              </button>
            )}
          </div>
        </section>

        {!focusMode && submitted && result ? (
          <>
            <div ref={resultRef} className="rounded-[1.75rem] bg-white p-6 shadow-soft dark:bg-black">
              <h2 className="font-display text-2xl font-semibold text-ink dark:text-white">Scorecard</h2>
              <p className="mt-3 text-4xl font-bold text-moss dark:text-emerald-400">{result.score}%</p>
              <p className="mt-2 text-sm text-slate dark:text-white/70">{result.correctAnswers} of {result.totalQuestions} answered correctly</p>
              <p className="mt-2 text-sm text-slate dark:text-white/70">Average speed: {result.averageTimePerQuestion}s per question</p>
              <p className="mt-5 rounded-2xl bg-[#fff4e9] px-4 py-4 text-sm leading-6 text-ink dark:bg-zinc-800 dark:text-white">{result.quote}</p>
            </div>
            <div className="rounded-[1.75rem] bg-white p-6 shadow-soft dark:bg-black">
              <h2 className="font-display text-2xl font-semibold text-ink dark:text-white">Review answers</h2>
              <div className="mt-5">
                <QuizReview questions={questionSet} answers={answers} />
              </div>
            </div>
          </>
        ) : null}

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-between rounded-[1.75rem] bg-white p-6 shadow-soft dark:bg-black">
          <HelpfulWidget contextData={{ page: 'Quiz', subjectId, topicId, level }} />
          <ReportIssueButton contextData={{ page: 'Quiz', subjectId, topicId, level }} />
        </div>
      </div>
    </PageShell>
  )
}

export default QuizPage
