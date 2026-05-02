import express from 'express'
import {
  getCompanyCatalog,
  getCompanyQuestions,
  getCompanyQuestionsWithoutAnswers,
} from '../utils/companyDataLoader.js'

const router = express.Router()

router.get('/', async (_req, res) => {
  try {
    const companies = await getCompanyCatalog()
    return res.json({ companies })
  } catch (error) {
    return res.status(500).json({ message: 'Failed to load companies.', error: error.message })
  }
})

router.get('/:companyName/public', async (req, res) => {
  try {
    const company = await getCompanyQuestionsWithoutAnswers(req.params.companyName)

    if (!company) {
      return res.status(404).json({ message: 'Company not found.' })
    }

    return res.json({ company })
  } catch (error) {
    return res.status(500).json({ message: 'Failed to load public company questions.', error: error.message })
  }
})

router.get('/:companyName', async (req, res) => {
  try {
    const company = await getCompanyQuestions(req.params.companyName)

    if (!company) {
      return res.status(404).json({ message: 'Company not found.' })
    }

    return res.json({ company })
  } catch (error) {
    return res.status(500).json({ message: 'Failed to load company questions.', error: error.message })
  }
})

export default router
