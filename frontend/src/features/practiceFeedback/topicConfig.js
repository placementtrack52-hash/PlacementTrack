export const questionTopicAliases = {
  'sentence-correction': 'grammar',
  'synonyms-antonyms': 'vocabulary',
}

export const resolveQuestionTopicId = (topicId) => questionTopicAliases[topicId] ?? topicId

export const buildAttemptStorageKey = ({ subjectId, topicId, difficulty }) =>
  `prepMasterPracticeFeedback:${subjectId}:${topicId}:${difficulty}`
