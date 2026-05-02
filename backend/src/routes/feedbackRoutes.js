import express from 'express'
import Feedback from '../models/Feedback.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

// @route   POST /api/feedback
// @desc    Submit new feedback, issue report, or topic request
// @access  Public (Optional User)
router.post('/', async (req, res) => {
  try {
    const { type, message, email, url, contextData, user } = req.body

    const feedback = new Feedback({
      type,
      message,
      email,
      url,
      contextData,
      user: user || null,
    })

    await feedback.save()
    res.status(201).json(feedback)
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message })
  }
})

// @route   POST /api/feedback/helpful
// @desc    Submit helpful (thumbs up/down) feedback
// @access  Public (Optional User)
router.post('/helpful', async (req, res) => {
  try {
    const { url, contextData, user } = req.body

    const feedback = new Feedback({
      type: 'Helpful',
      url,
      contextData, // { isHelpful: true/false, topicId: ... }
      user: user || null,
      status: 'Resolved', // Auto-resolve these
    })

    await feedback.save()
    res.status(201).json({ message: 'Feedback saved' })
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message })
  }
})

// @route   GET /api/feedback
// @desc    Get all feedback (Admin)
// @access  Private (Admin role ideally, but leaving open to authenticated for now)
router.get('/', protect, async (req, res) => {
  try {
    const { status, type } = req.query
    const query = {}
    if (status) query.status = status
    if (type) query.type = type

    const feedbacks = await Feedback.find(query).populate('user', 'name email').sort({ createdAt: -1 })
    res.json({ feedbacks })
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message })
  }
})

// @route   PATCH /api/feedback/:id
// @desc    Update feedback status/priority
// @access  Private
router.patch('/:id', protect, async (req, res) => {
  try {
    const { status, priority } = req.body
    
    const feedback = await Feedback.findById(req.params.id)
    if (!feedback) {
      return res.status(404).json({ message: 'Feedback not found' })
    }

    if (status) feedback.status = status
    if (priority) feedback.priority = priority

    await feedback.save()
    res.json(feedback)
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message })
  }
})

export default router
