import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import PageShell from '../../components/PageShell'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import type { CompanyName, Question, SectionKey, TechnicalTopicKey } from './companyData'
import { companyData, technicalTopicLabels } from './companyData'
import QuestionCard from './QuestionCard'
import {
  buildCompanyQuestionKey,
  hydrateCompanyProgressState,
  nextQuestion,
  retrySection,
  revealAnswer,
  selectAnswer,
  selectCompanyPrepState,
  setActiveSection,
  setActiveTechnicalTopic,
  setSelectedCompany,
} from './companyPrepSlice'
import { companyProgressApi } from '../../services/api'

const sectionTabs: Array<{ key: SectionKey; label: string }> = [
  { key: 'aptitude', label: 'Aptitude' },
  { key: 'reasoning', label: 'Reasoning' },
  { key: 'verbal', label: 'Verbal' },
  { key: 'technical', label: 'Technical' },
]

const CompanyDetails = () => {
  const { companyName } = useParams()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [isProgressReady, setIsProgressReady] = useState(false)
  const {
    activeSection,
    activeTechnicalTopic,
    currentQuestionIndex,
    questionIndices,
    technicalTopicSelections,
    selectedAnswers,
    revealedAnswers,
    completedSections,
    sectionScores,
    score,
  } = useAppSelector(selectCompanyPrepState)

  const normalizedCompany = useMemo(() => {
    if (!companyName) return null
    const match = Object.keys(companyData).find(
      (item) => item.toLowerCase() === companyName.toLowerCase(),
    )

    return (match ?? null) as CompanyName | null
  }, [companyName])

  useEffect(() => {
    if (!normalizedCompany) return
    dispatch(setSelectedCompany(normalizedCompany))
  }, [dispatch, normalizedCompany])

  useEffect(() => {
    if (!normalizedCompany) return

    let cancelled = false
    setIsProgressReady(false)

    const loadProgress = async () => {
      try {
        const { progress } = await companyProgressApi.getOne(normalizedCompany)
        if (!cancelled) {
          dispatch(
            hydrateCompanyProgressState({
              company: normalizedCompany,
              progress,
            }),
          )
        }
      } catch {
        // Keep the in-memory defaults when no server progress exists yet.
      } finally {
        if (!cancelled) {
          setIsProgressReady(true)
        }
      }
    }

    loadProgress()

    return () => {
      cancelled = true
    }
  }, [dispatch, normalizedCompany])

  if (!normalizedCompany) {
    return (
      <PageShell
        title="Company not found"
        subtitle="That company track is not available right now."
        actions={null}
      >
        <Link to="/company-prep" className="rounded-2xl bg-ink px-5 py-3 text-sm font-semibold text-white">
          Back to company prep
        </Link>
      </PageShell>
    )
  }

  const sections = companyData[normalizedCompany]
  const technicalTopics = Object.keys(sections.technical) as TechnicalTopicKey[]
  const questions =
    activeSection === 'technical'
      ? sections.technical[activeTechnicalTopic]
      : sections[activeSection]
  const currentQuestion = questions[currentQuestionIndex]
  const sectionLabel = sectionTabs.find((tab) => tab.key === activeSection)?.label ?? 'Aptitude'

  const buildQuestionKey = (
    section: SectionKey,
    question: Question,
    technicalTopic?: TechnicalTopicKey,
  ) => buildCompanyQuestionKey(normalizedCompany, section, question.questionId, technicalTopic)

  const getSectionQuestionKeys = (section: SectionKey) => {
    if (section === 'technical') {
      return technicalTopics.flatMap((topic) =>
        sections.technical[topic].map((question) => buildQuestionKey(section, question, topic)),
      )
    }

    return sections[section].map((question) => buildQuestionKey(section, question))
  }

  const totalAnswered = questions.filter((question) =>
    revealedAnswers[
      buildQuestionKey(
        activeSection,
        question,
        activeSection === 'technical' ? activeTechnicalTopic : undefined,
      )
    ],
  ).length

  const isSectionComplete = getSectionQuestionKeys(activeSection).every(
    (questionKey) => revealedAnswers[questionKey],
  )

  const sectionSummaries = sectionTabs.map((tab) => {
    if (tab.key === 'technical') {
      const technicalQuestions = technicalTopics.flatMap((topic) => sections.technical[topic])
      const answeredCount = technicalTopics.reduce((sum, topic) => {
        return (
          sum +
          sections.technical[topic].filter((question) =>
            revealedAnswers[buildQuestionKey('technical', question, topic)],
          ).length
        )
      }, 0)
      const tabScore = technicalTopics.reduce((sum, topic) => {
        return (
          sum +
          sections.technical[topic].filter((question) => {
            const questionKey = buildQuestionKey('technical', question, topic)
            return (
              revealedAnswers[questionKey] &&
              selectedAnswers[questionKey] === question.correctAnswer
            )
          }).length
        )
      }, 0)

      return {
        ...tab,
        answeredCount,
        score: tabScore,
        totalQuestions: technicalQuestions.length,
      }
    }

    const tabQuestions = sections[tab.key]
    const answeredCount = tabQuestions.filter((question) =>
      revealedAnswers[buildQuestionKey(tab.key, question)],
    ).length
    const tabScore = tabQuestions.filter((question) => {
      const questionKey = buildQuestionKey(tab.key, question)
      return revealedAnswers[questionKey] && selectedAnswers[questionKey] === question.correctAnswer
    }).length

    return {
      ...tab,
      answeredCount,
      score: tabScore,
      totalQuestions: tabQuestions.length,
    }
  })

  const handleNextQuestion = () => {
    if (currentQuestionIndex === questions.length - 1) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
      return
    }

    dispatch(
      nextQuestion({
        company: normalizedCompany,
        section: activeSection,
        technicalTopic: activeSection === 'technical' ? activeTechnicalTopic : undefined,
        totalQuestions: questions.length,
      }),
    )
  }

  const questionKey = buildQuestionKey(
    activeSection,
    currentQuestion,
    activeSection === 'technical' ? activeTechnicalTopic : undefined,
  )

  const pickEntriesByPrefix = <T,>(entries: Record<string, T>, prefix: string) =>
    Object.fromEntries(Object.entries(entries).filter(([key]) => key.startsWith(prefix)))

  useEffect(() => {
    if (!normalizedCompany || !isProgressReady) return

    const companyPrefix = `${normalizedCompany}-`

    companyProgressApi
      .save(normalizedCompany, {
        activeSection,
        activeTechnicalTopic,
        currentQuestionIndex,
        questionIndices: pickEntriesByPrefix(questionIndices, companyPrefix),
        technicalTopicSelections: pickEntriesByPrefix(technicalTopicSelections, companyPrefix),
        selectedAnswers: pickEntriesByPrefix(selectedAnswers, companyPrefix),
        revealedAnswers: pickEntriesByPrefix(revealedAnswers, companyPrefix),
        completedSections: pickEntriesByPrefix(completedSections, companyPrefix),
        sectionScores: pickEntriesByPrefix(sectionScores, companyPrefix),
        score,
      })
      .catch(() => {})
  }, [
    activeSection,
    activeTechnicalTopic,
    completedSections,
    currentQuestionIndex,
    isProgressReady,
    normalizedCompany,
    questionIndices,
    revealedAnswers,
    score,
    sectionScores,
    selectedAnswers,
    technicalTopicSelections,
  ])

  return (
    <PageShell
      title={`${normalizedCompany} Company Prep`}
      subtitle="Move section by section like a real placement round. Reveal answers with explanations, track your score, and use the technical topics to practice language-specific basics."
      actions={
        <button
          type="button"
          onClick={() => navigate('/company-prep')}
          className="rounded-full bg-[#0f172a] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/40 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#1e293b] hover:shadow-xl hover:shadow-black/60 active:scale-95 dark:bg-yellow-400 dark:text-black dark:hover:bg-emerald-500"
        >
          Back to companies
        </button>
      }
    >
      <div className="space-y-8">
        {/* Company Info Card - Full Width Centered */}
        <div className="mx-auto max-w-3xl rounded-[2.15rem] border border-white/70 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.98),_rgba(241,245,249,0.94)_52%,_rgba(229,236,245,0.92))] p-8 text-center shadow-[0_24px_70px_rgba(148,163,184,0.22)] dark:border-white/10 dark:bg-gradient-to-br dark:from-zinc-900 dark:via-black dark:to-zinc-900 dark:text-white dark:shadow-[0_18px_50px_rgba(0,0,0,0.55)] sm:p-10">
          <p className="text-sm uppercase tracking-[0.45em] text-slate-500 dark:text-emerald-400">Company Profile</p>
          <h2 className="mt-4 font-display text-5xl font-bold">{normalizedCompany}</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-600 dark:text-white/70">
            Work through aptitude, reasoning, verbal, and technical rounds, then retry weak areas until your placement prep feels solid.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:max-w-md mx-auto">
            <div className="rounded-xl bg-slate-100 p-4 text-center dark:bg-white/10">
              <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-white">Total Questions</p>
              <p className="mt-2 text-3xl font-bold text-ink dark:text-white">
                {sectionSummaries.reduce((sum, tab) => sum + tab.totalQuestions, 0)}
              </p>
            </div>
            <div className="rounded-xl bg-slate-100 p-4 text-center dark:bg-white/10">
              <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-white">Completed</p>
              <p className="mt-2 text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                {sectionSummaries.reduce((sum, tab) => sum + tab.answeredCount, 0)}
              </p>
            </div>
          </div>
        </div>

        {/* Section Buttons - 2x2 Grid Centered */}
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 text-center text-sm uppercase tracking-[0.45em] text-slate-500 dark:text-emerald-400">Choose Section</p>
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {sectionSummaries.map((tab) => {
              const isActive = tab.key === activeSection
              const progressPercent = Math.round((tab.answeredCount / tab.totalQuestions) * 100)

              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() =>
                    dispatch(setActiveSection({ company: normalizedCompany, section: tab.key }))
                  }
                  className={`relative overflow-hidden rounded-2xl border border-white/70 p-6 text-center shadow-[0_20px_60px_rgba(148,163,184,0.18)] transition-all hover:scale-[1.02] ${
                    isActive
                      ? 'bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.98),_rgba(241,245,249,0.94)_52%,_rgba(229,236,245,0.92))] text-[#1e293b] dark:border-emerald-500 dark:bg-gradient-to-br dark:from-emerald-500/20 dark:via-black dark:to-emerald-500/10 dark:text-white'
                      : 'bg-[rgba(255,255,255,0.82)] text-[#1e293b] hover:bg-white dark:border-white/10 dark:bg-gradient-to-br dark:from-zinc-900 dark:via-black dark:to-zinc-900 dark:text-white'
                  }`}
                >
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-emerald-400">{tab.label}</p>
                  <p className="mt-3 font-display text-4xl font-bold">{tab.answeredCount}/{tab.totalQuestions}</p>
                  <div className="mx-auto mt-4 max-w-48">
                    <div className="h-2 overflow-hidden rounded-full bg-[#ddd4c8] dark:bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-500 transition-all duration-500"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-slate-500 dark:text-white/70">Score: {tab.score}/{tab.totalQuestions}</p>
                </button>
              )
            })}
          </div>

        {activeSection === 'technical' ? (
            <div className="rounded-[2rem] border border-white/70 bg-[rgba(255,255,255,0.82)] p-4 shadow-[0_20px_60px_rgba(148,163,184,0.18)] dark:border-white/10 dark:bg-black/80 dark:shadow-[0_18px_50px_rgba(0,0,0,0.55)]">
              <p className="px-2 text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-emerald-300">Technical Topics</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {technicalTopics.map((topic) => {
                  const isActiveTopic = topic === activeTechnicalTopic
                  const topicQuestions = sections.technical[topic]
                  const answeredCount = topicQuestions.filter((question) =>
                    revealedAnswers[buildQuestionKey('technical', question, topic)],
                  ).length

                  return (
                    <button
                      key={topic}
                      type="button"
                      onClick={() =>
                        dispatch(setActiveTechnicalTopic({ company: normalizedCompany, topic }))
                      }
                      className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                        isActiveTopic
                          ? 'bg-emerald-500 text-white shadow-[0_12px_30px_rgba(16,185,129,0.24)]'
                          : 'bg-white text-slate-700 shadow-[0_10px_24px_rgba(148,163,184,0.16)] hover:bg-slate-50 dark:bg-white/10 dark:text-white dark:hover:bg-white/20'
                      }`}
                    >
                      {technicalTopicLabels[topic]} {answeredCount}/{topicQuestions.length}
                    </button>
                  )
                })}
              </div>
            </div>
          ) : null}
        </div>

        <div className="space-y-6">
          <QuestionCard
            companyName={normalizedCompany}
            sectionLabel={sectionLabel}
            topicLabel={
              activeSection === 'technical' ? technicalTopicLabels[activeTechnicalTopic] : undefined
            }
            currentQuestionNumber={Math.min(currentQuestionIndex + 1, questions.length)}
            completedQuestions={totalAnswered}
            totalQuestions={questions.length}
            score={score}
            question={currentQuestion}
            selectedAnswer={selectedAnswers[questionKey]}
            isRevealed={Boolean(revealedAnswers[questionKey])}
            onSelectAnswer={(answer) => dispatch(selectAnswer({ questionKey, answer }))}
            onRevealAnswer={() =>
              dispatch(
                revealAnswer({
                  questionKey,
                  company: normalizedCompany,
                  section: activeSection,
                  technicalTopic: activeSection === 'technical' ? activeTechnicalTopic : undefined,
                  correctAnswer: currentQuestion.correctAnswer,
                  questionIndex: currentQuestionIndex,
                  totalQuestions: questions.length,
                  sectionQuestionKeys: getSectionQuestionKeys(activeSection),
                }),
              )
            }
            onNextQuestion={handleNextQuestion}
            isLastQuestion={currentQuestionIndex === questions.length - 1}
            isSectionComplete={isSectionComplete}
          />

          {isSectionComplete ? (
            <div className="rounded-[2.15rem] border border-white/70 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.98),_rgba(241,245,249,0.94)_52%,_rgba(229,236,245,0.92))] p-7 shadow-[0_24px_70px_rgba(148,163,184,0.22)] dark:border-white/10 dark:bg-black/80 dark:ring-white/10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.45em] text-slate-500 dark:text-white">
                    Section Result
                  </p>
                  <h3 className="mt-4 font-display text-4xl font-bold text-ink dark:text-white">
                    {score}/{questions.length}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-600 dark:text-white/70">
                    You completed the {sectionLabel.toLowerCase()} round for {normalizedCompany}. Retry this topic or switch tabs to continue the mock flow.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    dispatch(
                      retrySection({
                        company: normalizedCompany,
                        section: activeSection,
                        technicalTopic:
                          activeSection === 'technical' ? activeTechnicalTopic : undefined,
                        questionKeys: questions.map((question) =>
                          buildQuestionKey(
                            activeSection,
                            question,
                            activeSection === 'technical' ? activeTechnicalTopic : undefined,
                          ),
                        ),
                      }),
                    )
                  }
                  className="rounded-full bg-emerald-500 px-7 py-4 text-base font-semibold text-white transition hover:scale-105 dark:bg-emerald-500 dark:text-white dark:hover:bg-emerald-400"
                >
                  Retry Section
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </PageShell>
  )
}

export default CompanyDetails
