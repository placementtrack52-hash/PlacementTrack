import express from 'express'
import multer from 'multer'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Upload directory: backend/uploads/pyq/<company>/
const UPLOAD_DIR = path.join(__dirname, '..', '..', 'uploads', 'pyq')
const PUBLIC_PYQ_DIR = path.join(__dirname, '..', '..', '..', 'frontend', 'public', 'pdfs', 'pyq')

// Ensure upload directory exists
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true })
}

// Multer storage - saves to uploads/pyq/<company>/filename.pdf
const storage = multer.diskStorage({
  destination: (req, _file, cb) => {
    const company = (req.body.company || 'general')
      .trim()
      .replace(/[^a-zA-Z0-9_-]/g, '_')
    const companyDir = path.join(UPLOAD_DIR, company)
    if (!fs.existsSync(companyDir)) {
      fs.mkdirSync(companyDir, { recursive: true })
    }
    req._companySlug = company
    cb(null, companyDir)
  },
  filename: (_req, file, cb) => {
    const safe = file.originalname.replace(/[^a-zA-Z0-9._-]/g, '_')
    cb(null, safe)
  },
})

const upload = multer({
  storage,
  fileFilter: (_req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true)
    } else {
      cb(new Error('Only PDF files are allowed'), false)
    }
  },
  limits: { fileSize: 50 * 1024 * 1024 }, // 50 MB max
})

// Returns list of companies that have PDFs uploaded
router.get('/companies', protect, (_req, res) => {
  try {
    if (!fs.existsSync(UPLOAD_DIR)) {
      return res.json({ companies: [] })
    }
    const companies = fs
      .readdirSync(UPLOAD_DIR)
      .filter((name) => fs.statSync(path.join(UPLOAD_DIR, name)).isDirectory())
      .map((slug) => {
        const files = fs
          .readdirSync(path.join(UPLOAD_DIR, slug))
          .filter((f) => f.endsWith('.pdf'))
          .map((f) => ({ name: f, slug: f }))
        return { slug, displayName: slug.replace(/_/g, ' '), files }
      })
      .filter((c) => c.files.length > 0)
    res.json({ companies })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Serves the PDF inline from uploads first, then bundled public company PYQs.
router.get('/view/:company/:filename', protect, (req, res) => {
  try {
    const company = req.params.company.replace(/[^a-zA-Z0-9_-]/g, '_')
    const filename = req.params.filename.replace(/[^a-zA-Z0-9._-]/g, '_')
    const uploadedPath = path.join(UPLOAD_DIR, company, filename)
    const publicPath = path.join(PUBLIC_PYQ_DIR, filename)
    const filePath = fs.existsSync(uploadedPath) ? uploadedPath : publicPath

    if (!fs.existsSync(filePath) || !filename.endsWith('.pdf')) {
      return res.status(404).json({ message: 'PDF not found' })
    }

    const stat = fs.statSync(filePath)

    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', `inline; filename="${filename}"`)
    res.setHeader('Content-Length', stat.size)
    res.setHeader('X-Content-Type-Options', 'nosniff')
    res.setHeader('Cache-Control', 'no-store')

    fs.createReadStream(filePath).pipe(res)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Admin only - upload a PDF for a company
router.post('/upload', protect, upload.single('pdf'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No PDF file uploaded' })
    }
    res.json({
      message: 'Uploaded successfully',
      company: req._companySlug,
      filename: req.file.filename,
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Admin only - delete a PDF
router.delete('/:company/:filename', protect, (req, res) => {
  try {
    const company = req.params.company.replace(/[^a-zA-Z0-9_-]/g, '_')
    const filename = req.params.filename.replace(/[^a-zA-Z0-9._-]/g, '_')
    const filePath = path.join(UPLOAD_DIR, company, filename)

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: 'File not found' })
    }
    fs.unlinkSync(filePath)
    res.json({ message: 'Deleted successfully' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

export default router
