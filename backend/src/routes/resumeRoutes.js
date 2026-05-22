import express from 'express'
import multer from 'multer'
import { protect } from '../middleware/authMiddleware.js'
import {
  analyzeResumeText,
  getDemoResumeAnalysis,
  parseResumeFile,
} from '../utils/resumeAnalysis.js'

const router = express.Router()

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
  fileFilter: (_req, file, callback) => {
    const allowedMimeTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ]
    const extension = file.originalname?.split('.').pop()?.toLowerCase()

    if (allowedMimeTypes.includes(file.mimetype) || ['pdf', 'docx'].includes(extension)) {
      callback(null, true)
      return
    }

    callback(new Error('Only PDF and DOCX files are supported.'))
  },
})

router.use(protect)

router.post('/analyze', upload.single('resume'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Please upload a PDF or DOCX resume.' })
    }

    const parsedText = await parseResumeFile(req.file)

    if (!parsedText.trim()) {
      return res.status(422).json({ message: 'We could not extract readable text from this resume.' })
    }

    const analysis = analyzeResumeText({
      text: parsedText,
      fileName: req.file.originalname,
      mimeType: req.file.mimetype,
      source: 'upload',
      rawBuffer: req.file.buffer,
    })

    return res.json({ analysis })
  } catch (error) {
    return res.status(500).json({
      message: error.message || 'Failed to analyze resume.',
    })
  }
})

router.get('/demo', (_req, res) => {
  return res.json({ analysis: getDemoResumeAnalysis() })
})

export default router
