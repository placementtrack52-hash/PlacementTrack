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
    <div className="overflow-hidden rounded-xl border border-white/10 bg-zinc-950/80 shadow-lg">
      <div className="flex items-center justify-between border-b border-white/10 bg-zinc-900/90 px-4 py-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
          {title || language}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-zinc-400 transition hover:bg-white/10 hover:text-white"
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-emerald-300/90">
        <code>{code}</code>
      </pre>
      {output ? (
        <div className="border-t border-white/10 bg-black/40 px-4 py-3">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-zinc-500">Output</p>
          <pre className="text-sm text-sky-300">{output}</pre>
        </div>
      ) : null}
    </div>
  )
}

export default CodeBlock
