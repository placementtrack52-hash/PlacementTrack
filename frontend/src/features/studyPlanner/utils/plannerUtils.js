// Helper to get today's date as YYYY-MM-DD string
export const getToday = () => new Date().toISOString().slice(0, 10)

// Helper to get Monday of current week
export const getMondayOfWeek = (date = new Date()) => {
  const d = new Date(date)
  const day = d.getDay()
  const diff = d.getDate() - day + (day === 0 ? -6 : 1)
  return new Date(d.setDate(diff)).toISOString().slice(0, 10)
}

// Calculate XP based on difficulty
export const calculateXP = (difficulty) => {
  const map = { easy: 10, medium: 20, hard: 30 }
  return map[difficulty] || 20
}

// Format seconds to MM:SS
export const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

// Parse MM:SS back to seconds
export const parseTime = (timeStr) => {
  const [mins, secs] = timeStr.split(':').map(Number)
  return mins * 60 + secs
}

// Get day of week name (0-6 is Sun-Sat, convert to Mon-Sun)
export const getDayNames = () => ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

// Get the last 7 days as array of date strings
export const getLast7Days = () => {
  const days = []
  for (let i = 6; i >= 0; i--) {
    const d = new Date()
    d.setDate(d.getDate() - i)
    days.push(d.toISOString().slice(0, 10))
  }
  return days
}

// Check if a streak day should count as active
export const isDayActive = (dayString, streakHistory) => {
  return streakHistory.includes(dayString)
}

// Generate unique ID
export const generateId = () => {
  return `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

// Calculate daily progress percentage
export const getDailyProgress = (completed, target) => {
  if (target <= 0) return 0
  return Math.min(100, Math.round((completed / target) * 100))
}

// Count completed topics for this week
export const countWeeklyCompletions = (completedTopics, subjectId, weekStart) => {
  let count = 0
  // This would be called with progressContext data
  // For now, return the count passed in
  return count
}
