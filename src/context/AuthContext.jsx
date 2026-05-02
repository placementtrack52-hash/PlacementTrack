import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { authApi } from '../services/api'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isHydrating, setIsHydrating] = useState(true)

  useEffect(() => {
    let cancelled = false

    const hydrateUser = async () => {
      try {
        const { user: currentUser } = await authApi.me()
        if (!cancelled) {
          setUser(currentUser)
        }
      } catch {
        if (!cancelled) {
          setUser(null)
        }
      } finally {
        if (!cancelled) {
          setIsHydrating(false)
        }
      }
    }

    hydrateUser()

    return () => {
      cancelled = true
    }
  }, [])

  const signup = async ({ name, email, password }) => {
    try {
      const { user: nextUser, message } = await authApi.signup({ name, email, password })
      setUser(nextUser)
      return { success: true, message }
    } catch (error) {
      const message =
        error?.message === 'Failed to fetch'
          ? 'Cannot connect to server. Make sure the backend is running.'
          : (error?.message ?? 'Signup failed. Please try again.')
      return { success: false, message }
    }
  }

  const login = async ({ email, password }) => {
    try {
      const { user: nextUser, message } = await authApi.login({ email, password })
      setUser(nextUser)
      return { success: true, message }
    } catch (error) {
      const message =
        error?.message === 'Failed to fetch'
          ? 'Cannot connect to server. Make sure the backend is running.'
          : (error?.message ?? 'Login failed. Please try again.')
      return { success: false, message }
    }
  }

  const logout = async () => {
    try {
      await authApi.logout()
    } catch {
      // Clear the local session state even if the logout request fails.
    }
    setUser(null)
  }

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      isHydrating,
      signup,
      login,
      logout,
    }),
    [user, isHydrating],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
