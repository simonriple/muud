import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'

const connectDB =
  (handler: (req: NextApiRequest, res: NextApiResponse) => void) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (mongoose.connections[0].readyState) {
      // Use current db connection
      return handler(req, res)
    }
    // Use new db connection
    await mongoose
      .connect(`${process.env.MONGODB_CONNECTION_STRING}`, {
        // useUnifiedTopology: true,
        // useFindAndModify: false,
        // useCreateIndex: true,
        // useNewUrlParser: true,
      })
      .then(() => console.log('connected to db'))
    return handler(req, res)
  }

export default connectDB
