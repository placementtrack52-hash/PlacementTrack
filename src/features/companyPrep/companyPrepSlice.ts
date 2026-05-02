import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { companyData, type CompanyName, type SectionKey, type TechnicalTopicKey } from './companyData'

interface CompanyPrepState {
  selectedCompany: CompanyName | null
  activeSection: SectionKey
  activeTechnicalTopic: TechnicalTopicKey
  currentQuestionIndex: number
  questionIndices: Record<string, number>
  technicalTopicSelections: Record<string, TechnicalTopicKey>
  selectedAnswers: Record<string, string>
  revealedAnswers: Record<string, boolean>
  completedSections: Record<string, boolean>
  sectionScores: Record<string, number>
  score: number
}

const getSectionKey = (company: CompanyName, section: SectionKey) => `${company}-${section}`
const getQuestionScopeKey = (
  company: CompanyName,
  section: SectionKey,
  technicalTopic?: TechnicalTopicKey,
) => (section === 'technical' ? `${company}-${section}-${technicalTopic}` : getSectionKey(company, section))
const getTechnicalTopicSelectionKey = (company: CompanyName) => `${company}-technical`
const sectionKeys: SectionKey[] = ['aptitude', 'reasoning', 'verbal', 'technical']

const baseState: CompanyPrepState = {
  selectedCompany: null,
  activeSection: 'aptitude',
  activeTechnicalTopic: 'python',
  currentQuestionIndex: 0,
  questionIndices: {},
  technicalTopicSelections: {},
  selectedAnswers: {},
  revealedAnswers: {},
  completedSections: {},
  sectionScores: {},
  score: 0,
}

