import { useCallback, useEffect, useState } from 'react'
import { getTotalTopicCount } from '../../../data/notes/index.js'
import {
  isTopicCompleted,
  loadPlacementNotesProgress,
  setLastVisited,
  setTopicCompleted,
  topicKey,
} from '../utils/progressStorage'

export const usePlacementNotesProgress = () => {
  const [state, setState] = useState(loadPlacementNotesProgress)

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === 'prep-master-placement-notes-progress') {
        setState(loadPlacementNotesProgress())
      }
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const refresh = useCallback(() => setState(loadPlacementNotesProgress()), [])

  const completedCount = Object.keys(state.completed).filter(Boolean).length
  const totalTopics = getTotalTopicCount()
  const progressPercent =
    totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0

  const toggleComplete = useCallback(
    (language, slug, completed) => {
      setState(setTopicCompleted(language, slug, completed))
    },
    [],
  )

  const markVisited = useCallback((language, slug) => {
    setState(setLastVisited(language, slug))
  }, [])

  const isCompleted = useCallback(
    (language, slug) => isTopicCompleted(state, language, slug),
    [state],
  )

  const getLanguageProgress = useCallback(
    (languageId, topicCount) => {
      const done = Object.keys(state.completed).filter((key) => {
        if (!state.completed[key]) return false
        return key.startsWith(`${languageId}:`)
      }).length
      const percent = topicCount > 0 ? Math.round((done / topicCount) * 100) : 0
      return { done, percent }
    },
    [state],
  )

  return {
    state,
    completedCount,
    totalTopics,
    progressPercent,
    lastVisited: state.lastVisited,
    toggleComplete,
    markVisited,
    isCompleted,
    getLanguageProgress,
    refresh,
    topicKey,
  }
}
