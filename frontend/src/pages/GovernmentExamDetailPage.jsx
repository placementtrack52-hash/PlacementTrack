import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PageShell from '../components/PageShell'
import governmentExams from '../data/governmentExams.json'

const GovernmentExamDetailPage = () => {
  const { examId } = useParams()
  const exam = governmentExams.find((e) => e.id === examId)
  const [activeTab, setActiveTab] = useState('syllabus')

  if (!exam) {
    return (
      <PageShell title="Government Exam">
        <div className="rounded-2xl bg-red-50 p-12 text-center text-red-600 dark:bg-red-900/20 dark:text-red-400">
          <p className="text-lg font-medium">Exam not found</p>
        </div>
      </PageShell>
    )
  }

  const tabs = [
    { id: 'syllabus', label: '📚 Syllabus', icon: 'Syllabus' },
    { id: 'pyq', label: '📄 PYQ', icon: 'Previous Years' },
    { id: 'quiz', label: '📝 Quiz', icon: 'Quizzes' },
    { id: 'notes', label: '✍️ Notes', icon: 'Study Notes' },
    { id: 'roadmap', label: '🗺️ Roadmap', icon: 'Preparation Plan' },
    { id: 'mockTests', label: '🎯 Mock Tests', icon: 'Mock Exams' },
  ]

  return (
    <PageShell
      title={`${exam.name} Exam`}
      subtitle={exam.description}
      actions={
        <Link
          to="/subjects/government-exams"
          className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm transition hover:bg-slate-50 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
        >
          ← Back to Exams
        </Link>
      }
    >
      <div className="max-w-5xl space-y-8">
        {/* Overview */}
        <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 dark:border-zinc-700 dark:from-blue-900/20 dark:to-indigo-900/20">
          <h2 className="font-display text-xl font-bold text-ink dark:text-white">Exam Overview</h2>
          <p className="mt-2 text-sm leading-6 text-slate dark:text-white/80">{exam.syllabusOverview}</p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 dark:border-zinc-700">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-t-lg px-4 py-3 text-sm font-medium transition ${
                activeTab === tab.id
                  ? 'border-b-2 border-blue-600 bg-blue-50 text-blue-600 dark:border-blue-400 dark:bg-blue-900/30 dark:text-blue-400'
                  : 'text-slate hover:text-ink dark:text-white/60 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-96 space-y-6">
          {activeTab === 'syllabus' && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-ink dark:text-white">Examination Structure</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {exam.sections.syllabus.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-slate-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-900"
                  >
                    <h4 className="font-semibold text-ink dark:text-white">{item.title}</h4>
                    <p className="mt-2 text-sm text-slate dark:text-white/70">{item.details}</p>
                    <div className="mt-3 space-y-1 text-xs text-slate dark:text-white/60">
                      <p>⏱️ Duration: {item.duration}</p>
                      <p>⭐ Marks: {item.marks}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'pyq' && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-ink dark:text-white">Previous Years Questions</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-gradient-to-br from-emerald-50 to-teal-50 p-6 dark:from-emerald-900/20 dark:to-teal-900/20">
                  <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                    {exam.sections.pyq.totalQuestions}
                  </div>
                  <p className="mt-1 text-sm text-slate dark:text-white/70">Total Questions</p>
                </div>
                <div className="rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-6 dark:from-blue-900/20 dark:to-indigo-900/20">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {exam.sections.pyq.years}
                  </div>
                  <p className="mt-1 text-sm text-slate dark:text-white/70">Years Covered</p>
                </div>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-900">
                <h4 className="font-semibold text-ink dark:text-white">Available Formats</h4>
                <ul className="mt-3 space-y-2 text-sm text-slate dark:text-white/70">
                  {exam.sections.pyq.formats.map((format, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                      {format}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'quiz' && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-ink dark:text-white">Quiz Practice</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-gradient-to-br from-orange-50 to-amber-50 p-6 dark:from-orange-900/20 dark:to-amber-900/20">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                    {exam.sections.quiz.totalQuizzes}
                  </div>
                  <p className="mt-1 text-sm text-slate dark:text-white/70">Total Quizzes</p>
                </div>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-900">
                <h4 className="font-semibold text-ink dark:text-white">Quiz Types</h4>
                <ul className="mt-3 space-y-2 text-sm text-slate dark:text-white/70">
                  {exam.sections.quiz.types.map((type, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'notes' && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-ink dark:text-white">Study Notes</h3>
              <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-900">
                <h4 className="font-semibold text-ink dark:text-white">Covered Subjects</h4>
                <ul className="mt-3 space-y-2 text-sm text-slate dark:text-white/70">
                  {exam.sections.notes.subjects.map((subject, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 p-6 dark:from-purple-900/20 dark:to-pink-900/20">
                <p className="text-sm font-medium text-purple-900 dark:text-purple-300">
                  📌 Format: {exam.sections.notes.format}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'roadmap' && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-ink dark:text-white">Preparation Roadmap</h3>
              <div className="rounded-lg bg-gradient-to-r from-slate-50 to-zinc-50 p-6 dark:from-slate-900/20 dark:to-zinc-900/20">
                <p className="font-semibold text-ink dark:text-white">Total Duration: {exam.sections.roadmap.duration}</p>
              </div>
              <div className="space-y-3">
                {exam.sections.roadmap.phases.map((phase, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 rounded-lg border border-slate-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-900"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600 dark:bg-blue-900/40 dark:text-blue-400">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-ink dark:text-white">{phase}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'mockTests' && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-ink dark:text-white">Mock Tests</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-gradient-to-br from-rose-50 to-red-50 p-6 dark:from-rose-900/20 dark:to-red-900/20">
                  <div className="text-3xl font-bold text-rose-600 dark:text-rose-400">
                    {exam.sections.mockTests.total}
                  </div>
                  <p className="mt-1 text-sm text-slate dark:text-white/70">Total Mock Tests</p>
                </div>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-900">
                <h4 className="font-semibold text-ink dark:text-white">Mock Test Types</h4>
                <ul className="mt-3 space-y-2 text-sm text-slate dark:text-white/70">
                  {exam.sections.mockTests.types.map((type, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-rose-500"></span>
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <div className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center dark:from-blue-700 dark:to-indigo-700">
          <h3 className="font-display text-2xl font-bold text-white">Ready to Prepare?</h3>
          <p className="mt-2 text-white/90">Start your comprehensive preparation for {exam.name} exam today</p>
          <button className="mt-4 inline-flex rounded-full bg-white px-8 py-3 font-semibold text-blue-600 transition hover:bg-slate-100 dark:hover:bg-slate-900">
            Begin Preparation →
          </button>
        </div>
      </div>
    </PageShell>
  )
}

export default GovernmentExamDetailPage
