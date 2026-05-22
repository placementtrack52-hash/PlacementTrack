import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import {
  getLanguageConfig,
  getNotesForLanguage,
  getPreviousTopic,
  getTopicBySlug,
} from '../data/notes/index.js'
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
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-zinc-950/95 px-4 py-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4">
          <Link
            to="/placement-notes"
            className="text-sm font-medium text-violet-400 hover:text-violet-300"
          >
            Placement Notes
          </Link>
          <span className="hidden text-sm text-zinc-500 sm:inline">
            {langConfig.emoji} {langConfig.name}
          </span>
          <Link
            to="/subjects"
            className="text-sm text-zinc-400 hover:text-white"
          >
            Subjects
          </Link>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1600px]">
        <NotesSidebar
          language={language}
          topics={topics}
          activeSlug={slug}
          search={search}
          onSearchChange={setSearch}
          progressPercent={langProgressPercent}
          completedSlugs={completedSlugs}
          onToggleComplete={handleToggleComplete}
          lastVisited={state.lastVisited}
          mobileOpen={mobileOpen}
          onCloseMobile={() => setMobileOpen(false)}
        />
        <TopicMainContent
          topic={topic}
          language={language}
          previousTopic={previousTopic}
          nextTopic={nextTopic}
          onOpenSidebar={() => setMobileOpen(true)}
        />
      </div>
    </div>
  )
}

export default PlacementNotesLearnPage
