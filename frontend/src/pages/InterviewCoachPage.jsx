import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import InterviewCoach from '../features/interviewCoach'
import { COACH_ROUTE_SUBJECTS } from '../features/interviewCoach/hooks/useInterviewCoachStats'
import { getAccentColor } from '../features/interviewCoach/utils/subjectKeys'

const InterviewCoachPage = () => {
  const [selectedSubjectId, setSelectedSubjectId] = useState(COACH_ROUTE_SUBJECTS[0]?.id ?? 'aptitude')

  return (
    <PageShell
      title="AI Interview Coach"
      subtitle="Practice HR, technical, and behavioral answers with free browser-based scoring — no API required."
      actions={
        <Link
          to="/subjects"
          className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink dark:bg-white dark:text-[#0f1720]"
        >
          All subjects
        </Link>
      }
    >
      <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
        <p className="text-sm font-semibold text-slate-800 dark:text-white">Choose subject</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {COACH_ROUTE_SUBJECTS.map((subject) => {
            const active = selectedSubjectId === subject.id
            return (
              <button
                key={subject.id}
                type="button"
                onClick={() => setSelectedSubjectId(subject.id)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? 'border-indigo-300 bg-indigo-50 text-indigo-800 dark:border-indigo-500/50 dark:bg-indigo-950/40 dark:text-indigo-200'
                    : 'border-gray-200 bg-slate-50 text-slate-700 hover:bg-white dark:border-zinc-600 dark:bg-zinc-800 dark:text-slate-300'
                }`}
                style={
                  active
                    ? { borderColor: getAccentColor(subject.id), backgroundColor: `${getAccentColor(subject.id)}33` }
                    : undefined
                }
              >
                {subject.name}
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-6">
        <InterviewCoach
          subjectId={selectedSubjectId}
          accentColor={getAccentColor(selectedSubjectId)}
          defaultExpanded
        />
      </div>
    </PageShell>
  )
}

export default InterviewCoachPage
