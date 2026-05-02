import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import LoadingScreen from './LoadingScreen'

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isHydrating } = useAuth()

  if (isHydrating) return <LoadingScreen />
  if (!isAuthenticated) return <Navigate to="/login" replace />

  return children
}

export default ProtectedRoute
