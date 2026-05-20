import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import { protect } from '../middleware/authMiddleware.js'
import { shouldUseSecureCookies } from '../config/clientOrigins.js'

const router = express.Router()
const cookieName = 'prepMasterToken'

const cookieOptions = {
  httpOnly: true,
  sameSite: shouldUseSecureCookies ? 'none' : 'lax',
  secure: shouldUseSecureCookies,
  maxAge: 7 * 24 * 60 * 60 * 1000,
}

const createToken = (userId) =>
  jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  })

router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password are required.' })
    }

    const normalizedEmail = email.trim().toLowerCase()
    const existingUser = await User.findOne({ email: normalizedEmail })

    if (existingUser) {
      return res.status(409).json({ message: 'An account already exists for this email.' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      password: hashedPassword,
    })
    const token = createToken(user._id)
    res.cookie(cookieName, token, cookieOptions)

    return res.status(201).json({
      message: 'Account created successfully.',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    })
  } catch (error) {
    return res.status(500).json({ message: 'Failed to create account.', error: error.message })
  }
})

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' })
    }

    const normalizedEmail = email.trim().toLowerCase()
    const user = await User.findOne({ email: normalizedEmail })

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password.' })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password.' })
    }
    const token = createToken(user._id)
    res.cookie(cookieName, token, cookieOptions)

    return res.json({
      message: 'Logged in successfully.',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    })
  } catch (error) {
    return res.status(500).json({ message: 'Failed to login.', error: error.message })
  }
})

router.get('/me', protect, async (req, res) => {
  // Return the same shape as login/signup so frontend always gets { id, name, email }
  return res.json({
    user: {
      id: req.user._id.toString(),
      name: req.user.name,
      email: req.user.email,
    },
  })
})

router.post('/logout', async (_req, res) => {
  res.clearCookie(cookieName, cookieOptions)
  return res.json({ message: 'Logged out successfully.' })
})

export default router
