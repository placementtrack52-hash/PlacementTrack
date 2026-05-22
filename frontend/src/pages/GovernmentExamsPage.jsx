import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import governmentExams from '../data/governmentExams.json'

const GovernmentExamsPage = () => {
  return (
    <PageShell
      title="Government Exams"
      subtitle="Comprehensive preparation for India's most prestigious government recruitment exams"
      actions={
        <Link
          to="/subjects"
          className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm transition hover:bg-slate-50 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
        >
          ← Back to Subjects
        </Link>
      }
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {governmentExams.map((exam) => (
          <Link
            key={exam.id}
            to={`/subjects/government-exams/${exam.id}`}
            className={`group rounded-[1.75rem] bg-gradient-to-br ${exam.color} p-6 shadow-soft transition-all hover:translate-y-[-2px] hover:shadow-lg dark:!bg-gradient-to-br dark:!from-zinc-800 dark:!to-zinc-800 dark:!via-zinc-900`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-slate dark:text-white/70">
                  {exam.icon}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold text-ink dark:text-white">
                  {exam.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate dark:text-white/70">
                  {exam.subtitle}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate dark:text-white/70">
                  {exam.description}
                </p>
              </div>
              <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-moss dark:bg-zinc-700 dark:text-emerald-300 whitespace-nowrap">
                Prepare
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2 text-xs">
              <div className="rounded-lg bg-white/50 p-2 dark:bg-zinc-800/50">
                <div className="font-semibold text-slate dark:text-white/70">
                  {((exam.sections.quiz && exam.sections.quiz.totalQuizzes) || (exam.sections.mcqs && exam.sections.mcqs.totalQuizzes) || 0)}
                </div>
                <div className="text-slate dark:text-white/60">Quizzes</div>
              </div>
              <div className="rounded-lg bg-white/50 p-2 dark:bg-zinc-800/50">
                <div className="font-semibold text-slate dark:text-white/70">
                  {exam.sections.mockTests.total}
                </div>
                <div className="text-slate dark:text-white/60">Mock Tests</div>
              </div>
            </div>

            <span className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition group-hover:translate-y-[-1px] dark:bg-white dark:text-black">
              Start Preparation →
            </span>
          </Link>
        ))}
      </div>
    </PageShell>
  )
}

export default GovernmentExamsPage
