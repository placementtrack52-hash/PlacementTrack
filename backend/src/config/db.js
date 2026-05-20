import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI

    if (!mongoUri) {
      throw new Error('MONGO_URI is missing. Add it to your environment variables.')
    }

    await mongoose.connect(mongoUri)

    console.log('MongoDB Connected')
  } catch (error) {
    console.error('MongoDB connection error:', error)
    process.exit(1)
  }
}
