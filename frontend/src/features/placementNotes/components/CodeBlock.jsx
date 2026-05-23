import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { highlightCode } from '../utils/highlightCode'

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
    <div className="my-6">
      {title ? (
        <h3 className="mb-3 text-lg font-bold text-slate-800 dark:text-white">{title}</h3>
      ) : null}
      <div className="overflow-hidden rounded-md border border-[#d4e8d4] bg-[#eef5ee] dark:border-emerald-900/40 dark:bg-emerald-950/20">
        <div className="flex items-center justify-between border-b border-[#d4e8d4] bg-[#e4efe4] px-3 py-2 dark:border-emerald-900/40 dark:bg-emerald-950/30">
          <span className="text-xs font-medium text-slate-600 dark:text-emerald-200/80">
            {language || 'code'}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
        <pre className="overflow-x-auto border-t border-[#d4e8d4] bg-white p-4 font-mono text-[13px] leading-6 dark:border-emerald-900/30 dark:bg-zinc-950">
          <code dangerouslySetInnerHTML={{ __html: highlightCode(code, language) }} />
        </pre>
        {output ? (
          <div className="border-t border-[#d4e8d4] bg-[#f8faf8] px-4 py-3 dark:border-emerald-900/30 dark:bg-zinc-900">
            <p className="mb-1 text-xs font-semibold text-slate-500 dark:text-slate-400">Output</p>
            <pre className="font-mono text-sm text-slate-800 dark:text-emerald-300">{output}</pre>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default CodeBlock
