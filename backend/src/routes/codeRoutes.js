import express from 'express'
import mongoose from 'mongoose'
import CodeProblem from '../models/CodeProblem.js'
import { protect } from '../middleware/authMiddleware.js'
import { loadAllCodeProblems } from '../data/loadAllCodeProblems.js'

const router = express.Router()

const getDbProblemsOrFallback = async (loader) => {
  const dbProblems = await loader()

  if (Array.isArray(dbProblems) && dbProblems.length > 0) {
    return dbProblems
  }

  return loadAllCodeProblems()
}

router.use(protect)

// GET /api/code/categories — distinct categories with problem counts
router.get('/categories', async (_req, res) => {
  try {
    const dbCategories = await CodeProblem.aggregate([
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ])

    const categories =
      dbCategories.length > 0
        ? dbCategories.map((c) => ({
            name: c._id,
            count: c.count,
          }))
        : Object.values(
            (await loadAllCodeProblems()).reduce((acc, problem) => {
              const existing = acc[problem.category] || { name: problem.category, count: 0 }
              existing.count += 1
              acc[problem.category] = existing
              return acc
            }, {}),
          ).sort((a, b) => a.name.localeCompare(b.name))

    return res.json({
      categories,
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
    const problems = await getDbProblemsOrFallback(() =>
      CodeProblem.find({ category })
        .select('-code')
        .sort({ difficulty: 1, title: 1 })
        .lean(),
    )

    const normalizedProblems = problems
      .filter((problem) => problem.category === category)
      .map((problem) => {
        if (problem._id) return problem

        return {
          ...problem,
          _id: `${problem.category}:${problem.title}`,
        }
      })
      .sort((a, b) => {
        if (a.difficulty === b.difficulty) return a.title.localeCompare(b.title)
        return a.difficulty.localeCompare(b.difficulty)
      })

    return res.json({ problems: normalizedProblems })
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Failed to load problems.', error: error.message })
  }
})

// GET /api/code/problem/:id — full problem with code
router.get('/problem/:id', async (req, res) => {
  try {
    const requestedId = req.params.id
    let problem = null

    if (mongoose.Types.ObjectId.isValid(requestedId)) {
      problem = await CodeProblem.findById(requestedId).lean()
    }

    if (!problem) {
      const fallbackProblems = await loadAllCodeProblems()
      problem = fallbackProblems.find(
        (item) => `${item.category}:${item.title}` === requestedId,
      )
    }

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
