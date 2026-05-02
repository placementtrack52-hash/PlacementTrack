import mongoose from 'mongoose'

const codeProblemSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      default: 'Code',
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    difficulty: {
      type: String,
      required: true,
      enum: ['Easy', 'Medium', 'Hard'],
    },
    description: {
      type: String,
      required: true,
    },
    inputExample: {
      type: String,
      required: true,
    },
    outputExample: {
      type: String,
      required: true,
    },
    explanation: {
      type: String,
      required: true,
    },
    code: {
      java: { type: String, required: true },
      python: { type: String, required: true },
      c: { type: String, required: true },
      cpp: { type: String, required: true },
    },
  },
  {
    timestamps: true,
  },
)

codeProblemSchema.index({ category: 1 })

const CodeProblem = mongoose.model('CodeProblem', codeProblemSchema)

export default CodeProblem
