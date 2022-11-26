import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import RequestHandler from '../../middleware/requestHandler'
import Mood from '../../models/mood'

const moodHandler = new RequestHandler()

moodHandler.get = async (req, res) => {
  const moods = await Mood.find({})
  res.status(200).json(moods)
}

moodHandler.post = async (req, res) => {
  const newMood = new Mood(req.body)
  const mood = await Mood.create(newMood)
  res.status(201).json(mood)
}

export default withApiAuthRequired(moodHandler.handleRequest)
