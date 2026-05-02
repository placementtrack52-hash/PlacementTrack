import subjects from '../data/subjects.json'
import questions from '../data/questions.json'

export const QUIZ_LEVELS = ['easy', 'medium', 'hard']

export const flattenTopics = () =>
  subjects.flatMap((subject) =>
    subject.topics.map((topic) => ({
      ...topic,
      subjectId: subject.id,
      subjectName: subject.name,
    })),
  )

export const getSubjectById = (subjectId) =>
  subjects.find((subject) => subject.id === subjectId)

export const getTopicById = (subjectId, topicId) =>
  getSubjectById(subjectId)?.topics.find((topic) => topic.id === topicId)

export const getTopicMeta = (subjectId, topicId) => {
  const subject = getSubjectById(subjectId)
  const topic = getTopicById(subjectId, topicId)

  if (!subject || !topic) return null

  return {
    subject,
    topic,
    topicKey: `${subjectId}:${topicId}`,
  }
}

export const parseTopicKey = (topicKey) => {
  const [subjectId, topicId] = topicKey.split(':')
  return { subjectId, topicId }
}

export const accuracyFromResults = (entries = []) => {
  if (!entries.length) return 0

  const totals = entries.reduce(
    (acc, entry) => {
      acc.correct += entry.correctAnswers ?? 0
      acc.total += entry.totalQuestions ?? 0
      return acc
    },
    { correct: 0, total: 0 },
  )

  return totals.total ? Math.round((totals.correct / totals.total) * 100) : 0
}

export const averageSecondsPerQuestion = (entries = []) => {
  const totals = entries.reduce(
    (acc, entry) => {
      if (entry?.timeTakenSeconds && entry?.totalQuestions) {
        acc.seconds += entry.timeTakenSeconds
        acc.questions += entry.totalQuestions
      }
      return acc
    },
    { seconds: 0, questions: 0 },
  )

  return totals.questions ? Math.round(totals.seconds / totals.questions) : 0
}

export const buildSpeedScore = (averageSeconds) => {
  if (!averageSeconds) return 0
  return Math.max(35, Math.min(100, Math.round(120 - averageSeconds * 1.6)))
}

export const getLearnerLevel = (points) => {
  const tiers = [
    { name: 'Bronze', min: 0, max: 200, color: 'text-orange-500', bg: 'bg-orange-500' },
    { name: 'Silver', min: 200, max: 500, color: 'text-slate-400', bg: 'bg-slate-400' },
    { name: 'Gold', min: 500, max: 1000, color: 'text-amber-400', bg: 'bg-amber-400' },
    { name: 'Platinum', min: 1000, max: 2000, color: 'text-cyan-400', bg: 'bg-cyan-400' },
    { name: 'Diamond', min: 2000, max: Infinity, color: 'text-violet-500', bg: 'bg-violet-500' }
  ]
  
  let currentTier = tiers[0]
  let nextTier = tiers[1]
  
  for (let i = 0; i < tiers.length; i++) {
    if (points >= tiers[i].min) {
      currentTier = tiers[i]
      nextTier = tiers[i + 1] || null
    }
  }

  let progressPercent = 100
  if (nextTier) {
    const pointsInCurrentTier = points - currentTier.min
    const tierRange = nextTier.min - currentTier.min
    progressPercent = Math.min(100, Math.max(0, Math.round((pointsInCurrentTier / tierRange) * 100)))
  }

  return {
    ...currentTier,
    currentPoints: points,
    nextTierName: nextTier ? nextTier.name : 'Max Level',
    nextTierPoints: nextTier ? nextTier.min : points,
    progressPercent
  }
}

export const buildSubjectCompletionMap = (completedTopics = {}) =>
  subjects.reduce((acc, subject) => {
    const completedCount = subject.topics.filter(
      (topic) => completedTopics[`${subject.id}:${topic.id}`],
    ).length

    acc[subject.id] = {
      subjectName: subject.name,
      completedCount,
      totalTopics: subject.topics.length,
      completedAll: completedCount === subject.topics.length,
    }

    return acc
  }, {})

