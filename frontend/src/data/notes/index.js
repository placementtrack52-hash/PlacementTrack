import { javaNotes } from './javaNotes'
import { pythonNotes } from './pythonNotes'

export const NOTES_LANGUAGES = [
  {
    id: 'java',
    name: 'Java',
    emoji: '☕',
    description: 'Core Java for campus placements — JVM, OOP, collections, and interview MCQs.',
    color: 'from-amber-200 via-orange-100 to-white',
    progressBar: 'from-amber-400 to-orange-500',
    notes: javaNotes,
  },
  {
    id: 'python',
    name: 'Python',
    emoji: '🐍',
    description: 'Python fundamentals — syntax, data structures, and coding round patterns.',
    color: 'from-sky-200 via-cyan-100 to-white',
    progressBar: 'from-sky-400 to-blue-500',
    notes: pythonNotes,
  },
]

export const getLanguageConfig = (languageId) =>
  NOTES_LANGUAGES.find((l) => l.id === languageId)

export const getNotesForLanguage = (languageId) => {
  const config = getLanguageConfig(languageId)
  return config?.notes ?? []
}

export const getTopicBySlug = (languageId, slug) => {
  const notes = getNotesForLanguage(languageId)
  return notes.find((t) => t.slug === slug) ?? null
}

export const getPreviousTopic = (languageId, slug) => {
  const notes = getNotesForLanguage(languageId)
  const index = notes.findIndex((t) => t.slug === slug)
  return index > 0 ? notes[index - 1] : null
}

export const getTotalTopicCount = () =>
  NOTES_LANGUAGES.reduce((sum, lang) => sum + lang.notes.length, 0)
