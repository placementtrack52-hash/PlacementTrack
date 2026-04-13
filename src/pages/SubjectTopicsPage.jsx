import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import subjects from '../data/subjects.json'
import PageShell from '../components/PageShell'
import TopicCard from '../components/TopicCard'
import { useProgress } from '../context/ProgressContext'

const SubjectTopicsPage = () => {
  const { subjectId } = useParams()
  const { progress, toggleTopicCompletion } = useProgress()

  const subject = useMemo(() => subjects.find((item) => item.id === subjectId), [subjectId])

  if (!subject) {
    return (
      <PageShell title="Subject not found" subtitle="We couldn’t find that subject.">
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
      <div className="space-y-5">
        {subject.topics.map((topic) => {
          const topicKey = `${subject.id}:${topic.id}`
          const quizProgress = Object.keys(progress.quizResults[topicKey] ?? {}).length

          return (
            <TopicCard
              key={topic.id}
              topic={topic}
              subjectId={subject.id}
              completed={Boolean(progress.completedTopics[topicKey])}
              quizProgress={quizProgress}
              onToggle={(checked) => toggleTopicCompletion(topicKey, checked)}
            />
          )
        })}
      </div>
    </PageShell>
  )
}

export default SubjectTopicsPage
