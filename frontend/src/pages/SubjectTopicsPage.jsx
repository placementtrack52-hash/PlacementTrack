import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import subjects from '../data/subjects.json'
import PageShell from '../components/PageShell'
import TopicCard from '../components/TopicCard'
import { useProgress } from '../context/ProgressContext'
import { useStudyPlanner } from '../features/studyPlanner/hooks/useStudyPlanner'
import PlannerPanel from '../features/studyPlanner/components/PlannerPanel'
import { useToast, ToastContainer } from '../features/studyPlanner/utils/toast'
import { BookOpen, X } from 'lucide-react'
import InterviewCoach from '../features/interviewCoach'
import { getAccentColor } from '../features/interviewCoach/utils/subjectKeys'

const SubjectTopicsPage = () => {
  const { subjectId } = useParams()
  const { progress, toggleTopicCompletion } = useProgress()
  const { toasts, showToast } = useToast()
  const {
    planner,
    isLoading: isPlannerLoading,
    addTask,
    completeTask,
    deleteTask,
    startPomodoro,
    pausePomodoro,
    resetPomodoro,
    updateDailyGoal,
    resetDailyGoal,
    updateWeeklyGoal,
  } = useStudyPlanner(subjectId, (message, type) => showToast(message, type))

  const [isMobilePlannerOpen, setIsMobilePlannerOpen] = useState(false)

  const subject = useMemo(() => subjects.find((item) => item.id === subjectId), [subjectId])

  useEffect(() => {
    if (window.location.hash !== '#interview-coach') return
    const timer = window.setTimeout(() => {
      document.getElementById('interview-coach')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 300)
    return () => window.clearTimeout(timer)
  }, [subjectId])

  if (!subject) {
    return (
      <PageShell title="Subject not found" subtitle="We couldn't find that subject.">
        <Link to="/subjects" className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white">
          Back to subjects
        </Link>
      </PageShell>
    )
  }

  return (
    <PageShell
      title={`${subject.name} topics`}
      subtitle={subject.description}
      actions={
        <Link to="/subjects" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink">
          All subjects
        </Link>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_20rem]">
        <div className="space-y-5">
          <div id="interview-coach">
            <InterviewCoach
              subjectId={subject.id}
              accentColor={getAccentColor(subject.id)}
            />
          </div>

          <div>
            <h2 className="mb-4 font-display text-lg font-semibold text-ink dark:text-white">Topics</h2>
            <div className="space-y-5">
          {subject.topics.map((topic) => {
            const topicKey = `${subject.id}:${topic.id}`
            const quizProgress = Object.keys(progress.quizResults[topicKey] ?? {}).length
            const progressText =
              subject.id === 'interview-question'
                ? 'Question and answer set'
                : `Quiz progress: ${quizProgress}/3 levels`

            return (
              <TopicCard
                key={topic.id}
                topic={topic}
                subjectId={subject.id}
                completed={Boolean(progress.completedTopics[topicKey])}
                quizProgress={quizProgress}
                progressText={progressText}
                onToggle={(checked) => toggleTopicCompletion(topicKey, checked)}
              />
            )
          })}
            </div>
          </div>
        </div>

        {!isPlannerLoading && (
          <div className="hidden lg:block sticky top-[140px] h-fit">
            <PlannerPanel
              planner={planner}
              subject={subject}
              subjectId={subjectId}
              completedTopics={progress.completedTopics}
              onAddTask={addTask}
              onCompleteTask={completeTask}
              onDeleteTask={deleteTask}
              onStartPomodoro={startPomodoro}
              onPausePomodoro={pausePomodoro}
              onResetPomodoro={resetPomodoro}
              onUpdateDailyGoal={updateDailyGoal}
              onResetDailyGoal={resetDailyGoal}
              onUpdateWeeklyGoal={updateWeeklyGoal}
            />
          </div>
        )}
      </div>

      <div className="lg:hidden">
        <button
          onClick={() => setIsMobilePlannerOpen(true)}
          className="fixed bottom-6 right-6 z-40 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 p-4 text-white shadow-lg transition hover:scale-110 dark:from-emerald-600 dark:to-teal-600"
          aria-label="Open study planner"
        >
          <BookOpen className="w-6 h-6" />
        </button>

        {isMobilePlannerOpen && (
          <>
            <button
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsMobilePlannerOpen(false)}
            />
            <div className="fixed bottom-0 left-0 right-0 z-50 max-h-[90vh] overflow-y-auto rounded-t-3xl bg-white px-4 pt-6 pb-8 shadow-2xl dark:bg-zinc-900">
              <div className="mx-auto max-w-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="font-display text-xl font-bold text-ink dark:text-white">
                    Study Planner
                  </h2>
                  <button
                    onClick={() => setIsMobilePlannerOpen(false)}
                    className="rounded-full p-2 text-slate hover:bg-slate-100 dark:text-white/70 dark:hover:bg-zinc-800"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {!isPlannerLoading && (
                  <PlannerPanel
                    planner={planner}
                    subject={subject}
                    subjectId={subjectId}
                    completedTopics={progress.completedTopics}
                    onAddTask={addTask}
                    onCompleteTask={completeTask}
                    onDeleteTask={deleteTask}
                    onStartPomodoro={startPomodoro}
                    onPausePomodoro={pausePomodoro}
                    onResetPomodoro={resetPomodoro}
                    onUpdateDailyGoal={updateDailyGoal}
                    onResetDailyGoal={resetDailyGoal}
                    onUpdateWeeklyGoal={updateWeeklyGoal}
                  />
                )}
              </div>
            </div>
          </>
        )}
      </div>

      <ToastContainer toasts={toasts} />
    </PageShell>
  )
}

export default SubjectTopicsPage
