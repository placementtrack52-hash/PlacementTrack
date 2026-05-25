import { useCallback, useEffect, useMemo, useReducer, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { useXP } from '../../context/XPContext'
import { useStreak } from '../../context/StreakContext'
import { getQuestionsForSubject } from './questionBank'
import { resolveCoachSubjectId, getAccentColor } from './utils/subjectKeys'
import { computeScores, applyTimeBonus } from './utils/scoringEngine'
import QuestionCard from './components/QuestionCard'
import AnswerInput from './components/AnswerInput'
import ScoreDisplay from './components/ScoreDisplay'
import FeedbackPanel from './components/FeedbackPanel'
import SessionHistory from './components/SessionHistory'

const MODE_OPTIONS = ['All', 'HR', 'Technical', 'Behavioral']
const DIFFICULTY_OPTIONS = ['All', 'Easy', 'Medium', 'Hard']

const storageKey = (subjectId) => `interviewCoach_${subjectId}`

const loadPersisted = (subjectId) => {
  try {
    const raw = localStorage.getItem(storageKey(subjectId))
    if (!raw) return { history: [], totalSessions: 0, totalXP: 0 }
    const parsed = JSON.parse(raw)
    return {
      history: Array.isArray(parsed.history) ? parsed.history.slice(0, 20) : [],
      totalSessions: parsed.totalSessions ?? 0,
      totalXP: parsed.totalXP ?? 0,
    }
  } catch {
    return { history: [], totalSessions: 0, totalXP: 0 }
  }
}

const savePersisted = (subjectId, data) => {
  try {
    localStorage.setItem(storageKey(subjectId), JSON.stringify(data))
  } catch {
    /* quota */
  }
}

const pickRandomQuestion = (pool, excludeId) => {
  if (!pool.length) return null
  const candidates = excludeId ? pool.filter((q) => q.id !== excludeId) : pool
  const list = candidates.length ? candidates : pool
  return list[Math.floor(Math.random() * list.length)]
}

const filterQuestions = (questions, mode, difficulty) =>
  questions.filter((q) => {
    if (mode !== 'All' && q.mode !== mode) return false
    if (difficulty !== 'All' && q.difficulty !== difficulty) return false
    return true
  })

const initialState = (persisted) => ({
  currentQuestion: null,
  lastQuestionId: null,
  answer: '',
  scores: null,
  isSubmitted: false,
  mode: 'All',
  difficulty: 'All',
  sessionHistory: persisted.history,
  totalSessions: persisted.totalSessions,
  totalXP: persisted.totalXP,
  answerTimer: 0,
  timerRunning: false,
  isCollapsed: false,
  bonusApplied: false,
  toast: null,
})

function reducer(state, action) {
  switch (action.type) {
    case 'HYDRATE':
      return {
        ...state,
        sessionHistory: action.history,
        totalSessions: action.totalSessions,
        totalXP: action.totalXP,
      }
    case 'SET_QUESTION':
      return {
        ...state,
        currentQuestion: action.question,
        lastQuestionId: action.question?.id ?? state.lastQuestionId,
        answer: '',
        scores: null,
        isSubmitted: false,
        answerTimer: 0,
        timerRunning: false,
        bonusApplied: false,
      }
    case 'SET_ANSWER':
      return { ...state, answer: action.answer }
    case 'START_TIMER':
      return state.timerRunning ? state : { ...state, timerRunning: true }
    case 'TICK_TIMER':
      return state.timerRunning && !state.isSubmitted
        ? { ...state, answerTimer: state.answerTimer + 1 }
        : state
    case 'SET_MODE':
      return { ...state, mode: action.mode, scores: null, isSubmitted: false, answer: '' }
    case 'SET_DIFFICULTY':
      return { ...state, difficulty: action.difficulty, scores: null, isSubmitted: false, answer: '' }
    case 'SUBMIT':
      return {
        ...state,
        scores: action.scores,
        isSubmitted: true,
        timerRunning: false,
        bonusApplied: action.bonusApplied,
        sessionHistory: action.history,
        totalSessions: action.totalSessions,
        totalXP: action.totalXP,
        toast: action.toast,
      }
    case 'CLEAR_TOAST':
      return { ...state, toast: null }
    case 'TOGGLE_COLLAPSE':
      return { ...state, isCollapsed: !state.isCollapsed }
    default:
      return state
  }
}

/*
async function getAIFeedback(question, answer, keywords) {
  // PHASE 2: Replace rule-based scoring with AI API call
  // const res = await fetch("GEMINI_OR_CLAUDE_ENDPOINT", { ... });
  // return { keywordScore, clarityScore, depthScore, overall, aiTip };
  // For now, falls through to rule-based engine below
}
*/

const InterviewCoach = ({ subjectId, accentColor: accentColorProp, defaultExpanded = false }) => {
  const coachKey = resolveCoachSubjectId(subjectId)
  const accentColor = getAccentColor(subjectId, accentColorProp)
  const { addXP } = useXP()
  const { markActivity } = useStreak()

  const allQuestions = useMemo(() => getQuestionsForSubject(coachKey), [coachKey])
  const persistedRef = useRef(loadPersisted(coachKey))

  const [state, dispatch] = useReducer(reducer, persistedRef.current, (persisted) => ({
    ...initialState(persisted),
    isCollapsed: !defaultExpanded,
  }))
  const filterRef = useRef({ mode: 'All', difficulty: 'All' })

  const filteredPool = useMemo(
    () => filterQuestions(allQuestions, state.mode, state.difficulty),
    [allQuestions, state.mode, state.difficulty],
  )

  const assignQuestion = useCallback(
    (excludeId) => {
      const q = pickRandomQuestion(filteredPool.length ? filteredPool : allQuestions, excludeId)
      dispatch({ type: 'SET_QUESTION', question: q })
    },
    [filteredPool, allQuestions],
  )

  useEffect(() => {
    const p = loadPersisted(coachKey)
    persistedRef.current = p
    dispatch({
      type: 'HYDRATE',
      history: p.history,
      totalSessions: p.totalSessions,
      totalXP: p.totalXP,
    })
  }, [coachKey])

  useEffect(() => {
    if (!allQuestions.length) return
    assignQuestion(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coachKey])

  useEffect(() => {
    if (
      filterRef.current.mode === state.mode &&
      filterRef.current.difficulty === state.difficulty
    ) {
      return
    }
    filterRef.current = { mode: state.mode, difficulty: state.difficulty }
    assignQuestion(state.lastQuestionId)
  }, [state.mode, state.difficulty, assignQuestion, state.lastQuestionId])

  useEffect(() => {
    if (!state.timerRunning || state.isSubmitted) return undefined
    const id = setInterval(() => dispatch({ type: 'TICK_TIMER' }), 1000)
    return () => clearInterval(id)
  }, [state.timerRunning, state.isSubmitted])

  useEffect(() => {
    if (!state.toast) return undefined
    const id = setTimeout(() => dispatch({ type: 'CLEAR_TOAST' }), 4000)
    return () => clearInterval(id)
  }, [state.toast])

  const handleSubmit = () => {
    if (!state.currentQuestion || state.isSubmitted || !state.answer.trim()) return

    const base = computeScores(state.answer, state.currentQuestion.keywords)
    const { overall, bonusApplied } = applyTimeBonus(base.overall, state.answerTimer)
    const scores = { ...base, overall }

    const xpEarned = overall >= 75 ? 30 : overall >= 50 ? 20 : 10
    addXP(xpEarned, `Interview Coach — ${coachKey}`)
    markActivity(subjectId, 'interview_coach')

    const qIndex = allQuestions.findIndex((q) => q.id === state.currentQuestion.id) + 1
    const entry = {
      questionId: state.currentQuestion.id,
      label: `Q${qIndex || '?'}`,
      score: overall,
      date: new Date().toISOString(),
    }

    const history = [entry, ...state.sessionHistory].slice(0, 20)
    const totalSessions = state.totalSessions + 1
    const totalXP = state.totalXP + xpEarned

    savePersisted(coachKey, { history, totalSessions, totalXP })
    persistedRef.current = { history, totalSessions, totalXP }

    dispatch({
      type: 'SUBMIT',
      scores,
      bonusApplied,
      history,
      totalSessions,
      totalXP,
      toast: bonusApplied ? 'Quick thinker! +5 bonus' : null,
    })
    window.dispatchEvent(new Event('interview-coach-update'))
  }

  const handleNext = () => {
    assignQuestion(state.currentQuestion?.id ?? state.lastQuestionId)
  }

  if (!allQuestions.length) {
    return (
      <div className="rounded-2xl border border-gray-100 bg-white p-4 text-sm text-slate-500 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
        Interview Coach questions are not available for this subject yet.
      </div>
    )
  }

  const filterPillClass = (active) =>
    `rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
      active
        ? 'border-slate-800 bg-slate-800 text-white dark:border-white dark:bg-white dark:text-slate-900'
        : 'border-gray-200 bg-white text-slate-600 hover:border-slate-300 dark:border-zinc-600 dark:bg-zinc-900 dark:text-slate-300'
    }`

  return (
    <section>
      <button
        type="button"
        onClick={() => dispatch({ type: 'TOGGLE_COLLAPSE' })}
        className="flex w-full items-center justify-between rounded-2xl border border-gray-100 bg-white px-4 py-4 text-left shadow-sm transition hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900"
        style={{ borderColor: state.isCollapsed ? undefined : `${accentColor}66` }}
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Free AI Interview Coach
          </p>
          <h3 className="mt-1 font-display text-xl font-bold text-ink dark:text-white">
            Practice interview answers
          </h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Rule-based scoring in your browser — no API, no cost. Earn XP per attempt.
          </p>
        </div>
        <ChevronDown
          className={`h-6 w-6 shrink-0 text-slate-500 transition-transform duration-200 ${
            state.isCollapsed ? '' : 'rotate-180'
          }`}
        />
      </button>

      {!state.isCollapsed ? (
        <div className="mt-4 space-y-4">
          {state.toast ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-300">
              {state.toast}
            </div>
          ) : null}

          <SessionHistory history={state.sessionHistory} />

          <div className="flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 md:flex-row md:flex-wrap md:items-center">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Mode</span>
              {MODE_OPTIONS.map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => dispatch({ type: 'SET_MODE', mode: m })}
                  className={filterPillClass(state.mode === m)}
                  style={
                    state.mode === m
                      ? { borderColor: accentColor, backgroundColor: accentColor, color: '#1f2937' }
                      : undefined
                  }
                >
                  {m}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Difficulty</span>
              {DIFFICULTY_OPTIONS.map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => dispatch({ type: 'SET_DIFFICULTY', difficulty: d })}
                  className={filterPillClass(state.difficulty === d)}
                  style={
                    state.difficulty === d
                      ? { borderColor: accentColor, backgroundColor: accentColor, color: '#1f2937' }
                      : undefined
                  }
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {state.currentQuestion ? (
            <>
              <QuestionCard question={state.currentQuestion} accentColor={accentColor} />
              <AnswerInput
                answer={state.answer}
                onChange={(value) => dispatch({ type: 'SET_ANSWER', answer: value })}
                onFirstKeypress={() => dispatch({ type: 'START_TIMER' })}
                disabled={state.isSubmitted}
                answerTimer={state.answerTimer}
                accentColor={accentColor}
              />
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={state.isSubmitted || !state.answer.trim()}
                  className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white disabled:opacity-50 dark:bg-white dark:text-[#0f1720]"
                >
                  Submit answer
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 dark:border-zinc-600 dark:bg-zinc-900 dark:text-white"
                >
                  Next question
                </button>
              </div>
              {state.isSubmitted && state.scores ? (
                <>
                  <ScoreDisplay
                    scores={state.scores}
                    accentColor={accentColor}
                    bonusApplied={state.bonusApplied}
                  />
                  <FeedbackPanel question={state.currentQuestion} scores={state.scores} />
                </>
              ) : null}
            </>
          ) : null}
        </div>
      ) : null}
    </section>
  )
}

export default InterviewCoach
