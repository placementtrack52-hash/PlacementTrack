import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useAuth } from './AuthContext'
import { userDataApi } from '../services/api'

const UIContext = createContext(null)

export const UIProvider = ({ children }) => {
  const { isAuthenticated, isHydrating } = useAuth()
  const [theme, setThemeState] = useState('light')

  useEffect(() => {
    if (isHydrating) return

    if (!isAuthenticated) {
      setThemeState('light')
      return
    }

    let cancelled = false

    const loadPreferences = async () => {
      try {
        const { preferences } = await userDataApi.getPreferences()
        if (!cancelled) {
          setThemeState(preferences?.theme ?? 'light')
        }
      } catch {
        if (!cancelled) {
          setThemeState('light')
        }
      }
    }

    loadPreferences()

    return () => {
      cancelled = true
    }
  }, [isAuthenticated, isHydrating])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const setTheme = (nextTheme) => {
    setThemeState(nextTheme)

    if (isAuthenticated) {
      userDataApi.savePreferences({ theme: nextTheme }).catch(() => {})
    }
  }

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
  }

  const value = useMemo(
    () => ({ theme, isDark: theme === 'dark', setTheme, toggleTheme }),
    [theme],
  )

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}

export const useUI = () => {
  const context = useContext(UIContext)
  if (!context) throw new Error('useUI must be used within UIProvider')
  return context
}
