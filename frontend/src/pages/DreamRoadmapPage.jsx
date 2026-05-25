import { useState } from 'react'
import PageShell from '../components/PageShell'
import { generateRoadmap, COMPANIES, ROLES, LEVELS } from '../utils/roadmapEngine'
import RoadmapSummary from '../features/dreamRoadmap/RoadmapSummary'
import RoadmapTimeline from '../features/dreamRoadmap/RoadmapTimeline'
import ReadinessMeter from '../features/dreamRoadmap/ReadinessMeter'
import SuggestionsPanel from '../features/dreamRoadmap/SuggestionsPanel'
import DailyTaskBox from '../features/dreamRoadmap/DailyTaskBox'

const DreamRoadmapPage = () => {
  const [roadmap, setRoadmap] = useState(null)
  const [formData, setFormData] = useState({
    company: 'google',
    role: 'frontend',
    level: 'Beginner'
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleGenerateRoadmap = (e) => {
    e.preventDefault()
    const generatedRoadmap = generateRoadmap(formData.company, formData.role, formData.level)
    setRoadmap(generatedRoadmap)
  }

  return (
    <PageShell
      title="Dream Company Roadmap"
      subtitle="Get a personalized step-by-step placement roadmap based on your target company, role, and skill level."
    >
      {!roadmap ? (
        <div className="rounded-[1.75rem] bg-white/90 p-6 sm:p-8 shadow-soft ring-1 ring-slate-200/60 backdrop-blur dark:bg-zinc-900 dark:ring-zinc-800">
          <form onSubmit={handleGenerateRoadmap} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <label className="block text-sm font-semibold text-ink dark:text-white mb-2">
                  Target Company
                </label>
                <select
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                >
                  {Object.entries(COMPANIES).map(([key, label]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-ink dark:text-white mb-2">
                  Target Role
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                >
                  {Object.entries(ROLES).map(([key, label]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-ink dark:text-white mb-2">
                  Skill Level
                </label>
                <select
                  name="level"
                  value={formData.level}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                >
                  {LEVELS.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition hover:scale-[1.02] dark:from-blue-600 dark:to-blue-700"
            >
              Generate My Roadmap
            </button>
          </form>
        </div>
      ) : (
        <div className="space-y-6">
          <RoadmapSummary roadmap={roadmap} />
          <ReadinessMeter score={roadmap.readinessScore} />
          <RoadmapTimeline phases={roadmap.phases} />
          <DailyTaskBox tasks={roadmap.dailyTasks} />
          <SuggestionsPanel suggestions={roadmap.suggestions} />

          <button
            onClick={() => setRoadmap(null)}
            className="px-6 py-3 rounded-full bg-slate-500 text-white font-semibold hover:bg-slate-600 transition dark:bg-zinc-700 dark:hover:bg-zinc-600"
          >
            Create New Roadmap
          </button>
        </div>
      )}
    </PageShell>
  )
}

export default DreamRoadmapPage
