import { Suspense, lazy, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useAppDispatch } from './app/hooks'
import LoadingScreen from './components/LoadingScreen'
import ProtectedRoute from './components/ProtectedRoute'
import {
  hydrateCompanyProgressList,
  resetCompanyPrepState,
} from './features/companyPrep/companyPrepSlice'
import CompanyDetails from './features/companyPrep/CompanyDetails'
import CompanyList from './features/companyPrep/CompanyList'
import { useAuth } from './context/AuthContext'
import DailyChallengePage from './pages/DailyChallengePage'
import DailyRoutinePage from './pages/DailyRoutinePage'
import NotesPage from './pages/NotesPage'
import FeedbackPage from './pages/FeedbackPage'
import FinalTestPage from './pages/FinalTestPage'
import LoginPage from './pages/LoginPage'
import MistakeNotebookPage from './pages/MistakeNotebookPage'
import PracticeFeedbackPage from './pages/PracticeFeedbackPage'
import QuizPage from './pages/QuizPage'
import SignupPage from './pages/SignupPage'
import StudyRoomCreatePage from './pages/StudyRoomCreatePage'
import StudyRoomJoinPage from './pages/StudyRoomJoinPage'
import StudyRoomPage from './pages/StudyRoomPage'
import StudyRoomWorkspacePage from './pages/StudyRoomWorkspacePage'
import CodeCategoryPage from './pages/CodeCategoryPage'
import CodeHomePage from './pages/CodeHomePage'
import CodeProblemPage from './pages/CodeProblemPage'
import SubjectTopicsPage from './pages/SubjectTopicsPage'
import SubjectsPage from './pages/SubjectsPage'
import TopicDetailPage from './pages/TopicDetailPage'
import RoadmapPage from './pages/RoadmapPage'
import RoadmapDetailPage from './pages/RoadmapDetailPage'
import CheatSheetPage from './pages/CheatSheetPage'
import CheatSheetSubjectPage from './pages/CheatSheetSubjectPage'
import CheatSheetTopicPage from './pages/CheatSheetTopicPage'
import LastMinutePage from './pages/LastMinutePage'
import LastMinuteSubjectPage from './pages/LastMinuteSubjectPage'
import LastMinuteTopicPage from './pages/LastMinuteTopicPage'
import BadgesPage from './pages/BadgesPage'
import { companyProgressApi } from './services/api'
import FeedbackWidget from './components/FeedbackWidget'
import AdminFeedbackDashboard from './pages/AdminFeedbackDashboard'
import CompanyPYQPage from './pages/CompanyPYQPage'
import CompanyPYQDetailPage from './pages/CompanyPYQDetailPage'
import CompanyPYQSectionPage from './pages/CompanyPYQSectionPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import CurrentAffairsPage from './pages/CurrentAffairsPage'
import CurrentAffairsCategoryPage from './pages/CurrentAffairsCategoryPage'
import ResumeCheckerPage from './pages/ResumeCheckerPage'
import DreamRoadmapPage from './pages/DreamRoadmapPage'

const DashboardPage = lazy(() => import('./pages/DashboardPage'))
import PlacementNotesPage from './pages/PlacementNotesPage'
import PlacementNotesLearnPage from './pages/PlacementNotesLearnPage'
import InterviewCoachPage from './pages/InterviewCoachPage'

const PublicOnlyRoute = ({ children }) => {
  const { isAuthenticated, isHydrating } = useAuth()

  if (isHydrating) {
    return <LoadingScreen />
  }

  return isAuthenticated ? <Navigate to="/dashboard" replace /> : children
}

