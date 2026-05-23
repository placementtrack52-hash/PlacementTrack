// Rule-based task suggestion engine
// Generates next logical topics without AI/API calls

export const generateTaskSuggestions = (subject, completedTopics, subjectId) => {
  if (!subject || !subject.topics) return []

  // Find topics that haven't been completed yet
  const availableTopics = subject.topics.filter((topic) => {
    const topicKey = `${subjectId}:${topic.id}`
    return !completedTopics[topicKey]
  })

  if (availableTopics.length === 0) return []

  // Find the last completed topic index
  const lastCompletedIndex = findLastCompletedTopicIndex(subject.topics, completedTopics, subjectId)

  // Get next 2-3 topics after last completed
  const suggestions = availableTopics.slice(0, 3).map((topic) => ({
    id: topic.id,
    name: topic.name,
    estimatedMinutes: topic.estimatedMinutes,
    difficulty: topic.difficulty || 'medium',
    reason: `Next in ${subject.name} curriculum`
  }))

  return suggestions
}

// Find index of last completed topic
const findLastCompletedTopicIndex = (topics, completedTopics, subjectId) => {
  for (let i = topics.length - 1; i >= 0; i--) {
    const topicKey = `${subjectId}:${topics[i].id}`
    if (completedTopics[topicKey]) {
      return i
    }
  }
  return -1
}

// Suggest optimal next topics based on completion pattern
export const suggestNextTopics = (subject, completedTopics, subjectId, count = 3) => {
  const all = subject.topics || []
  const completed = new Set(
    all
      .map((t) => `${subjectId}:${t.id}`)
      .filter((key) => completedTopics[key])
  )

  // Return uncompleted topics in order
  return all
    .filter((t) => !completed.has(`${subjectId}:${t.id}`))
    .slice(0, count)
    .map((topic) => ({
      id: topic.id,
      name: topic.name,
      estimatedMinutes: topic.estimatedMinutes,
      difficulty: topic.difficulty || 'medium'
    }))
}

// Check if a topic is in a logical learning sequence
export const isLogicalSequence = (currentTopicId, nextTopicId, allTopics) => {
  const currentIndex = allTopics.findIndex((t) => t.id === currentTopicId)
  const nextIndex = allTopics.findIndex((t) => t.id === nextTopicId)
  // Consider it logical if within 2 topics
  return nextIndex > currentIndex && nextIndex - currentIndex <= 2
}