export const buildSubjectQuizProgressMap = (quizResults = {}) =>
  subjects.reduce((acc, subject) => {
    const topicsWithQuiz = subject.topics.filter(
      (topic) => questions[subject.id]?.[topic.id],
    )
    const completedLevels = topicsWithQuiz.reduce((sum, topic) => {
      const topicResults = quizResults[`${subject.id}:${topic.id}`] ?? {}
      return sum + QUIZ_LEVELS.filter((level) => topicResults[level]?.completedAt).length
    }, 0)

    const totalLevels = topicsWithQuiz.length * QUIZ_LEVELS.length

    acc[subject.id] = {
      subjectName: subject.name,
      hasQuiz: totalLevels > 0,
      completedLevels,
      totalLevels,
      progressPercent: totalLevels ? Math.round((completedLevels / totalLevels) * 100) : 0,
    }

    return acc
  }, {})

export const buildQuizMasterySummary = (quizResults = {}) => {
  const levels = ['easy', 'medium', 'hard']

  const masteredTopics = Object.entries(quizResults).reduce((acc, [topicKey, topicResults]) => {
    const hasAllLevels = levels.every((level) => topicResults?.[level])
    const hasStrongScores = levels.every((level) => (topicResults?.[level]?.score ?? 0) >= 80)

    if (hasAllLevels && hasStrongScores) {
      acc.push({
        topicKey,
        ...parseTopicKey(topicKey),
      })
    }

    return acc
  }, [])

  return {
    masteredTopics,
    masteredCount: masteredTopics.length,
  }
}

const inferWeaknessLabel = (subjectId, question = '') => {
  const text = question.toLowerCase()

  if (subjectId === 'aptitude') {
    if (text.includes('percent') || text.includes('%')) return 'Percentages'
    if (text.includes('profit') || text.includes('loss') || text.includes('discount')) return 'Profit and Loss'
    if (text.includes('remainder') || text.includes('factor') || text.includes('prime') || text.includes('divisible')) return 'Division and Factors'
    return 'Quant basics'
  }

  if (subjectId === 'verbal') {
    if (text.includes('synonym') || text.includes('antonym')) return 'Vocabulary precision'
    if (text.includes('sentence') || text.includes('grammar') || text.includes('parallel')) return 'Sentence correction'
    return 'Reading interpretation'
  }

  if (text.includes('coded') || text.includes('code')) return 'Coding patterns'
  if (text.includes('father') || text.includes('mother') || text.includes('brother')) return 'Blood relations'
  if (text.includes('next') || text.includes('series') || text.includes('term')) return 'Series logic'
  return 'Logical patterns'
}

export const summarizeWeaknesses = (mistakes = []) => {
  const grouped = mistakes.reduce((acc, mistake) => {
    const key = `${mistake.topicKey}:${mistake.weaknessLabel}`
    acc[key] = acc[key] || {
      topicKey: mistake.topicKey,
      topicName: mistake.topicName,
      subjectName: mistake.subjectName,
      weaknessLabel: mistake.weaknessLabel,
      count: 0,
    }
    acc[key].count += 1
    return acc
  }, {})

  return Object.values(grouped)
    .sort((a, b) => b.count - a.count)
    .slice(0, 4)
}

export const buildRevisionReminders = (lastStudied = {}, completedTopics = {}) => {
  const now = Date.now()

  return flattenTopics()
    .map((topic) => {
      const topicKey = `${topic.subjectId}:${topic.id}`
      const studiedAt = lastStudied[topicKey]
      const daysAgo = studiedAt ? Math.floor((now - new Date(studiedAt).getTime()) / 86400000) : null

      return {
        ...topic,
        topicKey,
        daysAgo,
        shouldRevise: completedTopics[topicKey] && daysAgo !== null && daysAgo >= 2,
      }
    })
    .filter((item) => item.shouldRevise)
    .sort((a, b) => b.daysAgo - a.daysAgo)
    .slice(0, 5)
}

