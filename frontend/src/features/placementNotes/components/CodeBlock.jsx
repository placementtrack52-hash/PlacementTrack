import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

const CodeBlock = ({ title, language, code, output }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <div className="overflow-hidden rounded-[1.25rem] border border-black/10 dark:border-white/10">
      <div className="flex items-center justify-between border-b border-black/10 bg-sand px-4 py-2 dark:border-white/10 dark:bg-zinc-950">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate dark:text-white/60">
          {title || language}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-slate hover:bg-white/80 dark:text-white/60 dark:hover:bg-zinc-800"
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className="overflow-x-auto bg-zinc-900 p-4 text-sm leading-relaxed text-emerald-300/90 dark:bg-black">
        <code>{code}</code>
      </pre>
      {output ? (
        <div className="border-t border-black/10 bg-[#f8fafc] px-4 py-3 dark:border-white/10 dark:bg-zinc-950">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate dark:text-white/50">
            Output
          </p>
          <pre className="text-sm text-ink dark:text-sky-300">{output}</pre>
        </div>
      ) : null}
    </div>
  )
}

export default CodeBlock
