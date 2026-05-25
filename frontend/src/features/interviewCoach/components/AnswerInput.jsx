const formatElapsed = (seconds) => {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

const AnswerInput = ({
  answer,
  onChange,
  onFirstKeypress,
  disabled,
  answerTimer,
  accentColor,
}) => {
  const charCount = answer.length

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <label className="text-sm font-semibold text-slate-800 dark:text-white">Your answer</label>
        <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
          <span
            className="rounded-full border px-2.5 py-1 font-mono font-medium"
            style={{ borderColor: accentColor, color: accentColor }}
          >
            {formatElapsed(answerTimer)}
          </span>
          <span>{charCount} characters</span>
        </div>
      </div>
      <textarea
        value={answer}
        onChange={(e) => {
          if (!disabled && answer.length === 0 && e.target.value.length > 0) {
            onFirstKeypress()
          }
          onChange(e.target.value)
        }}
        disabled={disabled}
        rows={6}
        placeholder="Type your interview answer here. Use complete sentences and include technical keywords where relevant."
        className="w-full resize-y rounded-xl border border-gray-200 bg-slate-50/80 px-4 py-3 text-sm leading-relaxed text-slate-800 outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-slate-200/80 disabled:opacity-60 dark:border-zinc-600 dark:bg-zinc-950 dark:text-white dark:focus:ring-zinc-700"
        style={{ boxShadow: `0 0 0 0 transparent` }}
      />
      <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
        Timer starts on your first keystroke. Aim for 60–120 seconds of clear, structured speech.
      </p>
    </div>
  )
}

export default AnswerInput
