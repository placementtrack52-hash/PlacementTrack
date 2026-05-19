import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { useAuth } from './AuthContext'
import { userDataApi } from '../services/api'

const UIContext = createContext(null)

export const UIProvider = ({ children }) => {
  const { isAuthenticated, isHydrating } = useAuth()
  const [theme, setThemeState] = useState('light')
  const hasMountedRef = useRef(false)
  const themeTransitionTimeoutRef = useRef(null)

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
    const root = document.documentElement

    if (hasMountedRef.current) {
      root.classList.add('theme-transition')
      window.clearTimeout(themeTransitionTimeoutRef.current)
      themeTransitionTimeoutRef.current = window.setTimeout(() => {
        root.classList.remove('theme-transition')
      }, 350)
    } else {
      hasMountedRef.current = true
    }

    document.documentElement.classList.toggle('dark', theme === 'dark')

    return () => {
      window.clearTimeout(themeTransitionTimeoutRef.current)
    }
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
