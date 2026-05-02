import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Lock, Sparkles, Target, Trophy } from 'lucide-react'
import { useProgress } from '../context/ProgressContext'
import PageShell from '../components/PageShell'
import { BADGE_DEFINITIONS } from '../utils/learning'

const tierColors = {
  bronze: { gradient: 'from-amber-600 via-amber-500 to-amber-700', bg: 'bg-amber-100 dark:bg-amber-900/30', text: 'text-amber-700 dark:text-amber-400' },
  silver: { gradient: 'from-slate-400 via-slate-300 to-slate-500', bg: 'bg-slate-100 dark:bg-slate-700/50', text: 'text-slate-600 dark:text-slate-300' },
  gold: { gradient: 'from-yellow-400 via-amber-300 to-yellow-500', bg: 'bg-yellow-100 dark:bg-yellow-900/30', text: 'text-yellow-700 dark:text-yellow-400' },
  platinum: { gradient: 'from-violet-400 via-purple-300 to-violet-500', bg: 'bg-violet-100 dark:bg-violet-900/30', text: 'text-violet-700 dark:text-violet-400' },
  diamond: { gradient: 'from-cyan-400 via-sky-300 to-cyan-500', bg: 'bg-cyan-100 dark:bg-cyan-900/30', text: 'text-cyan-700 dark:text-cyan-400' },
}

const categoryIcons = {
  'Streak': '🔥',
  'Mastery': '📚',
  'Topic': '📖',
  'Quiz': '✍️',
  'Practice': '💪',
  'Time': '⏱️',
  'Social': '👥',
  'Special': '⭐',
}

