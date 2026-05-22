import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronDown, ChevronUp } from 'lucide-react'
import PageShell from '../components/PageShell'
import currentAffairs from '../data/currentAffairs.json'

const CurrentAffairsCategoryPage = () => {
  const { categoryId } = useParams()
  const category = currentAffairs.find((c) => c.id === categoryId)
  const [expandedHeadline, setExpandedHeadline] = useState(null)
  const [selectedAnswers, setSelectedAnswers] = useState({})

  if (!category) {
    return (
      <PageShell title="Current Affairs">
        <div className="rounded-2xl bg-red-50 p-12 text-center text-red-600 dark:bg-red-900/20 dark:text-red-400">
          <p className="text-lg font-medium">Category not found</p>
        </div>
      </PageShell>
    )
  }

  const handleAnswerSelect = (questionId, optionIndex) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }))
  }

  const isAnswerCorrect = (questionId, optionIndex) => {
    const question = category.mcqs.find((q) => q.id === questionId)
    return question && question.answer === optionIndex
  }

  return (
    <PageShell
      title={category.name}
      subtitle={category.description}
      actions={
        <Link
          to="/subjects/current-affairs"
          className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm transition hover:bg-slate-50 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
        >
          ← Back to Current Affairs
        </Link>
      }
    >
      <div className="max-w-4xl space-y-8">
        {/* Headlines Section */}
        <section className="space-y-4">
          <div className="mb-6 border-b border-slate-200 dark:border-zinc-700 pb-4">
            <h2 className="text-2xl font-bold text-ink dark:text-white">📰 Top Headlines</h2>
          </div>
          {category.headlines.map((headline) => (
            <div
              key={headline.id}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-soft dark:border-zinc-700 dark:bg-zinc-900"
            >
              <button
                onClick={() =>
                  setExpandedHeadline(expandedHeadline === headline.id ? null : headline.id)
                }
                className="flex w-full items-start justify-between gap-4 text-left transition hover:text-blue-600 dark:hover:text-blue-400"
              >
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-ink dark:text-white">
                    {headline.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate dark:text-white/70">{headline.date}</p>
                  <p className="mt-2 text-sm leading-6 text-slate dark:text-white/70">
                    {headline.summary}
                  </p>
                </div>
                {expandedHeadline === headline.id ? (
                  <ChevronUp className="h-5 w-5 shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 shrink-0" />
                )}
              </button>

              {expandedHeadline === headline.id && (
                <div className="mt-4 border-t border-slate-200 pt-4 dark:border-zinc-700">
                  <p className="text-sm leading-6 text-slate dark:text-white/70">{headline.content}</p>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Quick Facts Section */}
        <section className="space-y-4">
          <div className="mb-6 border-b border-slate-200 dark:border-zinc-700 pb-4">
            <h2 className="text-2xl font-bold text-ink dark:text-white">⚡ Quick Facts</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {category.quickFacts.map((fact, idx) => (
              <div
                key={idx}
                className="rounded-lg bg-gradient-to-br from-emerald-50 to-teal-50 p-4 dark:from-emerald-900/20 dark:to-teal-900/20"
              >
                <p className="text-sm leading-6 text-slate dark:text-white/80">✓ {fact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MCQ Practice Section */}
        <section className="space-y-4">
          <div className="mb-6 border-b border-slate-200 dark:border-zinc-700 pb-4">
            <h2 className="text-2xl font-bold text-ink dark:text-white">📝 MCQ Practice</h2>
          </div>
          {category.mcqs.map((question, idx) => (
            <div
              key={question.id}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-soft dark:border-zinc-700 dark:bg-zinc-900"
            >
              <div className="mb-4">
                <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                  Question {idx + 1}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-ink dark:text-white">
                  {question.question}
                </h3>
              </div>

              <div className="space-y-2">
                {question.options.map((option, optionIdx) => {
                  const isSelected = selectedAnswers[question.id] === optionIdx
                  const isCorrect = isAnswerCorrect(question.id, optionIdx)
                  const isWrong = isSelected && !isCorrect
                  const showCorrect = selectedAnswers[question.id] !== undefined && isCorrect

                  return (
                    <button
                      key={optionIdx}
                      onClick={() => handleAnswerSelect(question.id, optionIdx)}
                      className={`w-full rounded-lg border-2 p-3 text-left transition ${
                        isSelected
                          ? isCorrect
                            ? 'border-emerald-500 bg-emerald-50 dark:border-emerald-400 dark:bg-emerald-900/20'
                            : 'border-red-500 bg-red-50 dark:border-red-400 dark:bg-red-900/20'
                          : showCorrect
                          ? 'border-emerald-500 bg-emerald-50 dark:border-emerald-400 dark:bg-emerald-900/20'
                          : 'border-slate-200 bg-white hover:border-slate-300 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-zinc-600'
                      }`}
                    >
                      <span className="text-sm font-medium">
                        {String.fromCharCode(65 + optionIdx)}.{' '}
                        <span className={isWrong ? 'text-red-600 dark:text-red-400' : 'text-ink dark:text-white'}>
                          {option}
                        </span>
                      </span>
                    </button>
                  )
                })}
              </div>

              {selectedAnswers[question.id] !== undefined && (
                <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                  <p className="text-sm font-semibold text-blue-900 dark:text-blue-300">
                    {isAnswerCorrect(question.id, selectedAnswers[question.id]) ? '✓ Correct!' : '✗ Incorrect'}
                  </p>
                  <p className="mt-1 text-sm text-blue-700 dark:text-blue-400">{question.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
    </PageShell>
  )
}

export default CurrentAffairsCategoryPage
