import { Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import { useAuth } from './context/AuthContext'
import DailyChallengePage from './pages/DailyChallengePage'
import DashboardPage from './pages/DashboardPage'
import FeedbackPage from './pages/FeedbackPage'
import FinalTestPage from './pages/FinalTestPage'
import LoginPage from './pages/LoginPage'
import MistakeNotebookPage from './pages/MistakeNotebookPage'
import QuizPage from './pages/QuizPage'
import SignupPage from './pages/SignupPage'
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


const PublicOnlyRoute = ({ children }) => {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : children
}

const App = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/dashboard" replace />} />
    <Route path="/login" element={<PublicOnlyRoute><LoginPage /></PublicOnlyRoute>} />
    <Route path="/signup" element={<PublicOnlyRoute><SignupPage /></PublicOnlyRoute>} />
    <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
    <Route path="/subjects" element={<ProtectedRoute><SubjectsPage /></ProtectedRoute>} />
    <Route path="/subjects/:subjectId" element={<ProtectedRoute><SubjectTopicsPage /></ProtectedRoute>} />
    <Route path="/subjects/:subjectId/topics/:topicId" element={<ProtectedRoute><TopicDetailPage /></ProtectedRoute>} />
    <Route path="/subjects/:subjectId/topics/:topicId/quiz/:level" element={<ProtectedRoute><QuizPage /></ProtectedRoute>} />
    <Route path="/subjects/:subjectId/topics/:topicId/final-test" element={<ProtectedRoute><FinalTestPage /></ProtectedRoute>} />
    <Route path="/challenge" element={<ProtectedRoute><DailyChallengePage /></ProtectedRoute>} />
    <Route path="/mistakes" element={<ProtectedRoute><MistakeNotebookPage /></ProtectedRoute>} />
    <Route path="/feedback" element={<ProtectedRoute><FeedbackPage /></ProtectedRoute>} />
    <Route path="/roadmap" element={<ProtectedRoute><RoadmapPage /></ProtectedRoute>} />
    <Route path="/roadmap/:type" element={<ProtectedRoute><RoadmapDetailPage /></ProtectedRoute>} />
    <Route path="/cheatsheet" element={<ProtectedRoute><CheatSheetPage /></ProtectedRoute>} />
    <Route path="/cheatsheet/:subject" element={<ProtectedRoute><CheatSheetSubjectPage /></ProtectedRoute>} />
    <Route path="/cheatsheet/:subject/:topic" element={<ProtectedRoute><CheatSheetTopicPage /></ProtectedRoute>} />
    <Route path="/last-minute" element={<ProtectedRoute><LastMinutePage /></ProtectedRoute>} />
    <Route path="/last-minute/:subject" element={<ProtectedRoute><LastMinuteSubjectPage /></ProtectedRoute>} />
    <Route path="/last-minute/:subject/:topic" element={<ProtectedRoute><LastMinuteTopicPage /></ProtectedRoute>} />
    <Route path="*" element={<Navigate to="/dashboard" replace />} />
    
  </Routes>
)

export default App
