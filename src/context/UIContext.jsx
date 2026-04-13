import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getData, saveData } from '../utils/localStorage'

const UIContext = createContext(null)
const THEME_KEY = 'prepMasterTheme'

export const UIProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => getData(THEME_KEY, 'light'))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    saveData(THEME_KEY, theme)
  }, [theme])

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))

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
