import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import { useProgress } from '../context/ProgressContext'

const MistakeNotebookPage = () => {
  const { progress } = useProgress()

  return (
    <PageShell
      title="Mistake notebook"
      subtitle="Every wrong answer gets stored here so revision becomes intentional instead of random."
      actions={<Link to="/dashboard" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink dark:bg-[#172430] dark:text-slate-100">Back to dashboard</Link>}
    >
      <div className="space-y-4">
        {progress.mistakes.length ? (
          progress.mistakes.map((mistake) => (
            <div key={mistake.id} className="rounded-[1.75rem] bg-white p-6 shadow-soft dark:bg-[#172430]">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate dark:text-slate-400">
                <span>{mistake.subjectName}</span>
                <span>{mistake.topicName}</span>
                <span>{mistake.level}</span>
                <span>{mistake.mode} mode</span>
              </div>
              <p className="mt-4 font-semibold text-ink dark:text-white">{mistake.question}</p>
              <p className="mt-3 text-sm text-ember">Your answer: {mistake.selectedAnswer}</p>
              <p className="mt-1 text-sm text-moss">Correct answer: {mistake.correctAnswer}</p>
              <p className="mt-3 text-sm leading-6 text-slate dark:text-slate-300">{mistake.explanation}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#faf6f0] px-3 py-2 text-xs font-semibold text-ink dark:bg-[#111b25] dark:text-slate-100">Weakness: {mistake.weaknessLabel}</span>
                <span className="rounded-full bg-[#edf4ff] px-3 py-2 text-xs font-semibold text-ink dark:bg-[#142133] dark:text-slate-100">{mistake.timeTakenSeconds}s spent</span>
                <Link to={`/subjects/${mistake.subjectId}/topics/${mistake.topicKey.split(':')[1]}`} className="text-sm font-semibold text-moss dark:text-emerald-300">Review related notes</Link>
              </div>
            </div>
          ))
        ) : (
          <div className="rounded-[1.75rem] bg-white p-6 text-sm text-slate shadow-soft dark:bg-[#172430] dark:text-slate-300">
            No mistakes saved yet. Once you miss a few quiz questions, they will show up here with explanations and revision links.
          </div>
        )}
      </div>
    </PageShell>
  )
}

export default MistakeNotebookPage
