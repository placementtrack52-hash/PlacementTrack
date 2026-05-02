import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { authApi } from '../services/api'

// Clear per-user progress cache from localStorage on logout
const clearProgressCache = (userId) => {
  try {
    if (userId) localStorage.removeItem(`pm_progress_${userId}`)
  } catch {
    // ignore
  }
}

// Normalize user object so user.id is ALWAYS a string (login, signup, and /me
// used to return different shapes — this makes the whole app consistent).
const normalizeUser = (raw) => {
  if (!raw) return null
  return {
    id: (raw.id ?? raw._id)?.toString(),
    name: raw.name,
    email: raw.email,
  }
}

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
          setUser(normalizeUser(currentUser))
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
      setUser(normalizeUser(nextUser))
      return { success: true, message }
    } catch (error) {
      let message
      if (error?.message === 'Failed to fetch') {
        message = 'Cannot connect to server. Make sure the backend is running.'
      } else if (error?.message?.includes('already exists')) {
        message = 'An account with this email already exists. Please log in instead.'
      } else {
        message = error?.message ?? 'Signup failed. Please try again.'
      }
      return { success: false, message }
    }
  }

  const login = async ({ email, password }) => {
    try {
      const { user: nextUser, message } = await authApi.login({ email, password })
      setUser(normalizeUser(nextUser))
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
    const currentUser = user
    try {
      await authApi.logout()
    } catch {
      // Clear local session state even if the logout request fails.
    }
    // Clear this user's progress cache so the next login always fetches from DB.
    if (currentUser?.id) clearProgressCache(currentUser.id)
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
