import subjects from '../data/subjects.json'
import questions from '../data/questions.json'

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
  if (points >= 250) return { name: 'Pro', color: 'text-amber-500' }
  if (points >= 120) return { name: 'Intermediate', color: 'text-sky-500' }
  return { name: 'Beginner', color: 'text-moss' }
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

export const buildBadgeCollection = ({
  completedCount,
  points,
  accuracy,
  subjectCompletion,
  streakDays,
  masterySummary,
}) => {
  const subjectBadges = Object.entries(subjectCompletion).map(([subjectId, summary]) => ({
    id: `subject-${subjectId}`,
    name: `${summary.subjectName} Finisher`,
    unlocked: summary.completedAll,
    description: `Complete all ${summary.totalTopics} topics in ${summary.subjectName}.`,
    category: 'Subject',
  }))

  const quizBadges = [
    {
      id: 'mastery-1',
      name: 'Quiz Mastery I',
      unlocked: masterySummary.masteredCount >= 1,
      description: 'Score 80%+ in easy, medium, and hard for one topic.',
      category: 'Mastery',
    },
    {
      id: 'mastery-3',
      name: 'Quiz Mastery III',
      unlocked: masterySummary.masteredCount >= 3,
      description: 'Master three topics across all quiz levels.',
      category: 'Mastery',
    },
  ]

  return [
    {
      id: 'starter',
      name: 'Starter Spark',
      unlocked: completedCount >= 1,
      description: 'Completed your first topic.',
      category: 'Milestone',
    },
    {
      id: 'precision',
      name: 'Precision Pulse',
      unlocked: accuracy >= 80,
      description: 'Maintained 80%+ overall accuracy.',
      category: 'Milestone',
    },
    {
      id: 'climber',
      name: 'Level Climber',
      unlocked: points >= 120,
      description: 'Crossed 120 Prep Points.',
      category: 'Milestone',
    },
    ...subjectBadges,
    ...getStreakBadges(streakDays),
    ...quizBadges,
  ]
}

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