const companyPrepSlice = createSlice({
  name: 'companyPrep',
  initialState: baseState,
  reducers: {
    hydrateCompanyProgressState: (
      state,
      action: PayloadAction<{
        company: CompanyName
        progress: Partial<CompanyPrepState> | null
      }>,
    ) => {
      const { company, progress } = action.payload
      if (!progress) {
        return
      }

      Object.assign(state.questionIndices, progress.questionIndices ?? {})
      Object.assign(state.technicalTopicSelections, progress.technicalTopicSelections ?? {})
      Object.assign(state.selectedAnswers, progress.selectedAnswers ?? {})
      Object.assign(state.revealedAnswers, progress.revealedAnswers ?? {})
      Object.assign(state.completedSections, progress.completedSections ?? {})
      Object.assign(state.sectionScores, progress.sectionScores ?? {})

      if (state.selectedCompany === company) {
        state.activeSection = (progress.activeSection as SectionKey | undefined) ?? state.activeSection
        const technicalSelectionKey = getTechnicalTopicSelectionKey(company)
        state.activeTechnicalTopic =
          (progress.technicalTopicSelections?.[technicalSelectionKey] as TechnicalTopicKey | undefined) ??
          state.technicalTopicSelections[technicalSelectionKey] ??
          state.activeTechnicalTopic
        state.currentQuestionIndex = progress.currentQuestionIndex ?? state.currentQuestionIndex
        const activeKey = getQuestionScopeKey(
          company,
          state.activeSection,
          state.activeTechnicalTopic,
        )
        state.score = state.sectionScores[activeKey] ?? progress.score ?? 0
      }
    },
    hydrateCompanyProgressList: (
      state,
      action: PayloadAction<
        Array<{
          companyName: CompanyName
          activeSection?: SectionKey
          currentQuestionIndex?: number
          questionIndices?: Record<string, number>
          technicalTopicSelections?: Record<string, TechnicalTopicKey>
          selectedAnswers?: Record<string, string>
          revealedAnswers?: Record<string, boolean>
          completedSections?: Record<string, boolean>
          sectionScores?: Record<string, number>
          score?: number
        }>
      >,
    ) => {
      action.payload.forEach((progress) => {
        Object.assign(state.questionIndices, progress.questionIndices ?? {})
        Object.assign(state.technicalTopicSelections, progress.technicalTopicSelections ?? {})
        Object.assign(state.selectedAnswers, progress.selectedAnswers ?? {})
        Object.assign(state.revealedAnswers, progress.revealedAnswers ?? {})
        Object.assign(state.completedSections, progress.completedSections ?? {})
        Object.assign(state.sectionScores, progress.sectionScores ?? {})

        if (state.selectedCompany === progress.companyName) {
          state.activeSection = progress.activeSection ?? state.activeSection
          const technicalSelectionKey = getTechnicalTopicSelectionKey(progress.companyName)
          state.activeTechnicalTopic =
            progress.technicalTopicSelections?.[technicalSelectionKey] ??
            state.technicalTopicSelections[technicalSelectionKey] ??
            state.activeTechnicalTopic
          state.currentQuestionIndex = progress.currentQuestionIndex ?? state.currentQuestionIndex
          const activeKey = getQuestionScopeKey(
            progress.companyName,
            state.activeSection,
            state.activeTechnicalTopic,
          )
          state.score = state.sectionScores[activeKey] ?? progress.score ?? 0
        }
      })
    },
    resetCompanyPrepState: () => baseState,
    setSelectedCompany: (state, action: PayloadAction<CompanyName>) => {
      state.selectedCompany = action.payload
      state.activeSection = 'aptitude'
      const technicalSelectionKey = getTechnicalTopicSelectionKey(action.payload)
      state.activeTechnicalTopic = state.technicalTopicSelections[technicalSelectionKey] ?? 'python'
      const questionScopeKey = getQuestionScopeKey(action.payload, 'aptitude')
      state.currentQuestionIndex = state.questionIndices[questionScopeKey] ?? 0
      state.score = state.sectionScores[questionScopeKey] ?? 0
    },
    setActiveSection: (
      state,
      action: PayloadAction<{
        company: CompanyName
        section: SectionKey
        technicalTopic?: TechnicalTopicKey
      }>,
    ) => {
      const { company, section, technicalTopic } = action.payload
      state.activeSection = section
      if (section === 'technical') {
        const technicalSelectionKey = getTechnicalTopicSelectionKey(company)
        state.activeTechnicalTopic =
          technicalTopic ??
          state.technicalTopicSelections[technicalSelectionKey] ??
          state.activeTechnicalTopic
      }
      const questionScopeKey = getQuestionScopeKey(company, section, state.activeTechnicalTopic)
      state.currentQuestionIndex = state.questionIndices[questionScopeKey] ?? 0
      state.score = state.sectionScores[questionScopeKey] ?? 0
    },
    setActiveTechnicalTopic: (
      state,
      action: PayloadAction<{ company: CompanyName; topic: TechnicalTopicKey }>,
    ) => {
      const technicalSelectionKey = getTechnicalTopicSelectionKey(action.payload.company)
      state.activeTechnicalTopic = action.payload.topic
      state.technicalTopicSelections[technicalSelectionKey] = action.payload.topic
      const questionScopeKey = getQuestionScopeKey(
        action.payload.company,
        'technical',
        action.payload.topic,
      )
      state.currentQuestionIndex = state.questionIndices[questionScopeKey] ?? 0
      state.score = state.sectionScores[questionScopeKey] ?? 0
    },
    selectAnswer: (
      state,
      action: PayloadAction<{
        questionKey: string
        answer: string
      }>,
    ) => {
      if (state.revealedAnswers[action.payload.questionKey]) {
        return
      }

      state.selectedAnswers[action.payload.questionKey] = action.payload.answer
    },
    revealAnswer: (
      state,
      action: PayloadAction<{
        questionKey: string
        company: CompanyName
        section: SectionKey
        technicalTopic?: TechnicalTopicKey
        correctAnswer: string
        questionIndex: number
        totalQuestions: number
        sectionQuestionKeys: string[]
      }>,
    ) => {
      const {
        company,
        section,
        technicalTopic,
        questionKey,
        correctAnswer,
        questionIndex,
        totalQuestions,
        sectionQuestionKeys,
      } =
        action.payload
      if (state.revealedAnswers[questionKey]) {
        return
      }

      state.revealedAnswers[questionKey] = true
      const sectionKey = getSectionKey(company, section)
      const questionScopeKey = getQuestionScopeKey(company, section, technicalTopic)

      if (state.selectedAnswers[questionKey] === correctAnswer) {
        const nextScore = (state.sectionScores[questionScopeKey] ?? 0) + 1
        state.sectionScores[questionScopeKey] = nextScore
        if (
          state.selectedCompany === company &&
          state.activeSection === section &&
          (section !== 'technical' || state.activeTechnicalTopic === technicalTopic)
        ) {
          state.score = nextScore
        }
      }

      if (sectionQuestionKeys.every((key) => state.revealedAnswers[key])) {
        state.completedSections[sectionKey] = true
      }
    },
    nextQuestion: (
      state,
      action: PayloadAction<{
        company: CompanyName
        section: SectionKey
        technicalTopic?: TechnicalTopicKey
        totalQuestions: number
      }>,
    ) => {
      const questionScopeKey = getQuestionScopeKey(
        action.payload.company,
        action.payload.section,
        action.payload.technicalTopic,
      )
      const nextIndex = Math.min(
        state.currentQuestionIndex + 1,
        action.payload.totalQuestions - 1,
      )
      state.currentQuestionIndex = nextIndex
      state.questionIndices[questionScopeKey] = nextIndex
      state.score = state.sectionScores[questionScopeKey] ?? 0
    },
    retrySection: (
      state,
      action: PayloadAction<{
        company: CompanyName
        section: SectionKey
        technicalTopic?: TechnicalTopicKey
        questionKeys: string[]
      }>,
    ) => {
      const sectionKey = getSectionKey(action.payload.company, action.payload.section)
      const questionScopeKey = getQuestionScopeKey(
        action.payload.company,
        action.payload.section,
        action.payload.technicalTopic,
      )
      action.payload.questionKeys.forEach((questionKey) => {
        delete state.selectedAnswers[questionKey]
        delete state.revealedAnswers[questionKey]
      })
      state.questionIndices[questionScopeKey] = 0
      state.sectionScores[questionScopeKey] = 0
      state.completedSections[sectionKey] = false

      if (
        state.selectedCompany === action.payload.company &&
        state.activeSection === action.payload.section &&
        (action.payload.section !== 'technical' ||
          state.activeTechnicalTopic === action.payload.technicalTopic)
      ) {
        state.currentQuestionIndex = 0
        state.score = 0
      }
    },
  },
})