const BadgesPage = () => {
  const navigate = useNavigate()
  const { progress } = useProgress()

  const badges = useMemo(() => {
    const totalQuestionsAnswered = progress?.totalQuestionsAnswered || 0
    const perfectQuizzes = progress?.perfectQuizzes || 0
    const completedTopics = progress?.completedTopics || []
    const currentStreak = progress?.currentStreak || 0
    const longestStreak = progress?.longestStreak || 0

    return BADGE_DEFINITIONS.map((badge) => {
      let current = 0
      let unlocked = false

      switch (badge.requirement?.type) {
        case 'totalQuestions':
          current = totalQuestionsAnswered
          unlocked = current >= badge.requirement.value
          break
        case 'perfectQuizzes':
          current = perfectQuizzes
          unlocked = current >= badge.requirement.value
          break
        case 'topicsCompleted':
          current = completedTopics.length
          unlocked = current >= badge.requirement.value
          break
        case 'streak':
          current = currentStreak
          unlocked = current >= badge.requirement.value
          break
        case 'longestStreak':
          current = longestStreak
          unlocked = current >= badge.requirement.value
          break
        default:
          current = 0
          unlocked = false
      }

      const progressPercent = Math.min((current / badge.requirement.value) * 100, 100)

      return { ...badge, current, unlocked, progress: progressPercent }
    })
  }, [progress])

  const unlockedBadgeCount = badges.filter(b => b.unlocked).length
  const lockedBadgeCount = badges.length - unlockedBadgeCount

  const nextBadge = useMemo(() => {
    const locked = badges.filter(b => !b.unlocked)
    if (locked.length === 0) return null
    return locked.sort((a, b) => b.progress - a.progress)[0]
  }, [badges])

  const categories = [...new Set(badges.map(b => b.category))]

  return (
    <PageShell>
      <div className="badges-page min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:!bg-black">
        {/* Header */}
        <div className="border-b border-slate-200/60 bg-white/80 backdrop-blur-xl dark:border-slate-700/50 dark:!bg-black">
          <div className="mx-auto max-w-7xl px-3 py-4 sm:px-4 lg:px-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/dashboard')}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm hover:bg-slate-50 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-3 w-3 text-amber-500" />
                  <span className="text-[10px] font-medium uppercase tracking-wider text-amber-600 dark:!text-white">
                    Achievement Arena
                  </span>
                </div>
                <h1 className="mt-1 font-display text-xl font-semibold text-ink dark:!text-white">
                  Badges & Achievements
                </h1>
                <p className="mt-1 max-w-2xl text-xs text-slate dark:!text-white">
                  Turn every streak, mastery jump, and completed topic into something worth chasing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mx-auto max-w-7xl px-3 py-6 sm:px-4 lg:px-6">
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="relative overflow-hidden rounded-xl border border-slate-200/60 bg-white p-4 shadow-sm dark:border-slate-700/50 dark:!bg-zinc-900">
              <div className="absolute right-0 top-0 h-16 w-16 -translate-y-4 translate-x-4 rounded-full bg-emerald-100/50 dark:bg-emerald-500/10" />
              <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500 dark:text-white">Unlocked</p>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{unlockedBadgeCount}</span>
                <span className="text-xs text-slate-400 dark:text-white">badges</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-slate-200/60 bg-white p-4 shadow-sm dark:border-slate-700/50 dark:!bg-zinc-900">
              <div className="absolute right-0 top-0 h-16 w-16 -translate-y-4 translate-x-4 rounded-full bg-sky-100/50 dark:bg-sky-500/10" />
              <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500 dark:text-white">Locked</p>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-2xl font-bold text-sky-600 dark:text-sky-400">{lockedBadgeCount}</span>
                <span className="text-xs text-slate-400 dark:text-white">remaining</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-slate-200/60 bg-white p-4 shadow-sm dark:border-slate-700/50 dark:!bg-zinc-900">
              <div className="absolute right-0 top-0 h-16 w-16 -translate-y-4 translate-x-4 rounded-full bg-amber-100/50 dark:bg-amber-500/10" />
              <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500 dark:text-white">Completion</p>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-2xl font-bold text-slate-800 dark:text-white">{Math.round((unlockedBadgeCount / Math.max(badges.length, 1)) * 100)}</span>
                <span className="text-xs font-medium text-amber-600 dark:text-amber-400">%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Badges by Category */}
        <div className="mx-auto max-w-7xl px-3 pb-8 sm:px-4 lg:px-6">
          {categories.map((category) => {
            const categoryBadges = badges.filter(b => b.category === category)
            const categoryUnlocked = categoryBadges.filter(b => b.unlocked).length
            
            return (
              <div key={category} className="mb-8">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{categoryIcons[category] || '🏅'}</span>
                    <h2 className="font-display text-lg font-semibold text-ink dark:text-white">{category}</h2>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {categoryUnlocked}/{categoryBadges.length} unlocked
                  </span>
                </div>
                
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {categoryBadges.map((badge) => {
                    const tier = tierColors[badge.tier] || tierColors.bronze
                    const isUnlocked = badge.unlocked
                    
                    return (
                      <div
                        key={badge.id}
                        className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                          isUnlocked
                            ? 'border-slate-200/60 bg-white shadow-md hover:shadow-lg hover:-translate-y-0.5 dark:border-slate-700/50 dark:!bg-zinc-800'
                            : 'border-slate-100 bg-slate-50/50 opacity-75 dark:border-slate-700/30 dark:!bg-zinc-900'
                        }`}
                      >
                        {/* Top accent bar */}
                        <div className={`h-1 w-full bg-gradient-to-r ${isUnlocked ? tier.gradient : 'from-slate-300 to-slate-400'}`} />
                        
                        <div className="p-4">
                          {/* Header Row */}
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              {/* Badge Icon */}
                              <div className={`relative flex h-12 w-12 items-center justify-center rounded-xl ${
                                isUnlocked 
                                  ? `bg-gradient-to-br ${tier.gradient} shadow-lg` 
                                  : 'bg-slate-200 dark:bg-slate-700'
                              }`}>
                                {isUnlocked ? (
                                  <span className="text-2xl filter drop-shadow-sm">{badge.icon || '🏅'}</span>
                                ) : (
                                  <Lock className="h-5 w-5 text-slate-400" />
                                )}
                                {/* Tier badge corner */}
                                {isUnlocked && (
                                  <div className={`absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white dark:border-slate-800 ${tier.bg}`}>
                                    <span className="text-[8px] font-extrabold">{badge.tier?.[0]?.toUpperCase() || 'B'}</span>
                                  </div>
                                )}
                              </div>
                              
                              {/* Title */}
                              <div>
                                <h3 className={`text-sm font-semibold leading-tight ${isUnlocked ? 'text-slate-800 dark:text-slate-100' : 'text-slate-600 dark:text-slate-400'}`}>
                                  {badge.name}
                                </h3>
                              </div>
                            </div>
                          </div>
                          
                          {/* Description */}
                          <p className={`mt-3 text-xs leading-relaxed ${isUnlocked ? 'text-slate-600 dark:text-slate-300' : 'text-slate-500 dark:text-slate-500'}`}>
                            {badge.description}
                          </p>
                          
                          {/* Progress or Unlocked Status */}
                          <div className="mt-4 flex items-center justify-between">
                            {isUnlocked ? (
                              <div className="flex items-center gap-2">
                                <div className={`flex items-center gap-1 rounded-full px-2.5 py-1 ${tier.bg} ${tier.text}`}>
                                  <Trophy className="h-3 w-3" />
                                  <span className="text-[10px] font-semibold">{badge.tier}</span>
                                </div>
                                <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                                  Unlocked
                                </span>
                              </div>
                            ) : (
                              <>
                                {/* Progress bar */}
                                <div className="flex-1">
                                  <div className="flex items-center justify-between mb-1">
                                    <span className="text-[10px] font-medium text-slate-500">Progress</span>
                                    <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300">
                                      {badge.current}/{badge.requirement?.value}
                                    </span>
                                  </div>
                                  <div className="h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                                    <div 
                                      className="h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500" 
                                      style={{ width: `${badge.progress || 0}%` }}
                                    />
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </PageShell>
  )
}

export default BadgesPage