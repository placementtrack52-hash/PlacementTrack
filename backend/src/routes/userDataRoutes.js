import express from 'express'
import UserData from '../models/UserData.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

const defaultProgress = {
  completedTopics: {},
  quizResults: {},
  finalTests: {},
  points: 0,
  unlockedBadges: [],
  streak: {
    current: 0,
    lastActiveDate: null,
    activityDates: [],
  },
  notePreferences: {
    important: {},
    saved: {},
    positions: {},
  },
  lastStudied: {},
  mistakes: [],
  dailyChallenges: {},
}

const defaultUserData = {
  progress: defaultProgress,
  feedback: [],
  notes: [],
  routines: [],
  practiceAttempts: {},
  preferences: {
    theme: 'light',
  },
}

const normalizeProgress = (stored = {}) => ({
  ...defaultProgress,
  ...stored,
  streak: {
    ...defaultProgress.streak,
    ...(stored?.streak ?? {}),
  },
  notePreferences: {
    ...defaultProgress.notePreferences,
    ...(stored?.notePreferences ?? {}),
  },
})

const ensureUserData = async (userId) => {
  let userData = await UserData.findOne({ user: userId })

  if (!userData) {
    userData = await UserData.create({
      user: userId,
      ...defaultUserData,
    })
  }

  return userData
}

router.use(protect)

router.get('/me', async (req, res) => {
  try {
    const userData = await ensureUserData(req.user._id)

    return res.json({
      userData: {
        progress: normalizeProgress(userData.progress),
        feedback: userData.feedback,
        notes: userData.notes,
        routines: userData.routines,
        practiceAttempts: Object.fromEntries(userData.practiceAttempts ?? []),
        preferences: userData.preferences ?? defaultUserData.preferences,
      },
    })
  } catch (error) {
    return res.status(500).json({ message: 'Failed to load user data.', error: error.message })
  }
})

router.put('/progress', async (req, res) => {
  try {
    const userData = await ensureUserData(req.user._id)
    userData.progress = normalizeProgress(req.body.progress)
    userData.markModified('progress')
    await userData.save()

    return res.json({
      message: 'Progress saved successfully.',
      progress: userData.progress,
    })
  } catch (error) {
    return res.status(500).json({ message: 'Failed to save progress.', error: error.message })
  }
})

router.post('/feedback', async (req, res) => {
  try {
    const { rating, message } = req.body
    if (!rating || !message?.trim()) {
      return res.status(400).json({ message: 'Rating and message are required.' })
    }

    const userData = await ensureUserData(req.user._id)
    const nextFeedback = {
      id: crypto.randomUUID(),
      userEmail: req.user.email,
      userName: req.user.name,
      rating,
      message: message.trim(),
      createdAt: new Date().toISOString(),
    }

    userData.feedback = [nextFeedback, ...userData.feedback]
    await userData.save()

    return res.status(201).json({
      message: 'Feedback saved successfully.',
      feedback: userData.feedback,
    })
  } catch (error) {
    return res.status(500).json({ message: 'Failed to save feedback.', error: error.message })
  }
})

router.get('/notes', async (req, res) => {
  try {
    const userData = await ensureUserData(req.user._id)
    return res.json({ notes: userData.notes })
  } catch (error) {
    return res.status(500).json({ message: 'Failed to load notes.', error: error.message })
  }
})

router.post('/notes', async (req, res) => {
  try {
    const { title, content } = req.body
    if (!title?.trim() || !content?.trim()) {
      return res.status(400).json({ message: 'Title and content are required.' })
    }

    const userData = await ensureUserData(req.user._id)
    const now = new Date().toISOString()
    const note = {
      id: crypto.randomUUID(),
      title: title.trim(),
      content: content.trim(),
      createdAt: now,
      updatedAt: now,
    }

    userData.notes = [note, ...userData.notes]
    await userData.save()

    return res.status(201).json({ note, notes: userData.notes })
  } catch (error) {
    return res.status(500).json({ message: 'Failed to create note.', error: error.message })
  }
})

router.put('/notes/:id', async (req, res) => {
  try {
    const { title, content } = req.body
    const userData = await ensureUserData(req.user._id)
    const noteIndex = userData.notes.findIndex((item) => item.id === req.params.id)

    if (noteIndex === -1) {
      return res.status(404).json({ message: 'Note not found.' })
    }

    userData.notes[noteIndex] = {
      ...userData.notes[noteIndex],
      title: title?.trim() ?? userData.notes[noteIndex].title,
      content: content?.trim() ?? userData.notes[noteIndex].content,
      updatedAt: new Date().toISOString(),
    }

    await userData.save()
    return res.json({ note: userData.notes[noteIndex], notes: userData.notes })
  } catch (error) {
    return res.status(500).json({ message: 'Failed to update note.', error: error.message })
  }
})

