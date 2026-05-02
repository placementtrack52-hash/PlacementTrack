import express from 'express'
import CompanyProgress from '../models/CompanyProgress.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/', protect, async (req, res) => {
  try {
    const progressList = await CompanyProgress.find({ user: req.user._id })
    return res.json({ progressList })
  } catch (error) {
    return res.status(500).json({ message: 'Failed to load company progress.', error: error.message })
  }
})

router.get('/:companyName', protect, async (req, res) => {
  try {
    const progress = await CompanyProgress.findOne({
      user: req.user._id,
      companyName: req.params.companyName,
    })

    if (!progress) {
      return res.json({ progress: null })
    }

    return res.json({ progress })
  } catch (error) {
    return res.status(500).json({ message: 'Failed to load progress.', error: error.message })
  }
})

router.put('/:companyName', protect, async (req, res) => {
  try {
    const payload = {
      activeSection: req.body.activeSection ?? 'aptitude',
      currentQuestionIndex: req.body.currentQuestionIndex ?? 0,
      questionIndices: req.body.questionIndices ?? {},
      selectedAnswers: req.body.selectedAnswers ?? {},
      revealedAnswers: req.body.revealedAnswers ?? {},
      completedSections: req.body.completedSections ?? {},
      sectionScores: req.body.sectionScores ?? {},
      score: req.body.score ?? 0,
    }

    const progress = await CompanyProgress.findOneAndUpdate(
      {
        user: req.user._id,
        companyName: req.params.companyName,
      },
      {
        $set: {
          user: req.user._id,
          companyName: req.params.companyName,
          ...payload,
        },
      },
      {
        new: true,
        upsert: true,
        runValidators: true,
      },
    )

    return res.json({
      message: 'Progress saved successfully.',
      progress,
    })
  } catch (error) {
    return res.status(500).json({ message: 'Failed to save progress.', error: error.message })
  }
})

export default router
