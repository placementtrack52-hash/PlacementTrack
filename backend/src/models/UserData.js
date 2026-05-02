import mongoose from 'mongoose'

const feedbackSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    userEmail: { type: String, required: true },
    userName: { type: String, required: true },
    rating: { type: Number, required: true },
    message: { type: String, required: true },
    createdAt: { type: String, required: true },
  },
  { _id: false },
)

const noteSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true },
  },
  { _id: false },
)

const routineSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    time: { type: String, required: true },
    task: { type: String, required: true },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true },
  },
  { _id: false },
)

const userDataSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      unique: true,
      required: true,
    },
    progress: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    feedback: {
      type: [feedbackSchema],
      default: [],
    },
    notes: {
      type: [noteSchema],
      default: [],
    },
    routines: {
      type: [routineSchema],
      default: [],
    },
    practiceAttempts: {
      type: Map,
      of: mongoose.Schema.Types.Mixed,
      default: {},
    },
    preferences: {
      theme: {
        type: String,
        default: 'light',
      },
    },
  },
  {
    timestamps: true,
    minimize: false,
  },
)

const UserData = mongoose.model('UserData', userDataSchema)

export default UserData
