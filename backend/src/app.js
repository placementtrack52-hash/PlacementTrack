import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/authRoutes.js'
import codeRoutes from './routes/codeRoutes.js'
import companyRoutes from './routes/companyRoutes.js'
import progressRoutes from './routes/progressRoutes.js'
import userDataRoutes from './routes/userDataRoutes.js'
import userRoutes from './routes/userRoutes.js'
import feedbackRoutes from './routes/feedbackRoutes.js'
import pyqRoutes from './routes/pyqRoutes.js'
import resumeRoutes from './routes/resumeRoutes.js'
import { isAllowedOrigin } from './config/clientOrigins.js'

const app = express()

app.set('trust proxy', 1)

app.use(
  cors({
    origin(origin, callback) {
      if (isAllowedOrigin(origin)) {
        callback(null, true)
        return
      }

      callback(new Error(`CORS blocked for origin: ${origin}`))
    },
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
app.use('/api/user', userRoutes)
app.use('/api/feedback', feedbackRoutes)
app.use('/api/pyq', pyqRoutes)
app.use('/api/resume', resumeRoutes)

export default app
