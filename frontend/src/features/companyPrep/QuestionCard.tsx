import type { Question } from './companyData'

interface QuestionCardProps {
  companyName: string
  sectionLabel: string
  topicLabel?: string
  currentQuestionNumber: number
  completedQuestions: number
  totalQuestions: number
  score: number
  question: Question
  selectedAnswer?: string
  isRevealed: boolean
  onSelectAnswer: (answer: string) => void
  onRevealAnswer: () => void
  onNextQuestion: () => void
  isLastQuestion: boolean
  isSectionComplete: boolean
}

const QuestionCard = ({
  companyName,
  sectionLabel,
  topicLabel,
  currentQuestionNumber,
  completedQuestions,
  totalQuestions,
  score,
  question,
  selectedAnswer,
  isRevealed,
  onSelectAnswer,
  onRevealAnswer,
  onNextQuestion,
  isLastQuestion,
  isSectionComplete,
}: QuestionCardProps) => {
  const progressPercent = Math.round((completedQuestions / totalQuestions) * 100)

  return (
    <div className="rounded-[2.15rem] border border-white/70 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.98),_rgba(241,245,249,0.94)_52%,_rgba(229,236,245,0.92))] p-6 shadow-[0_24px_70px_rgba(148,163,184,0.22)] dark:border-white/10 dark:bg-gradient-to-br dark:from-zinc-900 dark:via-black dark:to-zinc-900 dark:text-white sm:p-7">
      <div className="flex flex-col gap-5 pb-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.45em] text-slate-500 dark:text-emerald-400">
              {companyName}
            </p>
            <h3 className="mt-5 font-display text-[2.3rem] font-bold leading-none text-[#1e293b] dark:text-white">
              {sectionLabel}
            </h3>
            {topicLabel ? (
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#0f766e] dark:text-emerald-400">
                {topicLabel}
              </p>
            ) : null}
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 dark:text-white/70">
              Question {currentQuestionNumber} of {totalQuestions}
            </p>
          </div>
          <div className="rounded-full bg-white/90 px-5 py-4 text-right shadow-[0_12px_30px_rgba(255,255,255,0.6)] dark:bg-white/10 dark:text-white dark:shadow-none">
            <p className="text-2xl font-bold leading-none text-[#0f766e] dark:text-emerald-400">
              {score}/{totalQuestions}
            </p>
            <p className="mt-1 text-sm font-semibold leading-none text-[#0f766e] dark:text-emerald-400">
              done
            </p>
          </div>
        </div>
        <div>
          <div className="mb-3 flex items-center justify-between text-[1rem] text-slate-600 dark:text-white">
            <span>Progress</span>
            <span>{completedQuestions}/{totalQuestions} completed</span>
          </div>
          <div className="h-3.5 overflow-hidden rounded-full bg-[#ddd4c8] dark:bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-500 transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      <div key={question.questionId} className="question-card-enter pt-6">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-slate-600 shadow-[0_10px_24px_rgba(255,255,255,0.55)] dark:bg-white/10 dark:text-emerald-400 dark:shadow-none">
            {question.questionId}
          </span>
          {isSectionComplete ? (
            <span className="rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
              Section complete
            </span>
          ) : null}
        </div>

        <p className="text-xl font-semibold leading-9 text-[#1e293b] dark:text-white">
          {question.question}
        </p>

        <div className="mt-6 grid gap-3">
          {question.options.map((option) => {
            const isSelected = selectedAnswer === option
            const isCorrect = question.correctAnswer === option

            let optionClasses =
              'border-white/70 bg-white/85 text-slate-700 shadow-[0_16px_40px_rgba(148,163,184,0.12)] hover:border-[#d9a24d] hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:border-emerald-500 dark:hover:bg-white/20'

            if (!isRevealed && isSelected) {
              optionClasses =
                'border-[#d9a24d] bg-[#fff4ea] text-[#9a4f1e] shadow-[0_16px_40px_rgba(242,139,85,0.18)] dark:border-emerald-500/50 dark:bg-emerald-500/10 dark:text-white'
            }

            if (isRevealed && isCorrect) {
              optionClasses =
                'border-emerald-300 bg-emerald-50 text-emerald-900 shadow-[0_16px_40px_rgba(16,185,129,0.15)] dark:border-emerald-500 dark:bg-emerald-500/20 dark:text-emerald-300'
            }

            if (isRevealed && isSelected && !isCorrect) {
              optionClasses =
                'border-rose-300 bg-rose-50 text-rose-900 shadow-[0_16px_40px_rgba(244,63,94,0.14)] dark:border-rose-500 dark:bg-rose-500/20 dark:text-rose-300'
            }

            return (
              <button
                key={option}
                type="button"
                onClick={() => onSelectAnswer(option)}
                disabled={isRevealed}
                className={`rounded-[1.5rem] border p-4 text-left text-sm font-medium transition ${optionClasses}`}
              >
                {option}
              </button>
            )
          })}
        </div>

        {isRevealed ? (
          <div className="mt-6 rounded-[1.75rem] bg-white/70 p-5 shadow-[0_16px_40px_rgba(148,163,184,0.12)] dark:bg-white/10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-emerald-400">
              {selectedAnswer === question.correctAnswer ? 'Correct answer' : 'Review the solution'}
            </p>
            <p className="mt-4 whitespace-pre-line text-base leading-8 text-slate-700 dark:text-white">
              {question.explanation}
            </p>
          </div>
        ) : null}

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={onRevealAnswer}
            disabled={!selectedAnswer || isRevealed}
            className="rounded-full bg-emerald-500 px-7 py-4 text-base font-semibold text-white transition hover:scale-105 hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-emerald-500 dark:text-white dark:hover:bg-emerald-400"
          >
            Show Answer
          </button>
          <button
            type="button"
            onClick={onNextQuestion}
            disabled={!isRevealed}
            className="rounded-full bg-[#e7eef5] px-7 py-4 text-base font-semibold text-[#223044] transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
          >
            {isLastQuestion ? 'View Score' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard
