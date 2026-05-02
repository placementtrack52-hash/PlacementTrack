import mongoose from 'mongoose'

export const connectDB = async () => {
  const mongoUri = process.env.MONGODB_URI

  if (!mongoUri) {
    throw new Error('MONGODB_URI is missing. Add it to backend/.env before starting the server.')
  }

  await mongoose.connect(mongoUri)
  console.log('MongoDB connected')
}
