import mongoose from 'mongoose'

export interface IMood {
  date: string
  mood: number
  body: number
  mind: number
  exercise: boolean
  social: boolean
  note?: string
}

const MoodSchema = new mongoose.Schema<IMood>({
  date: Date,
  mood: { type: Number, default: 0 },
  body: { type: Number, default: 0 },
  mind: { type: Number, default: 0 },
  exercise: Boolean,
  social: Boolean,
  note: String,
})

export default mongoose.models.Mood || mongoose.model('Mood', MoodSchema)