router.delete('/notes/:id', async (req, res) => {
  try {
    const userData = await ensureUserData(req.user._id)
    userData.notes = userData.notes.filter((item) => item.id !== req.params.id)
    await userData.save()
    return res.json({ message: 'Note deleted successfully.', notes: userData.notes })
  } catch (error) {
    return res.status(500).json({ message: 'Failed to delete note.', error: error.message })
  }
})

router.get('/routines', async (req, res) => {
  try {
    const userData = await ensureUserData(req.user._id)
    return res.json({ routines: userData.routines })
  } catch (error) {
    return res.status(500).json({ message: 'Failed to load routines.', error: error.message })
  }
})

router.post('/routines', async (req, res) => {
  try {
    const { time, task } = req.body
    if (!time?.trim() || !task?.trim()) {
      return res.status(400).json({ message: 'Time and task are required.' })
    }

    const userData = await ensureUserData(req.user._id)
    const now = new Date().toISOString()
    const routine = {
      id: crypto.randomUUID(),
      time: time.trim(),
      task: task.trim(),
      createdAt: now,
      updatedAt: now,
    }

    userData.routines = [...userData.routines, routine]
    await userData.save()

    return res.status(201).json({ routine, routines: userData.routines })
  } catch (error) {
    return res.status(500).json({ message: 'Failed to create routine.', error: error.message })
  }
})

router.put('/routines/:id', async (req, res) => {
  try {
    const { time, task } = req.body
    const userData = await ensureUserData(req.user._id)
    const routineIndex = userData.routines.findIndex((item) => item.id === req.params.id)

    if (routineIndex === -1) {
      return res.status(404).json({ message: 'Routine not found.' })
    }

    userData.routines[routineIndex] = {
      ...userData.routines[routineIndex],
      time: time?.trim() ?? userData.routines[routineIndex].time,
      task: task?.trim() ?? userData.routines[routineIndex].task,
      updatedAt: new Date().toISOString(),
    }

    await userData.save()
    return res.json({ routine: userData.routines[routineIndex], routines: userData.routines })
  } catch (error) {
    return res.status(500).json({ message: 'Failed to update routine.', error: error.message })
  }
})

router.delete('/routines/:id', async (req, res) => {
  try {
    const userData = await ensureUserData(req.user._id)
    userData.routines = userData.routines.filter((item) => item.id !== req.params.id)
    await userData.save()
    return res.json({ message: 'Routine deleted successfully.', routines: userData.routines })
  } catch (error) {
    return res.status(500).json({ message: 'Failed to delete routine.', error: error.message })
  }
})

router.get('/practice-attempts/:attemptKey', async (req, res) => {
  try {
    const userData = await ensureUserData(req.user._id)
    const key = decodeURIComponent(req.params.attemptKey)
    return res.json({ attempt: userData.practiceAttempts?.get(key) ?? null })
  } catch (error) {
    return res.status(500).json({ message: 'Failed to load practice attempt.', error: error.message })
  }
})

router.put('/practice-attempts/:attemptKey', async (req, res) => {
  try {
    const userData = await ensureUserData(req.user._id)
    const key = decodeURIComponent(req.params.attemptKey)
    userData.practiceAttempts.set(key, req.body.attempt ?? null)
    await userData.save()

    return res.json({
      message: 'Practice attempt saved successfully.',
      attempt: userData.practiceAttempts.get(key) ?? null,
    })
  } catch (error) {
    return res.status(500).json({ message: 'Failed to save practice attempt.', error: error.message })
  }
})

router.get('/preferences', async (req, res) => {
  try {
    const userData = await ensureUserData(req.user._id)
    return res.json({ preferences: userData.preferences ?? defaultUserData.preferences })
  } catch (error) {
    return res.status(500).json({ message: 'Failed to load preferences.', error: error.message })
  }
})

router.put('/preferences', async (req, res) => {
  try {
    const userData = await ensureUserData(req.user._id)
    userData.preferences = {
      ...(userData.preferences ?? defaultUserData.preferences),
      ...(req.body.preferences ?? {}),
    }
    await userData.save()

    return res.json({
      message: 'Preferences saved successfully.',
      preferences: userData.preferences,
    })
  } catch (error) {
    return res.status(500).json({ message: 'Failed to save preferences.', error: error.message })
  }
})

export default router
