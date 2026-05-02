import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/authRoutes.js'
import codeRoutes from './routes/codeRoutes.js'
import companyRoutes from './routes/companyRoutes.js'
import progressRoutes from './routes/progressRoutes.js'
import userDataRoutes from './routes/userDataRoutes.js'
import feedbackRoutes from './routes/feedbackRoutes.js'
import pyqRoutes from './routes/pyqRoutes.js'

const app = express()

app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
  }),
)
app.use(cookieParser())
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ message: 'Prep Master backend is running.' })
})

app.use('/api/auth', authRoutes)
app.use('/api/code', codeRoutes)
app.use('/api/companies', companyRoutes)
app.use('/api/progress', progressRoutes)
app.use('/api/user-data', userDataRoutes)
app.use('/api/feedback', feedbackRoutes)
app.use('/api/pyq', pyqRoutes)

export default app
