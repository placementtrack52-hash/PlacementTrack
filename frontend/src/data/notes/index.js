import { javaNotes } from './javaNotes'
import { pythonNotes } from './pythonNotes'
import { cNotes } from './cNotes'
import { htmlNotes } from './htmlNotes'
import { cssNotes } from './cssNotes'
import { javascriptNotes } from './javascriptNotes'
import { reactNotes } from './reactNotes'

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
  {
    id: 'c',
    name: 'C Programming',
    emoji: '🔵',
    description: 'C programming fundamentals — memory management, pointers, structures, and coding questions.',
    color: 'from-indigo-200 via-blue-100 to-white',
    progressBar: 'from-indigo-400 to-blue-500',
    notes: cNotes,
  },
  {
    id: 'html',
    name: 'HTML',
    emoji: '🌐',
    description: 'HTML5 basics — page structure, elements, attributes, semantic tags, and forms.',
    color: 'from-orange-200 via-red-100 to-white',
    progressBar: 'from-orange-400 to-red-500',
    notes: htmlNotes,
  },
  {
    id: 'css',
    name: 'CSS',
    emoji: '🎨',
    description: 'CSS styling — selectors, box model, layouts (Flexbox, Grid), and responsive design.',
    color: 'from-blue-200 via-sky-100 to-white',
    progressBar: 'from-blue-400 to-sky-500',
    notes: cssNotes,
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    emoji: '💛',
    description: 'Modern JavaScript (ES6+) — core execution, scope, DOM manipulation, asynchronous patterns, and interview MCQs.',
    color: 'from-yellow-200 via-amber-100 to-white',
    progressBar: 'from-yellow-500 to-amber-500',
    notes: javascriptNotes,
  },
  {
    id: 'react',
    name: 'React JS',
    emoji: '⚛️',
    description: 'React JS library — components, JSX, props, state, hooks, lifecycle, and modern hooks.',
    color: 'from-cyan-200 via-sky-100 to-white',
    progressBar: 'from-cyan-400 to-sky-500',
    notes: reactNotes,
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