const AppContent = () => {
  const dispatch = useAppDispatch()
  const { isAuthenticated, isHydrating } = useAuth()

  useEffect(() => {
    if (isHydrating) return

    if (!isAuthenticated) {
      dispatch(resetCompanyPrepState())
      return
    }

    let cancelled = false

    const hydrateCompanyProgress = async () => {
      try {
        const { progressList } = await companyProgressApi.getAll()
        if (!cancelled) {
          dispatch(hydrateCompanyProgressList(progressList ?? []))
        }
      } catch {
        if (!cancelled) {
          dispatch(resetCompanyPrepState())
        }
      }
    }

    hydrateCompanyProgress()

    return () => {
      cancelled = true
    }
  }, [dispatch, isAuthenticated, isHydrating])

  return (
    <>
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      <Route path="/login" element={<PublicOnlyRoute><LoginPage /></PublicOnlyRoute>} />
      <Route path="/signup" element={<PublicOnlyRoute><SignupPage /></PublicOnlyRoute>} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Suspense fallback={<LoadingScreen label="Loading dashboard..." />}>
              <DashboardPage />
            </Suspense>
          </ProtectedRoute>
        }
      />
      <Route path="/daily-routine" element={<ProtectedRoute><DailyRoutinePage /></ProtectedRoute>} />
      <Route path="/study-room" element={<ProtectedRoute><StudyRoomPage /></ProtectedRoute>} />
      <Route path="/study-room/create" element={<ProtectedRoute><StudyRoomCreatePage /></ProtectedRoute>} />
      <Route path="/study-room/join" element={<ProtectedRoute><StudyRoomJoinPage /></ProtectedRoute>} />
      <Route path="/study-room/room/:roomCode" element={<ProtectedRoute><StudyRoomWorkspacePage /></ProtectedRoute>} />
      <Route path="/notes" element={<ProtectedRoute><NotesPage /></ProtectedRoute>} />
      <Route path="/subjects" element={<ProtectedRoute><SubjectsPage /></ProtectedRoute>} />
      <Route path="/subjects/code" element={<ProtectedRoute><CodeHomePage /></ProtectedRoute>} />
      <Route path="/subjects/code/:category" element={<ProtectedRoute><CodeCategoryPage /></ProtectedRoute>} />
      <Route path="/subjects/code/problem/:id" element={<ProtectedRoute><CodeProblemPage /></ProtectedRoute>} />
      <Route path="/subjects/pyq/:company/:section" element={<ProtectedRoute><CompanyPYQSectionPage /></ProtectedRoute>} />
      <Route path="/subjects/pyq/:company" element={<ProtectedRoute><CompanyPYQDetailPage /></ProtectedRoute>} />
      <Route path="/subjects/ats-resume-checker" element={<ProtectedRoute><ResumeCheckerPage /></ProtectedRoute>} />
      <Route path="/subjects/:subjectId" element={<ProtectedRoute><SubjectTopicsPage /></ProtectedRoute>} />
      <Route path="/subjects/:subjectId/topics/:topicId" element={<ProtectedRoute><TopicDetailPage /></ProtectedRoute>} />
      <Route path="/subjects/:subjectId/topics/:topicId/quiz/:level" element={<ProtectedRoute><QuizPage /></ProtectedRoute>} />
      <Route path="/subjects/:subjectId/topics/:topicId/final-test" element={<ProtectedRoute><FinalTestPage /></ProtectedRoute>} />
      <Route path="/challenge" element={<ProtectedRoute><DailyChallengePage /></ProtectedRoute>} />
      <Route path="/mistakes" element={<ProtectedRoute><MistakeNotebookPage /></ProtectedRoute>} />
      <Route path="/practice-feedback" element={<ProtectedRoute><PracticeFeedbackPage /></ProtectedRoute>} />
      <Route path="/feedback" element={<ProtectedRoute><FeedbackPage /></ProtectedRoute>} />
      <Route path="/roadmap" element={<ProtectedRoute><RoadmapPage /></ProtectedRoute>} />
      <Route path="/roadmap/:type" element={<ProtectedRoute><RoadmapDetailPage /></ProtectedRoute>} />
      <Route path="/cheatsheet" element={<ProtectedRoute><CheatSheetPage /></ProtectedRoute>} />
      <Route path="/cheatsheet/:subject" element={<ProtectedRoute><CheatSheetSubjectPage /></ProtectedRoute>} />
      <Route path="/cheatsheet/:subject/:topic" element={<ProtectedRoute><CheatSheetTopicPage /></ProtectedRoute>} />
      <Route path="/last-minute" element={<ProtectedRoute><LastMinutePage /></ProtectedRoute>} />
      <Route path="/last-minute/:subject" element={<ProtectedRoute><LastMinuteSubjectPage /></ProtectedRoute>} />
      <Route path="/last-minute/:subject/:topic" element={<ProtectedRoute><LastMinuteTopicPage /></ProtectedRoute>} />
      <Route path="/company-prep" element={<ProtectedRoute><CompanyList /></ProtectedRoute>} />
      <Route path="/company-prep/:companyName" element={<ProtectedRoute><CompanyDetails /></ProtectedRoute>} />
      <Route path="/badges" element={<ProtectedRoute><BadgesPage /></ProtectedRoute>} />
      <Route path="/admin/feedback" element={<ProtectedRoute><AdminFeedbackDashboard /></ProtectedRoute>} />
      <Route path="/subjects/pyq" element={<ProtectedRoute><CompanyPYQPage /></ProtectedRoute>} />
      <Route path="/subjects/projects" element={<ProtectedRoute><ProjectsPage /></ProtectedRoute>} />
      <Route path="/subjects/projects/:id" element={<ProtectedRoute><ProjectDetailPage /></ProtectedRoute>} />
      <Route path="/subjects/current-affairs" element={<ProtectedRoute><CurrentAffairsPage /></ProtectedRoute>} />
      <Route path="/subjects/current-affairs/:categoryId" element={<ProtectedRoute><CurrentAffairsCategoryPage /></ProtectedRoute>} />
      <Route path="/dream-roadmap" element={<ProtectedRoute><DreamRoadmapPage /></ProtectedRoute>} />
      <Route path="/placement-notes" element={<ProtectedRoute><PlacementNotesPage /></ProtectedRoute>} />
      <Route
        path="/placement-notes/:language/:slug"
        element={<ProtectedRoute><PlacementNotesLearnPage /></ProtectedRoute>}
      />
      <Route path="/interview-coach" element={<ProtectedRoute><InterviewCoachPage /></ProtectedRoute>} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
    <FeedbackWidget />
    </>
  )
}

const App = () => <AppContent />

export default App
