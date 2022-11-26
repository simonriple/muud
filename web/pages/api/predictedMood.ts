import RequestHandler from '../../middleware/requestHandler'
import Mood, { IMood } from '../../models/mood'

const predictedMoodHandler = new RequestHandler()

predictedMoodHandler.get = async (req, res) => {
  const moods = await Mood.find<IMood>({})

  const prediction =
    moods.reduce((acc, mood) => acc + mood.mood, 0) / moods.length
  res.status(200).json(prediction)
}

export default predictedMoodHandler.handleRequest
