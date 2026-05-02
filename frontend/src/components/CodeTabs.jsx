import { useState } from 'react'

const languages = [
  { key: 'java', label: 'Java' },
  { key: 'python', label: 'Python' },
  { key: 'c', label: 'C' },
  { key: 'cpp', label: 'C++' },
]

const CodeTabs = ({ code }) => {
  const [activeTab, setActiveTab] = useState('java')
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code[activeTab] || '')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard may not be available */
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/60 dark:border-zinc-700">
      {/* Tab bar */}
      <div className="flex items-center justify-between border-b border-slate-200/60 bg-slate-50 px-2 dark:border-zinc-700 dark:bg-zinc-800/80">
        <div className="flex gap-1 overflow-x-auto py-2 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
          {languages.map((lang) => (
            <button
              key={lang.key}
              type="button"
              onClick={() => setActiveTab(lang.key)}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                activeTab === lang.key
                  ? 'bg-gradient-to-r from-emerald-500 to-green-400 text-white shadow-sm dark:from-emerald-500 dark:to-lime-400 dark:text-black'
                  : 'text-slate-500 hover:bg-slate-200/60 hover:text-slate-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className={`mr-2 flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
            copied
              ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300'
              : 'bg-white text-slate-600 shadow-sm hover:bg-slate-100 dark:bg-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-600'
          }`}
        >
          {copied ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
              </svg>
              Copy Code
            </>
          )}
        </button>
      </div>

      {/* Code block */}
      <div className="bg-[#0d1117] p-5">
        <pre className="overflow-x-auto text-sm leading-6 text-white">
          <code>{code[activeTab] || '// No solution available'}</code>
        </pre>
      </div>
    </div>
  )
}

export default CodeTabs
