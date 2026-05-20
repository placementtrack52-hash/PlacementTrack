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

const app = express()

const configuredOrigins = [
  process.env.CLIENT_URL,
  process.env.CLIENT_URLS,
  'http://localhost:5173',
  'http://127.0.0.1:5173',
]
  .filter(Boolean)
  .flatMap((value) => value.split(','))
  .map((origin) => origin.trim())
  .filter(Boolean)

const allowedOrigins = [...new Set(configuredOrigins)]

app.set('trust proxy', 1)

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
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

export default app
