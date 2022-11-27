import RequestHandler from '../../middleware/requestHandler'
import Mood, { IMood } from '../../models/mood'

const predictedMoodHandler = new RequestHandler()

predictedMoodHandler.get = async (req, res) => {
  const moods = await Mood.find<IMood>({}).sort({ date: 'desc' }).limit(4)

  const n = moods.length
  const prediction = moods.reduce((acc, mood) => acc + mood.mood, 0) / n
  res.status(200).json(prediction)
}

export default predictedMoodHandler.handleRequest
