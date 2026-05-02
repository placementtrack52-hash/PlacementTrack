import PageShell from '../components/PageShell'
import TopicPage from '../features/practiceFeedback/TopicPage'

const PracticeFeedbackPage = () => (
  <PageShell
    title="Practice + Instant Feedback"
    subtitle="A dedicated practice studio where students can revise a concept, solve five timed questions, and get immediate feedback with saved performance snapshots."
  >
    <TopicPage />
  </PageShell>
)

export default PracticeFeedbackPage
