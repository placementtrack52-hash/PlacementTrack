import express from 'express'
import UserData from '../models/UserData.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.use(protect)

// ─── GET /api/user/me ────────────────────────────────────────────────────────
// Returns the authenticated user's profile (id, name, email) without the password.
router.get('/me', (req, res) => {
  const { _id, name, email } = req.user
  return res.json({
    user: { id: _id, name, email },
  })
})

// ─── PUT /api/user/update-progress ──────────────────────────────────────────
// Full progress sync. Replaces the stored progress object with the supplied one.
// Use the PATCH /api/user-data/progress route for surgical single-field updates.
router.put('/update-progress', async (req, res) => {
  try {
    const { subject, progress } = req.body

    if (!subject || typeof progress !== 'number') {
      return res.status(400).json({
        message: 'subject (string) and progress (number 0-100) are required.',
      })
    }

    const updated = await UserData.findOneAndUpdate(
      { user: req.user._id },
      {
        $set: {
          [`progress.subjects.${subject}.progress`]: Math.min(100, Math.max(0, progress)),
        },
      },
      { new: true, upsert: true },
    )

    return res.json({
      message: `Progress for "${subject}" updated.`,
      subjects: updated.progress?.subjects ?? {},
    })
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Failed to update progress.', error: error.message })
  }
})

// ─── PUT /api/user/update-quiz ───────────────────────────────────────────────
// Surgically updates quiz stats for a specific subject using $set dot-notation.
// Never overwrites sibling fields inside the subject or any other subject.
//
// Body: { subject: "java", levelsDone: 5, accuracy: 88, speedScore: 72 }
router.put('/update-quiz', async (req, res) => {
  try {
    const { subject, levelsDone, accuracy, speedScore } = req.body

    if (!subject) {
      return res.status(400).json({ message: 'subject is required.' })
    }

    // Only set the fields that were actually provided in the request body.
    const setPayload = {}
    if (levelsDone !== undefined) {
      setPayload[`progress.subjects.${subject}.quizStats.levelsDone`] = levelsDone
    }
    if (accuracy !== undefined) {
      setPayload[`progress.subjects.${subject}.quizStats.accuracy`] = accuracy
    }
    if (speedScore !== undefined) {
      setPayload[`progress.subjects.${subject}.quizStats.speedScore`] = speedScore
    }

    if (Object.keys(setPayload).length === 0) {
      return res.status(400).json({
        message: 'At least one of levelsDone, accuracy, or speedScore is required.',
      })
    }

    const updated = await UserData.findOneAndUpdate(
      { user: req.user._id },
      { $set: setPayload },
      { new: true, upsert: true },
    )

    return res.json({
      message: `Quiz stats for "${subject}" updated.`,
      quizStats: updated.progress?.subjects?.[subject]?.quizStats ?? {},
    })
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Failed to update quiz stats.', error: error.message })
  }
})

export default router
