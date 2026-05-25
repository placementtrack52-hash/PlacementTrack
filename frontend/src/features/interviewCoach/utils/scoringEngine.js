export const getFeedback = (score) => ({
  label: score >= 75 ? 'Strong' : score >= 50 ? 'Needs work' : 'Weak',
  color: score >= 75 ? 'green' : score >= 50 ? 'amber' : 'red',
  msg:
    score >= 75
      ? 'Good coverage. Try adding one specific example to make it memorable.'
      : score >= 50
        ? 'You hit some key points but missed important keywords. See the red pills below.'
        : 'Answer too short or missing most keywords. Use the model answer as a structure guide.',
})

export const computeScores = (answer, keywords = []) => {
  const trimmed = answer?.trim() ?? ''
  const lower = trimmed.toLowerCase()

  const found = keywords.filter((k) => lower.includes(k.toLowerCase()))
  const keywordScore =
    keywords.length > 0 ? Math.round((found.length / keywords.length) * 100) : 0

  const sentences = trimmed.split(/[.!?]+/).filter((s) => s.trim().length > 8)
  const hasStructure =
    lower.includes('first') ||
    lower.includes('because') ||
    lower.includes('example') ||
    lower.includes('therefore')
  const clarityScore = Math.min(100, sentences.length * 16 + (hasStructure ? 20 : 0))

  const wordCount = trimmed ? trimmed.split(/\s+/).length : 0
  const depthScore = Math.min(100, Math.round((wordCount / 80) * 100))

  let overall = Math.round(keywordScore * 0.4 + clarityScore * 0.35 + depthScore * 0.25)

  return {
    keywordScore,
    clarityScore,
    depthScore,
    overall,
    foundKeywords: found,
    missedKeywords: keywords.filter((k) => !found.includes(k)),
    wordCount,
  }
}

export const applyTimeBonus = (overall, answerTimerSeconds) => {
  if (answerTimerSeconds > 0 && answerTimerSeconds < 60 && overall >= 60) {
    return { overall: Math.min(100, overall + 5), bonusApplied: true }
  }
  return { overall, bonusApplied: false }
}

/*
async function getAIFeedback(question, answer, keywords) {
  // PHASE 2: Replace rule-based scoring with AI API call
  // const res = await fetch("GEMINI_OR_CLAUDE_ENDPOINT", { ... });
  // return { keywordScore, clarityScore, depthScore, overall, aiTip };
  // For now, falls through to rule-based engine below
}
*/
