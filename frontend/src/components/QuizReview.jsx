const QuizReview = ({ questions, answers }) => (
  <div className="space-y-4">
    {questions.map((question, index) => {
      const selected = answers[index]
      const isCorrect = selected === question.answer

      return (
        <div key={question.id} className="rounded-[1.5rem] border border-black/5 bg-white p-5 dark:border-white/10 dark:bg-[#111b25]">
          <p className="font-semibold text-ink dark:text-white">
            {index + 1}. {question.question}
          </p>
          <p className={`mt-3 text-sm font-medium ${isCorrect ? 'text-moss' : 'text-ember'}`}>
            Your answer: {selected !== undefined ? question.options[selected] : 'Not answered'}
          </p>
          <p className="mt-1 text-sm text-moss">Correct answer: {question.options[question.answer]}</p>
          <p className="mt-3 text-sm leading-6 text-slate dark:text-slate-300">{question.explanation}</p>
        </div>
      )
    })}
  </div>
)

export default QuizReview