export const {
  hydrateCompanyProgressState,
  hydrateCompanyProgressList,
  resetCompanyPrepState,
  setSelectedCompany,
  setActiveSection,
  setActiveTechnicalTopic,
  selectAnswer,
  revealAnswer,
  nextQuestion,
  retrySection,
} = companyPrepSlice.actions

export const selectCompanyPrepState = (state: RootState) => state.companyPrep

export const selectCompanySectionProgress = (state: RootState, company: CompanyName) => {
  const completedCount = sectionKeys.filter(
    (section) => state.companyPrep.completedSections[`${company}-${section}`],
  ).length

  return {
    completedCount,
    totalCount: sectionKeys.length,
    progressPercent: Math.round((completedCount / sectionKeys.length) * 100),
  }
}

const selectCompletedSections = (state: RootState) => state.companyPrep.completedSections

export const selectOverallCompanyPrepProgress = createSelector(
  [selectCompletedSections],
  (completedSections) => {
    const companies = Object.keys(companyData) as CompanyName[]
    const totalCount = companies.length * sectionKeys.length
    const completedCount = companies.reduce((sum, company) => {
      return (
        sum +
        sectionKeys.filter((section) => completedSections[`${company}-${section}`]).length
      )
    }, 0)

    return {
      completedCount,
      totalCount,
      progressPercent: Math.round((completedCount / totalCount) * 100),
    }
  },
)

export const buildCompanyQuestionKey = (
  company: CompanyName,
  section: SectionKey,
  questionId: string,
  technicalTopic?: TechnicalTopicKey,
) => (section === 'technical'
  ? `${company}-${section}-${technicalTopic}-${questionId}`
  : `${company}-${section}-${questionId}`)

export default companyPrepSlice.reducer
