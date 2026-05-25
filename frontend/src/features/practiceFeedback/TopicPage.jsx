import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import notes from '../../data/notes.json'
import questions from '../../data/questions.json'
import subjects from '../../data/subjects.json'
import ProgressBar from './ProgressBar'
import QuestionCard from './QuestionCard'
import ResultCard from './ResultCard'
import Timer from './Timer'
import { buildAttemptStorageKey, resolveQuestionTopicId } from './topicConfig'
import { userDataApi } from '../../services/api'

const TOTAL_SECONDS = 300
const difficultyOptions = ['easy', 'medium', 'hard']

const formatSeconds = (seconds) => {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}m ${secs.toString().padStart(2, '0')}s`
}

const buildResult = ({ answers, difficulty, practiceQuestions, secondsLeft }) => {
  const score = practiceQuestions.reduce(
    (sum, question, index) => sum + (answers[index] === question.correct ? 1 : 0),
    0,
  )
  const elapsedSeconds = TOTAL_SECONDS - secondsLeft

  return {
    score,
    totalQuestions: practiceQuestions.length,
    difficulty,
    timeTakenSeconds: elapsedSeconds,
    timeTakenLabel: formatSeconds(elapsedSeconds),
    savedAtLabel: new Date().toLocaleString(),
  }
}

const TopicPage = () => {
  const [selectedSubjectId, setSelectedSubjectId] = useState(subjects[0]?.id ?? 'aptitude')
  const [selectedTopicId, setSelectedTopicId] = useState(subjects[0]?.topics?.[0]?.id ?? '')
  const [difficulty, setDifficulty] = useState('easy')
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS)
  const [showMore, setShowMore] = useState(false)
  const [lastAttempt, setLastAttempt] = useState(null)
  const [result, setResult] = useState(null)
  const [topicSearch, setTopicSearch] = useState('')
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const resultRef = useRef(null)
  const autoSubmittedRef = useRef(false)

  const selectedSubject = useMemo(
    () => subjects.find((subject) => subject.id === selectedSubjectId) ?? subjects[0],
    [selectedSubjectId],
  )

  const selectedTopic = useMemo(
    () => selectedSubject?.topics.find((topic) => topic.id === selectedTopicId) ?? selectedSubject?.topics?.[0],
    [selectedSubject, selectedTopicId],
  )

  useEffect(() => {
    if (!selectedSubject?.topics.some((topic) => topic.id === selectedTopicId)) {
      setSelectedTopicId(selectedSubject?.topics?.[0]?.id ?? '')
    }
  }, [selectedSubject, selectedTopicId])

  const questionTopicId = resolveQuestionTopicId(selectedTopic?.id)
  const topicNotes = selectedTopic ? notes[selectedTopic.id] : null
  const practiceQuestions = useMemo(
    () =>
      ((questions[selectedSubject?.id]?.[questionTopicId]?.[difficulty] ?? []).slice(0, 5)).map((question) => ({
        ...question,
        correct: question.answer,
      })),
    [difficulty, questionTopicId, selectedSubject?.id],
  )

  const conceptBullets = useMemo(() => {
    if (!topicNotes) return []
    return [topicNotes.overview, ...(topicNotes.formulas ?? []).slice(0, 2)].filter(Boolean)
  }, [topicNotes])

  const topicProgress = Math.round((Object.keys(selectedAnswers).length / Math.max(practiceQuestions.length, 1)) * 100)
  const submitDisabled = submitted || Object.keys(selectedAnswers).length !== practiceQuestions.length

  const filteredTopics = useMemo(() => {
    if (!topicSearch.trim()) return selectedSubject?.topics ?? []
    const searchLower = topicSearch.toLowerCase()
    return (selectedSubject?.topics ?? []).filter((topic) =>
      topic.name.toLowerCase().includes(searchLower)
    )
  }, [selectedSubject?.topics, topicSearch])

  useEffect(() => {
    setSelectedAnswers({})
    setSubmitted(false)
    setSecondsLeft(TOTAL_SECONDS)
    setShowMore(false)
    setResult(null)
    setIsTimerRunning(false)
    autoSubmittedRef.current = false
  }, [selectedSubjectId, selectedTopicId, difficulty])

  useEffect(() => {
    const storageKey = buildAttemptStorageKey({
      subjectId: selectedSubject?.id,
      topicId: selectedTopic?.id,
      difficulty,
    })

    let cancelled = false

    const loadAttempt = async () => {
      try {
        const { attempt } = await userDataApi.getPracticeAttempt(storageKey)
        if (!cancelled) {
          setLastAttempt(attempt ?? null)
        }
      } catch {
        if (!cancelled) {
          setLastAttempt(null)
        }
      }
    }

    loadAttempt()

    return () => {
      cancelled = true
    }
  }, [difficulty, selectedSubject?.id, selectedTopic?.id])

  useEffect(() => {
    if (submitted || !isTimerRunning) return undefined

    const interval = setInterval(() => {
      setSecondsLeft((current) => (current <= 1 ? 0 : current - 1))
    }, 1000)

    return () => clearInterval(interval)
  }, [submitted, isTimerRunning])

  const handleSubmit = () => {
    if (submitted || !practiceQuestions.length) return

    const nextResult = buildResult({
      answers: selectedAnswers,
      difficulty,
      practiceQuestions,
      secondsLeft,
    })

    setSubmitted(true)
    setResult(nextResult)

    const storageKey = buildAttemptStorageKey({
      subjectId: selectedSubject.id,
      topicId: selectedTopic.id,
      difficulty,
    })

    setLastAttempt(nextResult)
    userDataApi.savePracticeAttempt(storageKey, nextResult).catch(() => {})
  }

  const handleTimerStart = () => {
    setIsTimerRunning(true)
  }

  const handleTimerPause = () => {
    setIsTimerRunning(false)
  }

  const handleRetry = () => {
    setSelectedAnswers({})
    setSubmitted(false)
    setSecondsLeft(TOTAL_SECONDS)
    setShowMore(false)
    setResult(null)
    setIsTimerRunning(false)
    autoSubmittedRef.current = false
  }

  useEffect(() => {
    if (secondsLeft !== 0 || submitted || autoSubmittedRef.current) return
    autoSubmittedRef.current = true
    handleSubmit()
  }, [secondsLeft, submitted])

  useEffect(() => {
    if (!submitted || !resultRef.current) return
    resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [submitted])

  return (
    <div className="space-y-8">
      <section className="practice-feedback-header overflow-hidden rounded-[2rem] border border-slate-200 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.10)] sm:p-8 dark:border-white/10 bg-[#f8fafc] dark:bg-zinc-900">
        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm w-fit rounded-lg px-3 py-1 uppercase tracking-[0.28em] text-sky-700 bg-white dark:bg-zinc-700 dark:text-white">Practice + Instant Feedback</p>
            <h2 className="mt-3 rounded-2xl bg-white p-4 text-3xl font-bold text-slate-950 sm:text-4xl dark:bg-zinc-700 dark:text-white dark:border dark:border-white/10">
              Interactive learning modules for Aptitude, Reasoning, and Verbal
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 dark:text-white/70">
              Pick a module, open a topic, revise the concept, solve five questions, and get instant feedback with a timer and saved performance snapshot.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-slate-200 bg-white/90 p-4 shadow-[0_16px_35px_rgba(15,23,42,0.06)] backdrop-blur-sm dark:border-white/10 dark:bg-zinc-800">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-white/60">Flow</p>
                <p className="mt-2 text-sm font-medium text-slate-900 dark:text-white">Concept to Practice to Submit to Feedback</p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-white/90 p-4 shadow-[0_16px_35px_rgba(15,23,42,0.06)] backdrop-blur-sm dark:border-white/10 dark:bg-zinc-800">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-white/60">Questions</p>
                <p className="mt-2 text-sm font-medium text-slate-900 dark:text-white">Exactly 5 MCQs per attempt</p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-white/90 p-4 shadow-[0_16px_35px_rgba(15,23,42,0.06)] backdrop-blur-sm dark:border-white/10 dark:bg-zinc-800">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-white/60">Tracking</p>
                <p className="mt-2 text-sm font-medium text-slate-900 dark:text-white">Accuracy, timer, and last attempt saved to your account</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <Timer secondsLeft={secondsLeft} totalSeconds={TOTAL_SECONDS} isRunning={isTimerRunning} onStart={handleTimerStart} onPause={handleTimerPause} />
            <div className="rounded-[1.5rem] border border-slate-200 bg-white/90 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur-sm dark:border-white/10 dark:bg-zinc-800">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-white/60">Completion</p>
                  <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">{topicProgress}%</p>
                </div>
                <span className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:border-sky-500/30 dark:bg-sky-500/20 dark:text-sky-300">
                  {difficulty}
                </span>
              </div>
              <div className="mt-4">
                <ProgressBar value={topicProgress} />
              </div>
              <p className="mt-3 text-sm text-slate-600 dark:text-white/70">
                {Object.keys(selectedAnswers).length}/{practiceQuestions.length} answers selected
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-6 shadow-[0_22px_55px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-zinc-800">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Choose your module</h3>
            <div className="mt-5 max-h-[280px] overflow-y-auto space-y-3 pr-2 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
              {subjects.filter(s => s.id !== 'interview-question').map((subject) => (
                <button
                  key={subject.id}
                  type="button"
                  onClick={() => setSelectedSubjectId(subject.id)}
                  className={`rounded-2xl border px-4 py-4 text-left transition ${
                    selectedSubjectId === subject.id
                      ? 'border-sky-300 bg-sky-50 shadow-[0_10px_25px_rgba(14,165,233,0.10)] dark:border-sky-400 dark:bg-sky-500/20'
                      : 'border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-white dark:border-white/10 dark:bg-zinc-700 dark:hover:bg-zinc-600'
                  }`}
                >
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{subject.name}</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-white/70">{subject.description}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-6 shadow-[0_22px_55px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-zinc-800">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Pick topic</h3>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search topic..."
                      value={topicSearch}
                      onChange={(e) => setTopicSearch(e.target.value)}
                      className="w-full rounded-full border border-slate-200 bg-white px-4 py-2 pl-9 text-sm text-slate-800 outline-none placeholder:text-slate-400 sm:w-40 dark:border-white/10 dark:bg-zinc-700 dark:text-white dark:placeholder:text-white/50"
                    />
                    <svg
                      className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 dark:text-white/50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <select
                    value={difficulty}
                    onChange={(event) => setDifficulty(event.target.value)}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold capitalize text-slate-800 outline-none dark:border-white/10 dark:bg-zinc-700 dark:text-white"
                  >
                    {difficultyOptions.map((option) => (
                      <option key={option} value={option} className="bg-white text-slate-900 dark:bg-zinc-700 dark:text-white">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-5 max-h-[280px] overflow-y-auto space-y-3 pr-2 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
                {filteredTopics.length > 0 ? (
                  filteredTopics.map((topic) => (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => setSelectedTopicId(topic.id)}
                      className={`w-full rounded-2xl border px-4 py-4 text-left transition ${
                        selectedTopicId === topic.id
                          ? 'border-emerald-300 bg-emerald-50 shadow-[0_10px_25px_rgba(16,185,129,0.10)] dark:border-emerald-400 dark:bg-emerald-500/20'
                          : 'border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-white dark:border-white/10 dark:bg-zinc-700 dark:hover:bg-zinc-600'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">{topic.name}</p>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-white/10 dark:text-white/70">
                          {topic.estimatedMinutes} min
                        </span>
                      </div>
                    </button>
                  ))
                ) : (
                  <p className="py-4 text-center text-sm text-slate-500 dark:text-white/60">No topics found</p>
                )}
              </div>
            </div>

            {lastAttempt ? (
              <div className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-6 shadow-[0_22px_55px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-zinc-800">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-white/60">Last attempt</p>
                <p className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
                  {lastAttempt.score}/{lastAttempt.totalQuestions}
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-white/70">
                  {Math.round((lastAttempt.score / lastAttempt.totalQuestions) * 100)}% accuracy in {lastAttempt.timeTakenLabel}
                </p>
                <p className="mt-2 text-sm text-slate-500 dark:text-white/60">{lastAttempt.savedAtLabel}</p>
              </div>
            ) : null}
          </div>
        </div>

        <div className="space-y-6">
          <section className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-6 shadow-[0_22px_55px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-zinc-800">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-300">Concept section</p>
                <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">{selectedTopic?.name}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-white/70">{selectedSubject?.name}</p>
              </div>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-white">
                {practiceQuestions.length} questions loaded
              </span>
            </div>

            <div className="mt-5 rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-5 dark:border-white/10 dark:bg-zinc-700/50">
              <ul className="space-y-3 text-sm leading-7 text-slate-700 dark:text-white/80">
                {conceptBullets.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-sky-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <AnimatePresence initial={false}>
                {showMore && topicNotes?.advanced ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-7 text-slate-600 dark:border-white/10 dark:bg-zinc-600 dark:text-white/80">
                      {topicNotes.advanced}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <button
                type="button"
                onClick={() => setShowMore((current) => !current)}
                className="mt-5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              >
                {showMore ? 'Read less' : 'Read more'}
              </button>
            </div>
          </section>

          <section className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-6 shadow-[0_22px_55px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-zinc-800">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-sky-700 dark:text-sky-300">Practice questions</p>
                <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">Five-question drill</h3>
              </div>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-white">
                Auto-submit at 5:00
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {practiceQuestions.map((question, index) => (
                <QuestionCard
                  key={question.id}
                  question={question}
                  index={index}
                  selectedAnswer={selectedAnswers[index]}
                  onSelect={(optionIndex) => {
                    setSelectedAnswers((current) => ({
                      ...current,
                      [index]: optionIndex,
                    }))
                    if (!submitted && !isTimerRunning) {
                      setIsTimerRunning(true)
                    }
                  }}
                  submitted={submitted}
                />
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleRetry}
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              >
                Retry
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitDisabled}
                className="rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50 dark:text-slate-900"
              >
                Submit Answers
              </button>
            </div>

            {!submitted && Object.keys(selectedAnswers).length !== practiceQuestions.length ? (
              <p className="mt-3 text-sm text-slate-500 dark:text-white/60">
                Select all answers to enable submit. Timer will auto-submit when time ends.
              </p>
            ) : null}
          </section>

          <div ref={resultRef}>
            <AnimatePresence initial={false}>
              {submitted && result ? (
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 24 }}
                >
                  <ResultCard result={result} />
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TopicPage