const hashString = (value) =>
  value.split('').reduce((acc, char) => (acc * 31 + char.charCodeAt(0)) % 1000003, 7)

export const getAllChallengeQuestions = () =>
  Object.entries(questions).flatMap(([subjectId, topics]) =>
    Object.entries(topics).flatMap(([topicId, levels]) =>
      ['easy', 'medium', 'hard'].flatMap((level) =>
        (levels[level] || []).map((question) => ({
          ...question,
          subjectId,
          topicId,
          level,
        })),
      ),
    ),
  )

export const getDailyChallengeQuestions = (dateKey) => {
  const pool = getAllChallengeQuestions()
  const used = new Set()
  const picks = []
  let cursor = hashString(dateKey)

  while (picks.length < 5 && used.size < pool.length) {
    const index = cursor % pool.length
    const question = pool[index]

    if (!used.has(question.id)) {
      picks.push(question)
      used.add(question.id)
    }

    cursor = (cursor * 37 + 19) % 1000003
  }

  return picks
}

export const buildFakeRanking = ({ accuracy, points, streakDays }) => {
  const raw = 48 + Math.round(accuracy * 0.25 + points * 0.08 + streakDays * 2)
  return Math.max(52, Math.min(94, raw))
}

// Badge tier configurations
export const BADGE_TIERS = {
  bronze: { name: 'Bronze', color: 'from-amber-600 to-amber-800', bg: 'bg-amber-100', text: 'text-amber-700', border: 'border-amber-300' },
  silver: { name: 'Silver', color: 'from-slate-400 to-slate-600', bg: 'bg-slate-100', text: 'text-slate-600', border: 'border-slate-300' },
  gold: { name: 'Gold', color: 'from-yellow-500 to-yellow-700', bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-400' },
  platinum: { name: 'Platinum', color: 'from-cyan-400 to-cyan-600', bg: 'bg-cyan-100', text: 'text-cyan-700', border: 'border-cyan-400' },
  diamond: { name: 'Diamond', color: 'from-violet-500 to-purple-700', bg: 'bg-violet-100', text: 'text-violet-700', border: 'border-violet-400' },
}

// Badge icon mapping
export const BADGE_ICONS = {
  // Milestone icons
  'starter': '🚀',
  'first-steps': '🌟',
  'getting-started': '🎯',
  'quarter-century': '💪',
  'halfway-hero': '🏃',
  'topic-titan': '👑',
  'aptitude-ace': '🎓',
  'verbal-virtuoso': '📚',
  'reasoning-rookie': '🧩',
  'complete-master': '🏆',
  
  // Streak icons
  'streak-2': '🔥',
  'streak-5': '⚡',
  'streak-7': '🌈',
  'streak-14': '💫',
  'streak-21': '⭐',
  'streak-30': '🌟',
  'streak-50': '💎',
  'streak-100': '👑',
  
  // Accuracy icons
  'accuracy-70': '🎯',
  'accuracy-80': '💥',
  'accuracy-90': '🔥',
  'perfect-streak-3': '⚡',
  'perfect-streak-5': '💎',
  'perfect-streak-10': '👑',
  
  // Speed icons
  'speed-30': '🦅',
  'speed-20': '⚡',
  'speed-15': '💨',
  
  // Subject icons
  'subject-aptitude': '📐',
  'subject-verbal': '📖',
  'subject-reasoning': '🧠',
  'subject-company': '🏢',
  
  // Mastery icons
  'mastery-1': '🌱',
  'mastery-3': '🌿',
  'mastery-5': '🌳',
  'mastery-10': '🏅',
  'mastery-20': '🏆',
  
  // Special icons
  'early-bird': '🌅',
  'night-owl': '🦉',
  'weekend-warrior': '⚔️',
  'consistency-king': '👑',
  'question-100': '📝',
  'question-500': '📚',
  'question-1000': '📖',
  'first-perfect': '💯',
  'comeback-kid': '💪',
}

// Complete badge definitions with tiers and progress
export const BADGE_DEFINITIONS = [
  // === MILESTONE BADGES (Volume) ===
  {
    id: 'starter',
    name: 'Starter Spark',
    description: 'Completed your first topic',
    category: 'Milestone',
    tier: 'bronze',
    icon: '🚀',
    requirement: { type: 'completedTopics', value: 1 },
  },
  {
    id: 'first-steps',
    name: 'First Steps',
    description: 'Complete 3 topics',
    category: 'Milestone',
    tier: 'bronze',
    icon: '🌟',
    requirement: { type: 'completedTopics', value: 3 },
  },
  {
    id: 'getting-started',
    name: 'Getting Started',
    description: 'Complete 5 topics',
    category: 'Milestone',
    tier: 'bronze',
    icon: '🎯',
    requirement: { type: 'completedTopics', value: 5 },
  },
  {
    id: 'quarter-century',
    name: 'Quarter Century',
    description: 'Complete 25 topics',
    category: 'Milestone',
    tier: 'silver',
    icon: '💪',
    requirement: { type: 'completedTopics', value: 25 },
  },
  {
    id: 'halfway-hero',
    name: 'Halfway Hero',
    description: 'Complete 50 topics',
    category: 'Milestone',
    tier: 'gold',
    icon: '🏃',
    requirement: { type: 'completedTopics', value: 50 },
  },
  {
    id: 'topic-titan',
    name: 'Topic Titan',
    description: 'Complete all 80+ topics',
    category: 'Milestone',
    tier: 'platinum',
    icon: '👑',
    requirement: { type: 'completedTopics', value: 80 },
  },
  
  // === STREAK BADGES ===
  {
    id: 'streak-2',
    name: 'Momentum Maker',
    description: '2-day learning streak',
    category: 'Streak',
    tier: 'bronze',
    icon: '🔥',
    requirement: { type: 'streak', value: 2 },
  },
  {
    id: 'streak-5',
    name: 'Consistency Cadet',
    description: '5-day learning streak',
    category: 'Streak',
    tier: 'bronze',
    icon: '⚡',
    requirement: { type: 'streak', value: 5 },
  },
  {
    id: 'streak-7',
    name: 'Week Warrior',
    description: '7-day learning streak',
    category: 'Streak',
    tier: 'silver',
    icon: '🌈',
    requirement: { type: 'streak', value: 7 },
  },
  {
    id: 'streak-14',
    name: 'Fortnight Force',
    description: '14-day learning streak',
    category: 'Streak',
    tier: 'gold',
    icon: '💫',
    requirement: { type: 'streak', value: 14 },
  },
  {
    id: 'streak-21',
    name: 'Three Week Triumph',
    description: '21-day learning streak',
    category: 'Streak',
    tier: 'gold',
    icon: '⭐',
    requirement: { type: 'streak', value: 21 },
  },
  {
    id: 'streak-30',
    name: 'Month Master',
    description: '30-day learning streak',
    category: 'Streak',
    tier: 'platinum',
    icon: '🌟',
    requirement: { type: 'streak', value: 30 },
  },
  {
    id: 'streak-50',
    name: 'Unstoppable',
    description: '50-day learning streak',
    category: 'Streak',
    tier: 'diamond',
    icon: '💎',
    requirement: { type: 'streak', value: 50 },
  },
  {
    id: 'streak-100',
    name: 'Legendary',
    description: '100-day learning streak',
    category: 'Streak',
    tier: 'diamond',
    icon: '👑',
    requirement: { type: 'streak', value: 100 },
  },
  
  // === ACCURACY BADGES ===
  {
    id: 'accuracy-70',
    name: 'Sharp Shooter',
    description: 'Maintain 70%+ accuracy',
    category: 'Accuracy',
    tier: 'bronze',
    icon: '🎯',
    requirement: { type: 'accuracy', value: 70 },
  },
  {
    id: 'accuracy-80',
    name: 'Precision Pro',
    description: 'Maintain 80%+ accuracy',
    category: 'Accuracy',
    tier: 'silver',
    icon: '💥',
    requirement: { type: 'accuracy', value: 80 },
  },
  {
    id: 'accuracy-90',
    name: 'Accuracy Ace',
    description: 'Maintain 90%+ accuracy',
    category: 'Accuracy',
    tier: 'gold',
    icon: '🔥',
    requirement: { type: 'accuracy', value: 90 },
  },
  {
    id: 'perfect-streak-3',
    name: 'Perfect Round',
    description: '3 perfect quizzes (100%)',
    category: 'Accuracy',
    tier: 'silver',
    icon: '⚡',
    requirement: { type: 'perfectQuizzes', value: 3 },
  },
  {
    id: 'perfect-streak-5',
    name: 'Flawless Five',
    description: '5 perfect quizzes',
    category: 'Accuracy',
    tier: 'gold',
    icon: '💎',
    requirement: { type: 'perfectQuizzes', value: 5 },
  },
  {
    id: 'perfect-streak-10',
    name: 'Perfectionist',
    description: '10 perfect quizzes',
    category: 'Accuracy',
    tier: 'platinum',
    icon: '👑',
    requirement: { type: 'perfectQuizzes', value: 10 },
  },
  
  // === SPEED BADGES ===
  {
    id: 'speed-30',
    name: 'Quick Learner',
    description: 'Average <30s per question',
    category: 'Speed',
    tier: 'bronze',
    icon: '🦅',
    requirement: { type: 'avgTime', value: 30, condition: 'less' },
  },
  {
    id: 'speed-20',
    name: 'Speed Demon',
    description: 'Average <20s per question',
    category: 'Speed',
    tier: 'silver',
    icon: '⚡',
    requirement: { type: 'avgTime', value: 20, condition: 'less' },
  },
  {
    id: 'speed-15',
    name: 'Lightning Fast',
    description: 'Average <15s per question',
    category: 'Speed',
    tier: 'gold',
    icon: '💨',
    requirement: { type: 'avgTime', value: 15, condition: 'less' },
  },
  
  // === SUBJECT COMPLETION BADGES ===
  {
    id: 'aptitude-ace',
    name: 'Aptitude Ace',
    description: 'Complete all Aptitude topics',
    category: 'Subject',
    tier: 'gold',
    icon: '🎓',
    requirement: { type: 'subjectComplete', value: 'aptitude' },
  },
  {
    id: 'verbal-virtuoso',
    name: 'Verbal Virtuoso',
    description: 'Complete all Verbal topics',
    category: 'Subject',
    tier: 'gold',
    icon: '📚',
    requirement: { type: 'subjectComplete', value: 'verbal' },
  },
  {
    id: 'reasoning-rookie',
    name: 'Reasoning Rookie',
    description: 'Complete all Reasoning topics',
    category: 'Subject',
    tier: 'gold',
    icon: '🧩',
    requirement: { type: 'subjectComplete', value: 'reasoning' },
  },
  
  // === MASTERY BADGES ===
  {
    id: 'mastery-1',
    name: 'Quiz Mastery I',
    description: 'Master 1 topic (80%+ all levels)',
    category: 'Mastery',
    tier: 'bronze',
    icon: '🌱',
    requirement: { type: 'masteredTopics', value: 1 },
  },
  {
    id: 'mastery-3',
    name: 'Quiz Mastery II',
    description: 'Master 3 topics',
    category: 'Mastery',
    tier: 'silver',
    icon: '🌿',
    requirement: { type: 'masteredTopics', value: 3 },
  },
  {
    id: 'mastery-5',
    name: 'Quiz Mastery III',
    description: 'Master 5 topics',
    category: 'Mastery',
    tier: 'gold',
    icon: '🌳',
    requirement: { type: 'masteredTopics', value: 5 },
  },
  {
    id: 'mastery-10',
    name: 'Master Mind',
    description: 'Master 10 topics',
    category: 'Mastery',
    tier: 'platinum',
    icon: '🏅',
    requirement: { type: 'masteredTopics', value: 10 },
  },
  {
    id: 'mastery-20',
    name: 'Grand Master',
    description: 'Master 20 topics',
    category: 'Mastery',
    tier: 'diamond',
    icon: '🏆',
    requirement: { type: 'masteredTopics', value: 20 },
  },
  
  // === VOLUME BADGES (Questions Answered) ===
  {
    id: 'question-100',
    name: 'Question Quest',
    description: 'Answer 100 questions',
    category: 'Volume',
    tier: 'bronze',
    icon: '📝',
    requirement: { type: 'questionsAnswered', value: 100 },
  },
  {
    id: 'question-500',
    name: 'Quiz Whiz',
    description: 'Answer 500 questions',
    category: 'Volume',
    tier: 'silver',
    icon: '📚',
    requirement: { type: 'questionsAnswered', value: 500 },
  },
  {
    id: 'question-1000',
    name: 'Question Master',
    description: 'Answer 1000 questions',
    category: 'Volume',
    tier: 'gold',
    icon: '📖',
    requirement: { type: 'questionsAnswered', value: 1000 },
  },
  
  // === SPECIAL BADGES ===
  {
    id: 'first-perfect',
    name: 'First Perfect',
    description: 'Score 100% on any quiz',
    category: 'Special',
    tier: 'bronze',
    icon: '💯',
    requirement: { type: 'hasPerfectQuiz', value: true },
  },
  {
    id: 'comeback-kid',
    name: 'Comeback Kid',
    description: 'Improve accuracy by 20%+',
    category: 'Special',
    tier: 'silver',
    icon: '💪',
    requirement: { type: 'improvement', value: 20 },
  },
]

// Check if a badge is unlocked based on its requirement
const checkBadgeRequirement = (badge, stats) => {
  const { type, value, condition } = badge.requirement
  
  switch (type) {
    case 'completedTopics':
      return stats.completedCount >= value
    case 'streak':
      return stats.streakDays >= value
    case 'accuracy':
      return stats.accuracy >= value
    case 'perfectQuizzes':
      return (stats.perfectQuizzes ?? 0) >= value
    case 'avgTime':
      if (condition === 'less') return (stats.avgTimePerQuestion ?? 999) <= value
      return false
    case 'subjectComplete':
      return stats.subjectCompletion?.[value]?.completedAll ?? false
    case 'masteredTopics':
      return (stats.masterySummary?.masteredCount ?? 0) >= value
    case 'questionsAnswered':
      return (stats.totalQuestionsAnswered ?? 0) >= value
    case 'hasPerfectQuiz':
      return value === true && (stats.perfectQuizzes ?? 0) > 0
    case 'improvement':
      return (stats.accuracyImprovement ?? 0) >= value
    default:
      return false
  }
}

// Get progress percentage for a badge
const getBadgeProgress = (badge, stats) => {
  const { type, value } = badge.requirement
  
  let current = 0
  switch (type) {
    case 'completedTopics':
      current = stats.completedCount ?? 0
      break
    case 'streak':
      current = stats.streakDays ?? 0
      break
    case 'accuracy':
      current = stats.accuracy ?? 0
      break
    case 'perfectQuizzes':
      current = stats.perfectQuizzes ?? 0
      break
    case 'avgTime':
      current = 100 - ((stats.avgTimePerQuestion ?? 100) / value * 100)
      break
    case 'subjectComplete':
      current = stats.subjectCompletion?.[value]?.progressPercent ?? 0
      break
    case 'masteredTopics':
      current = stats.masterySummary?.masteredCount ?? 0
      break
    case 'questionsAnswered':
      current = stats.totalQuestionsAnswered ?? 0
      break
    case 'hasPerfectQuiz':
      current = (stats.perfectQuizzes ?? 0) > 0 ? value : 0
      break
    case 'improvement':
      current = stats.accuracyImprovement ?? 0
      break
    default:
      current = 0
  }
  
  return Math.min(100, Math.round((current / value) * 100))
}

export const buildBadgeCollection = ({
  completedCount = 0,
  points = 0,
  accuracy = 0,
  subjectCompletion = {},
  streakDays = 0,
  masterySummary = {},
  totalQuestionsAnswered = 0,
  perfectQuizzes = 0,
  avgTimePerQuestion = 0,
  accuracyImprovement = 0,
}) => {
  const stats = {
    completedCount,
    points,
    accuracy,
    subjectCompletion,
    streakDays,
    masterySummary,
    totalQuestionsAnswered,
    perfectQuizzes,
    avgTimePerQuestion,
    accuracyImprovement,
  }

  // Build subject completion badges dynamically
  const subjectBadges = Object.entries(subjectCompletion).map(([subjectId, summary]) => {
    const subject = subjects.find(s => s.id === subjectId)
    const tier = subjectId === 'aptitude' ? 'gold' : subjectId === 'reasoning' ? 'gold' : 'silver'
    return {
      id: `subject-${subjectId}`,
      name: `${subject?.name ?? subjectId} Master`,
      description: `Complete all ${summary.totalTopics} topics in ${subject?.name ?? subjectId}`,
      category: 'Subject',
      tier,
      icon: BADGE_ICONS[`subject-${subjectId}`] || '📚',
      requirement: { type: 'subjectComplete', value: subjectId },
      unlocked: summary.completedAll,
      progress: summary.progressPercent,
    }
  })

  // Build all defined badges with unlock status and progress
  const badges = BADGE_DEFINITIONS.map((badge) => ({
    ...badge,
    unlocked: checkBadgeRequirement(badge, stats),
    progress: getBadgeProgress(badge, stats),
  }))

  // Combine with subject badges
  return [...badges, ...subjectBadges]
}

// Legacy function for backward compatibility
const getStreakBadges = (streakDays) => [
  {
    id: 'streak-2',
    name: 'Momentum Maker',
    unlocked: streakDays >= 2,
    description: 'Logged meaningful study activity on 2 consecutive days.',
    category: 'Streak',
  },
  {
    id: 'streak-5',
    name: 'Consistency Cadet',
    unlocked: streakDays >= 5,
    description: 'Built a 5-day learning streak.',
    category: 'Streak',
  },
]

export const buildIncorrectEntries = ({
  subjectId,
  topicKey,
  topicName,
  subjectName,
  level,
  mode,
  questionsSet,
  answers,
  questionTimes,
}) =>
  questionsSet
    .map((question, index) => {
      const selectedIndex = answers[index]
      const isCorrect = selectedIndex === question.answer

      if (isCorrect) return null

      return {
        id: `${question.id}-${Date.now()}-${index}`,
        subjectId,
        topicKey,
        topicName,
        subjectName,
        level,
        mode,
        questionId: question.id,
        question: question.question,
        selectedAnswer: selectedIndex === undefined ? 'Not answered' : question.options[selectedIndex],
        correctAnswer: question.options[question.answer],
        explanation: question.explanation,
        weaknessLabel: inferWeaknessLabel(subjectId, question.question),
        timeTakenSeconds: Math.round(questionTimes[index] ?? 0),
        createdAt: new Date().toISOString(),
      }
    })
    .filter(Boolean)
