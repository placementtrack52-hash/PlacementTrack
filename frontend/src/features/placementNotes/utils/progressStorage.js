const STORAGE_KEY = 'prep-master-placement-notes-progress'

const defaultState = () => ({
  completed: {},
  lastVisited: null,
})

export const loadPlacementNotesProgress = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultState()
    const parsed = JSON.parse(raw)
    return {
      completed: parsed.completed ?? {},
      lastVisited: parsed.lastVisited ?? null,
    }
  } catch {
    return defaultState()
  }
}

export const savePlacementNotesProgress = (state) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export const topicKey = (language, slug) => `${language}:${slug}`

export const isTopicCompleted = (state, language, slug) =>
  Boolean(state.completed[topicKey(language, slug)])

export const setTopicCompleted = (language, slug, completed) => {
  const state = loadPlacementNotesProgress()
  const key = topicKey(language, slug)
  if (completed) {
    state.completed[key] = true
  } else {
    delete state.completed[key]
  }
  savePlacementNotesProgress(state)
  return state
}

export const setLastVisited = (language, slug) => {
  const state = loadPlacementNotesProgress()
  state.lastVisited = { language, slug, at: Date.now() }
  savePlacementNotesProgress(state)
  return state
}
