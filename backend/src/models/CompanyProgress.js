import mongoose from 'mongoose'

const companyProgressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    activeSection: {
      type: String,
      default: 'aptitude',
    },
    currentQuestionIndex: {
      type: Number,
      default: 0,
    },
    questionIndices: {
      type: Map,
      of: Number,
      default: {},
    },
    selectedAnswers: {
      type: Map,
      of: String,
      default: {},
    },
    revealedAnswers: {
      type: Map,
      of: Boolean,
      default: {},
    },
    completedSections: {
      type: Map,
      of: Boolean,
      default: {},
    },
    sectionScores: {
      type: Map,
      of: Number,
      default: {},
    },
    score: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
)

companyProgressSchema.index({ user: 1, companyName: 1 }, { unique: true })

const CompanyProgress = mongoose.model('CompanyProgress', companyProgressSchema)

export default CompanyProgress
