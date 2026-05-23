import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import {
  getLanguageConfig,
  getNotesForLanguage,
  getPreviousTopic,
  getTopicBySlug,
} from '../data/notes/index.js'
import PageShell from '../components/PageShell'
import NotesSidebar from '../features/placementNotes/components/NotesSidebar'
import TopicMainContent from '../features/placementNotes/components/TopicMainContent'
import { usePlacementNotesProgress } from '../features/placementNotes/hooks/usePlacementNotesProgress'

const PlacementNotesLearnPage = () => {
  const { language, slug } = useParams()
  const [search, setSearch] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  const langConfig = getLanguageConfig(language)
  const topics = getNotesForLanguage(language)
  const topic = getTopicBySlug(language, slug)
  const previousTopic = slug ? getPreviousTopic(language, slug) : null
  const nextTopic = topic?.nextTopic
    ? topics.find((t) => t.slug === topic.nextTopic)
    : null

  const { toggleComplete, markVisited, isCompleted, getLanguageProgress, state } =
    usePlacementNotesProgress()

  const { percent: langProgressPercent } = getLanguageProgress(language, topics.length)

  const completedSlugs = useMemo(() => {
    const set = new Set()
    topics.forEach((t) => {
      if (isCompleted(language, t.slug)) set.add(t.slug)
    })
    return set
  }, [topics, language, isCompleted, state])

  const topicDone = topic ? isCompleted(language, topic.slug) : false

  useEffect(() => {
    if (language && slug && topic) {
      markVisited(language, slug)
    }
  }, [language, slug, topic, markVisited])

  if (!langConfig) {
    return <Navigate to="/placement-notes" replace />
  }

  if (!topic && topics.length > 0) {
    return <Navigate to={`/placement-notes/${language}/${topics[0].slug}`} replace />
  }

  const handleToggleComplete = (topicSlug, completed) => {
    toggleComplete(language, topicSlug, completed)
  }

  return (
    <PageShell
      title={`${langConfig.name} Tutorial`}
      subtitle="Topic-wise notes for placement preparation — read, practice, and track progress."
      actions={
        <>
          {topic ? (
            <label className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-ink dark:border-zinc-700 dark:bg-zinc-900 dark:text-white">
              <input
                type="checkbox"
                checked={topicDone}
                onChange={(e) => handleToggleComplete(topic.slug, e.target.checked)}
                className="h-4 w-4 rounded border-ink/20 text-moss focus:ring-moss"
              />
              Mark completed
            </label>
          ) : null}
          <Link
            to="/placement-notes"
            className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-[#0f1720]"
          >
            All languages
          </Link>
        </>
      }
    >
      <div className="overflow-hidden rounded-lg border border-slate-200 shadow-sm dark:border-zinc-800">
        <div className="flex min-h-[32rem] flex-col lg:flex-row">
          <NotesSidebar
            language={language}
            languageName={langConfig.name}
            topics={topics}
            activeSlug={slug}
            search={search}
            onSearchChange={setSearch}
            progressPercent={langProgressPercent}
            completedSlugs={completedSlugs}
            onToggleComplete={handleToggleComplete}
            lastVisited={state.lastVisited}
            mobileOpen={mobileOpen}
            onOpenMobile={() => setMobileOpen(true)}
            onCloseMobile={() => setMobileOpen(false)}
          />
          <TopicMainContent
            topic={topic}
            language={language}
            languageName={langConfig.name}
            previousTopic={previousTopic}
            nextTopic={nextTopic}
          />
        </div>
      </div>
    </PageShell>
  )
}

export default PlacementNotesLearnPage
