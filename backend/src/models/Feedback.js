import mongoose from 'mongoose'

const feedbackSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ['Bug Report', 'Feature Request', 'General Feedback', 'Report Issue', 'Topic Request', 'Helpful'],
    },
    message: {
      type: String,
      required: function() {
        return this.type !== 'Helpful'
      },
    },
    email: {
      type: String,
      trim: true,
    },
    url: {
      type: String,
      trim: true,
    },
    contextData: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false,
    },
    status: {
      type: String,
      enum: ['Open', 'In Progress', 'Resolved'],
      default: 'Open',
    },
    priority: {
      type: String,
      enum: ['Low', 'Medium', 'High'],
      default: 'Medium',
    },
  },
  {
    timestamps: true,
  },
)

const Feedback = mongoose.model('Feedback', feedbackSchema)

export default Feedback
