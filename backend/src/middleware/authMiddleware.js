import jwt from 'jsonwebtoken'
import User from '../models/User.js'

export const protect = async (req, res, next) => {
  const token = req.cookies?.prepMasterToken

  try {
    if (!token) {
      return res.status(401).json({ message: 'Not authorized. Token is missing.' })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(decoded.userId).select('-password')

    if (!user) {
      return res.status(401).json({ message: 'User not found for this token.' })
    }

    req.user = user
    next()
  } catch {
    return res.status(401).json({ message: 'Token is invalid or expired.' })
  }
}
