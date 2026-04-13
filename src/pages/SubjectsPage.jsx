import subjects from '../data/subjects.json'
import PageShell from '../components/PageShell'
import SubjectCard from '../components/SubjectCard'
import { useProgress } from '../context/ProgressContext'

const SubjectsPage = () => {
  const { progress } = useProgress()

  return (
    <PageShell
      title="Subjects"
      subtitle="Pick a lane for today. Each subject includes topics, notes, quizzes, and a final mixed test."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {subjects.map((subject) => {
          const completedTopics = subject.topics.filter(
            (topic) => progress.completedTopics[`${subject.id}:${topic.id}`],
          ).length
          const progressPercent = Math.round((completedTopics / subject.topics.length) * 100)

          return (
            <SubjectCard
              key={subject.id}
              subject={subject}
              progressPercent={progressPercent}
              completedTopics={completedTopics}
              totalTopics={subject.topics.length}
            />
          )
        })}
      </div>
    </PageShell>
  )
}

export default SubjectsPage
