import express from 'express'
import CodeProblem from '../models/CodeProblem.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.use(protect)

// GET /api/code/categories — distinct categories with problem counts
router.get('/categories', async (_req, res) => {
  try {
    const categories = await CodeProblem.aggregate([
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ])

    return res.json({
      categories: categories.map((c) => ({
        name: c._id,
        count: c.count,
      })),
    })
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Failed to load categories.', error: error.message })
  }
})

// GET /api/code/category/:category — problems in a category (no code field)
router.get('/category/:category', async (req, res) => {
  try {
    const category = decodeURIComponent(req.params.category)
    const problems = await CodeProblem.find({ category })
      .select('-code')
      .sort({ difficulty: 1, title: 1 })
      .lean()

    return res.json({ problems })
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Failed to load problems.', error: error.message })
  }
})

// GET /api/code/problem/:id — full problem with code
router.get('/problem/:id', async (req, res) => {
  try {
    const problem = await CodeProblem.findById(req.params.id).lean()

    if (!problem) {
      return res.status(404).json({ message: 'Problem not found.' })
    }

    return res.json({ problem })
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Failed to load problem.', error: error.message })
  }
})

export default router
