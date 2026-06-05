import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import { selectOverallCompanyPrepProgress } from '../features/companyPrep/companyPrepSlice'
import subjects from '../data/subjects.json'
import projects from '../data/projects.json'
import pyqCompanies from '../data/companyPYQIndex.json'
import PageShell from '../components/PageShell'
import SubjectCard from '../components/SubjectCard'
import { useProgress } from '../context/ProgressContext'
import { codeApi } from '../services/api'
import { usePlacementNotesProgress } from '../features/placementNotes/hooks/usePlacementNotesProgress'
import { useInterviewCoachStats } from '../features/interviewCoach/hooks/useInterviewCoachStats'

const SubjectsPage = () => {
  const { progress, subjectCompletion, subjectQuizProgress } = useProgress()
  const companyPrepProgress = useAppSelector(selectOverallCompanyPrepProgress)
  const { completedCount: notesCompleted, totalTopics: notesTotal, progressPercent: notesProgress } =
    usePlacementNotesProgress()
  const {
    totalQuestions: coachQuestions,
    completedSessions: coachSessions,
    progressPercent: coachProgress,
    subjectCount: coachSubjectCount,
  } = useInterviewCoachStats()
  const [codeStats, setCodeStats] = useState({ total: 0, loading: true })

  useEffect(() => {
    const fetchCodeStats = async () => {
      try {
        const data = await codeApi.getCategories()
        const total = data.categories.reduce((sum, cat) => sum + cat.count, 0)
        setCodeStats({ total, loading: false })
      } catch {
        setCodeStats({ total: 0, loading: false })
      }
    }
    fetchCodeStats()
  }, [])

  const completedCodeCount = Object.keys(progress?.completedTopics || {}).filter(
    (k) => k.startsWith('code_') && progress.completedTopics[k]
  ).length

  const codeProgressPercent = codeStats.total > 0
    ? Math.round((completedCodeCount / codeStats.total) * 100)
    : 0

  const completedProjectsCount = Object.keys(progress?.completedProjects || {}).filter(
    (k) => progress.completedProjects[k]
  ).length
  const projectsProgressPercent = Math.round((completedProjectsCount / projects.length) * 100) || 0

  const totalPYQs = pyqCompanies.reduce((sum, c) => sum + c.pdfs.length, 0)
  const completedPYQsCount = Object.keys(progress?.completedPYQs || {}).filter(
    (k) => progress.completedPYQs[k]
  ).length
  const pyqProgressPercent = Math.round((completedPYQsCount / totalPYQs) * 100) || 0

  return (
    <PageShell
      title="Subjects"
      subtitle="Pick a lane for today. Each subject includes topics, notes, quizzes, and a final mixed test."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {subjects.map((subject) => {
          const summary = subjectQuizProgress[subject.id]
          const completion = subjectCompletion[subject.id]
          const isInterviewSubject = subject.id === 'interview-question'

          return (
            <SubjectCard
              key={subject.id}
              subject={subject}
              progressPercent={
                isInterviewSubject
                  ? Math.round(
                      ((completion?.completedCount ?? 0) / Math.max(completion?.totalTopics ?? 1, 1)) *
                        100,
                    )
                  : summary?.progressPercent ?? 0
              }
              completedCount={
                isInterviewSubject
                  ? completion?.completedCount ?? 0
                  : summary?.completedLevels ?? 0
              }
              totalCount={
                isInterviewSubject
                  ? completion?.totalTopics ?? subject.topics.length
                  : summary?.totalLevels ?? 0
              }
              progressLabel={isInterviewSubject ? 'topics' : 'levels'}
            />
          )
        })}

        <Link
          to="/company-prep"
          className="rounded-[1.75rem] bg-gradient-to-br from-sky-200 via-cyan-100 to-white p-6 shadow-soft dark:!bg-gradient-to-br dark:!from-zinc-800 dark:!via-zinc-900 dark:!to-zinc-800"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate dark:text-white/70">Company</p>
              <h3 className="mt-3 font-display text-2xl font-bold text-ink dark:text-white">Company Wise Preparation</h3>
              <p className="mt-2 text-sm leading-6 text-slate dark:text-white/70">
                Train for TCS, Wipro, Accenture, and Amazon with section-wise practice and score tracking.
              </p>
            </div>
            <span className="rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-moss dark:bg-zinc-700 dark:text-emerald-300">
              4 companies
            </span>
          </div>
          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between text-sm text-slate dark:text-white/70">
              <span>Sections</span>
              <span>{companyPrepProgress.completedCount}/{companyPrepProgress.totalCount} done</span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-[#e7ddd2] dark:bg-zinc-700">
              <div
                className="h-full rounded-full bg-gradient-to-r from-ember via-sun to-moss transition-all duration-500"
                style={{ width: `${companyPrepProgress.progressPercent}%` }}
              />
            </div>
            <p className="mt-3 text-sm text-slate dark:text-white/70">
              {companyPrepProgress.completedCount}/{companyPrepProgress.totalCount} sections completed
            </p>
          </div>
          <span className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] dark:bg-white dark:text-black">
            Open subject
          </span>
        </Link>

        <Link
          to="/subjects/code"
          className="rounded-[1.75rem] bg-gradient-to-br from-indigo-200 via-blue-100 to-white p-6 shadow-soft dark:!bg-gradient-to-br dark:!from-zinc-800 dark:!via-zinc-900 dark:!to-zinc-800"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate dark:text-white/70">💻</p>
              <h3 className="mt-3 font-display text-2xl font-bold text-ink dark:text-white">Code Learning</h3>
              <p className="mt-2 text-sm leading-6 text-slate dark:text-white/70">
                Read coding problems with step-by-step explanations and ready-made solutions in Java, Python, C, and C++.
              </p>
            </div>
            <span className="rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-moss dark:bg-zinc-700 dark:text-emerald-300">
              {codeStats.loading ? 'Loading...' : `${codeStats.total} problems`}
            </span>
          </div>
          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between text-sm text-slate dark:text-white/70">
              <span>Progress</span>
              <span>{completedCodeCount}/{codeStats.total} done</span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-[#e7ddd2] dark:bg-zinc-700">
              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-blue-500 transition-all duration-500"
                style={{ width: `${codeProgressPercent}%` }}
              />
            </div>
            <p className="mt-3 text-sm text-slate dark:text-white/70">
              {completedCodeCount}/{codeStats.total} problems completed
            </p>
          </div>
          <span className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] dark:bg-white dark:text-black">
            Explore problems
          </span>
        </Link>

        <Link
          to="/subjects/pyq"
          className="rounded-[1.75rem] bg-gradient-to-br from-amber-200 via-orange-100 to-white p-6 shadow-soft dark:!bg-gradient-to-br dark:!from-zinc-800 dark:!via-zinc-900 dark:!to-zinc-800"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate dark:text-white/70">📄</p>
              <h3 className="mt-3 font-display text-2xl font-bold text-ink dark:text-white">Company PYQ</h3>
              <p className="mt-2 text-sm leading-6 text-slate dark:text-white/70">
                Previous Year Questions from 20+ companies — TCS, Wipro, Infosys, Amazon & more. MCQ practice, no download.
              </p>
            </div>
            <span className="rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-moss dark:bg-zinc-700 dark:text-emerald-300">
              MCQ Practice
            </span>
          </div>
          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between text-sm text-slate dark:text-white/70">
              <span>Progress</span>
              <span>{completedPYQsCount}/{totalPYQs} done</span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-[#e7ddd2] dark:bg-zinc-700">
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-500"
                style={{ width: `${pyqProgressPercent}%` }}
              />
            </div>
            <p className="mt-3 text-sm text-slate dark:text-white/70">
              {completedPYQsCount}/{totalPYQs} PYQs completed
            </p>
          </div>
          <span className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] dark:bg-white dark:text-black">
            Open PYQs
          </span>
        </Link>

        <Link
          to="/subjects/projects"
          className="rounded-[1.75rem] bg-gradient-to-br from-violet-200 via-purple-100 to-white p-6 shadow-soft dark:!bg-gradient-to-br dark:!from-zinc-800 dark:!via-zinc-900 dark:!to-zinc-800"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate dark:text-white/70">🛠️</p>
              <h3 className="mt-3 font-display text-2xl font-bold text-ink dark:text-white">Projects</h3>
              <p className="mt-2 text-sm leading-6 text-slate dark:text-white/70">
                Curated project ideas from Beginner to Advanced. Build real projects and strengthen your portfolio.
              </p>
            </div>
            <span className="rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-moss dark:bg-zinc-700 dark:text-emerald-300">
              {projects.length} projects
            </span>
          </div>
          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between text-sm text-slate dark:text-white/70">
              <span>Progress</span>
              <span>{completedProjectsCount}/{projects.length} done</span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-[#e7ddd2] dark:bg-zinc-700">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-400 to-purple-600 transition-all duration-500"
                style={{ width: `${projectsProgressPercent}%` }}
              />
            </div>
            <p className="mt-3 text-sm text-slate dark:text-white/70">
              {completedProjectsCount}/{projects.length} projects completed
            </p>
          </div>
          <span className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] dark:bg-white dark:text-black">
            Explore Projects
          </span>
        </Link>

        <Link
          to="/subjects/ats-resume-checker"
          className="rounded-[1.75rem] bg-gradient-to-br from-emerald-200 via-teal-100 to-white p-6 shadow-soft dark:!bg-gradient-to-br dark:!from-zinc-800 dark:!via-zinc-900 dark:!to-zinc-800"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate dark:text-white/70">ATS</p>
              <h3 className="mt-3 font-display text-2xl font-bold text-ink dark:text-white">ATS Resume Checker</h3>
              <p className="mt-2 text-sm leading-6 text-slate dark:text-white/70">
                Analyze resume quality, ATS compatibility, keywords, missing sections, and placement readiness.
              </p>
            </div>
            <span className="rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-moss dark:bg-zinc-700 dark:text-emerald-300">
              ATS Score
            </span>
          </div>
          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between text-sm text-slate dark:text-white/70">
              <span>Review Areas</span>
              <span>8 checks</span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-[#e7ddd2] dark:bg-zinc-700">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-teal-500 to-sky-500 transition-all duration-500"
                style={{ width: '82%' }}
              />
            </div>
            <p className="mt-3 text-sm text-slate dark:text-white/70">
              Resume Analyzer • Smart Review • Placement Ready
            </p>
          </div>
          <span className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] dark:bg-white dark:text-black">
            Analyze Resume
          </span>
        </Link>

        <Link
          to="/placement-notes"
          className="rounded-[1.75rem] bg-gradient-to-br from-violet-200 via-fuchsia-100 to-white p-6 shadow-soft dark:!bg-gradient-to-br dark:!from-zinc-800 dark:!via-zinc-900 dark:!to-zinc-800"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate dark:text-white/70">🚀</p>
              <h3 className="mt-3 font-display text-2xl font-bold text-ink dark:text-white">Placement Notes</h3>
              <p className="mt-2 text-sm leading-6 text-slate dark:text-white/70">
                Structured topic-wise learning with progress tracking, examples, quizzes, and interview preparation.
              </p>
            </div>
            <span className="rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-moss dark:bg-zinc-700 dark:text-violet-300">
              {notesTotal} topics
            </span>
          </div>
          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between text-sm text-slate dark:text-white/70">
              <span>Progress</span>
              <span>{notesCompleted}/{notesTotal} done</span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-[#e7ddd2] dark:bg-zinc-700">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-500 transition-all duration-500"
                style={{ width: `${notesProgress}%` }}
              />
            </div>
            <p className="mt-3 text-sm text-slate dark:text-white/70">
              Java, Python, C, C++, Web Dev, SQL, DSA, DBMS, OS & Git
            </p>
          </div>
          <span className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] dark:bg-white dark:text-black">
            Open Notes
          </span>
        </Link>

        <Link
          to="/interview-coach"
          className="rounded-[1.75rem] bg-gradient-to-br from-indigo-200 via-blue-100 to-white p-6 shadow-soft dark:!bg-gradient-to-br dark:!from-zinc-800 dark:!via-zinc-900 dark:!to-zinc-800"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate dark:text-white/70">🎤</p>
              <h3 className="mt-3 font-display text-2xl font-bold text-ink dark:text-white">AI Interview Coach</h3>
              <p className="mt-2 text-sm leading-6 text-slate dark:text-white/70">
                Practice interview answers with keyword, clarity, and depth scoring. Free in your browser — no API.
              </p>
            </div>
            <span className="rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-moss dark:bg-zinc-700 dark:text-indigo-300">
              {coachSubjectCount} subjects
            </span>
          </div>
          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between text-sm text-slate dark:text-white/70">
              <span>Progress</span>
              <span>{coachSessions}/{coachQuestions} sessions</span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-[#e7ddd2] dark:bg-zinc-700">
              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-blue-500 transition-all duration-500"
                style={{ width: `${coachProgress}%` }}
              />
            </div>
            <p className="mt-3 text-sm text-slate dark:text-white/70">
              Aptitude · Verbal · Reasoning · Technical · Interview Qs
            </p>
          </div>
          <span className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] dark:bg-white dark:text-black">
            Open Coach
          </span>
        </Link>
      </div>
    </PageShell>
  )
}

export default SubjectsPage
