const QuestionCard = ({
  question,
  index,
  selectedAnswer,
  onSelect,
  submitted,
}) => {
  const isCorrect = selectedAnswer === question.correct

  return (
    <article className="rounded-[1.5rem] border border-slate-200 bg-white/95 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm dark:border-white/10 dark:bg-zinc-800">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.26em] text-sky-600 dark:text-sky-300">Question {index + 1}</p>
          <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{question.question}</h3>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {question.options.map((option, optionIndex) => {
          const showCorrect = submitted && optionIndex === question.correct
          const showWrong = submitted && selectedAnswer === optionIndex && optionIndex !== question.correct

          return (
            <label
              key={option}
              className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-sm transition ${
                showCorrect
                  ? 'border-emerald-300 bg-emerald-50 dark:border-emerald-400 dark:bg-emerald-500/20'
                  : showWrong
                    ? 'border-rose-300 bg-rose-50 dark:border-rose-400 dark:bg-rose-500/20'
                    : selectedAnswer === optionIndex
                      ? 'border-sky-300 bg-sky-50 dark:border-sky-400 dark:bg-sky-500/20'
                      : 'border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-white dark:border-white/10 dark:bg-zinc-700 dark:hover:bg-zinc-600'
              } ${submitted ? 'cursor-default' : ''}`}
            >
              <input
                type="radio"
                checked={selectedAnswer === optionIndex}
                onChange={() => onSelect(optionIndex)}
                disabled={submitted}
                className="h-4 w-4 border-slate-300 bg-transparent text-sky-600 focus:ring-sky-500 dark:border-white/30 dark:text-sky-400"
              />
              <span className="text-slate-700 dark:text-white">{option}</span>
            </label>
          )
        })}
      </div>

      {submitted ? (
        <div
          className={`mt-4 rounded-2xl border px-4 py-4 text-sm leading-6 ${
            isCorrect
              ? 'border-emerald-200 bg-emerald-50 text-emerald-950 dark:border-emerald-400/30 dark:bg-emerald-500/20 dark:text-emerald-200'
              : 'border-rose-200 bg-rose-50 text-rose-950 dark:border-rose-400/30 dark:bg-rose-500/20 dark:text-rose-200'
          }`}
        >
          <p className="font-semibold">
            {isCorrect ? 'Correct answer' : `Correct answer: ${question.options[question.correct]}`}
          </p>
          <p className="mt-1">{question.explanation}</p>
        </div>
      ) : null}
    </article>
  )
}

export default QuestionCard
