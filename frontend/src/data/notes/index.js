import { javaNotes } from './javaNotes'
import { pythonNotes } from './pythonNotes'
import { cNotes } from './cNotes'
import { htmlNotes } from './htmlNotes'
import { cssNotes } from './cssNotes'
import { javascriptNotes } from './javascriptNotes'
import { reactNotes } from './reactNotes'
import { nodeNotes } from './nodeNotes'
import { sqlNotes } from './sqlNotes'
import { cppNotes } from './cppNotes'
import { mysqlNotes } from './mysqlNotes'
import { mongodbNotes } from './mongodbNotes'
import { phpNotes } from './phpNotes'
import { csharpNotes } from './csharpNotes'

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
  {
    id: 'node',
    name: 'Node.js',
    emoji: '🟢',
    description: 'Node.js backend environment — event loop, modular structure, NPM, express servers, and middlewares.',
    color: 'from-green-200 via-emerald-100 to-white',
    progressBar: 'from-green-400 to-emerald-500',
    notes: nodeNotes,
  },
  {
    id: 'sql',
    name: 'SQL',
    emoji: '💾',
    description: 'Structured Query Language — relational database, primary/foreign keys, joins, index, and subqueries.',
    color: 'from-slate-200 via-zinc-100 to-white',
    progressBar: 'from-slate-400 to-zinc-500',
    notes: sqlNotes,
  },
  {
    id: 'cpp',
    name: 'C++',
    emoji: '🚀',
    description: 'C++ programming language — Standard Template Library (STL), memory allocation, OOPs concepts, pointers, and code snippets.',
    color: 'from-blue-200 via-indigo-100 to-white',
    progressBar: 'from-blue-500 to-indigo-600',
    notes: cppNotes,
  },
  {
    id: 'mysql',
    name: 'MySQL',
    emoji: '🐬',
    description: 'MySQL Relational Database System — transactions, ACID properties, normalization, indexing, and syntax queries.',
    color: 'from-sky-200 via-blue-100 to-white',
    progressBar: 'from-sky-500 to-blue-600',
    notes: mysqlNotes,
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    emoji: '🍃',
    description: 'MongoDB NoSQL Database — document model, collections, indexing, aggregation pipeline, and CRUD methods.',
    color: 'from-emerald-200 via-teal-100 to-white',
    progressBar: 'from-emerald-500 to-teal-600',
    notes: mongodbNotes,
  },
  {
    id: 'php',
    name: 'PHP',
    emoji: '🐘',
    description: 'PHP Hypertext Preprocessor — web server structure, dynamic page delivery, sessions/cookies, and forms processing.',
    color: 'from-purple-200 via-violet-100 to-white',
    progressBar: 'from-purple-400 to-violet-500',
    notes: phpNotes,
  },
  {
    id: 'csharp',
    name: 'C#',
    emoji: '🔮',
    description: 'C# programming language — .NET compilation stack, CLR lifecycle, LINQ, collections, and generic syntax.',
    color: 'from-violet-200 via-fuchsia-100 to-white',
    progressBar: 'from-violet-500 to-fuchsia-600',
    notes: csharpNotes,
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
