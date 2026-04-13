import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getData, saveData } from '../utils/localStorage'

const USERS_KEY = 'prepMasterUsers'
const SESSION_KEY = 'prepMasterSession'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isHydrating, setIsHydrating] = useState(true)

  useEffect(() => {
    const session = getData(SESSION_KEY, null)
    if (session) setUser(session)
    setIsHydrating(false)
  }, [])

  const signup = ({ name, email, password }) => {
    const normalizedEmail = email.trim().toLowerCase()
    const users = getData(USERS_KEY, [])
    const exists = users.some((item) => item.email === normalizedEmail)

    if (exists) {
      return { success: false, message: 'An account already exists for this email.' }
    }

    const nextUser = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: normalizedEmail,
      password,
      createdAt: new Date().toISOString(),
    }

    const updatedUsers = [...users, nextUser]
    saveData(USERS_KEY, updatedUsers)
    saveData(SESSION_KEY, nextUser)
    setUser(nextUser)

    return { success: true, message: 'Account created successfully.' }
  }

  const login = ({ email, password }) => {
    const normalizedEmail = email.trim().toLowerCase()
    const users = getData(USERS_KEY, [])
    const existingUser = users.find(
      (item) => item.email === normalizedEmail && item.password === password,
    )

    if (!existingUser) {
      return { success: false, message: 'Invalid email or password. Try again.' }
    }

    saveData(SESSION_KEY, existingUser)
    setUser(existingUser)
    return { success: true, message: 'Logged in successfully.' }
  }

  const logout = () => {
    localStorage.removeItem(SESSION_KEY)
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
