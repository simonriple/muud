import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from './mongodb'

export default class RequestHandler<T> {
  get: ((req: NextApiRequest, res: NextApiResponse<T>) => void) | undefined
  post: ((req: NextApiRequest, res: NextApiResponse<T>) => void) | undefined
  put: ((req: NextApiRequest, res: NextApiResponse<T>) => void) | undefined
  delete: ((req: NextApiRequest, res: NextApiResponse<T>) => void) | undefined
  handleRequest = connectDB((req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST' && this.post) {
      this.post(req, res)
    } else if (req.method === 'PUT' && this.put) {
      this.put(req, res)
    } else if (req.method === 'GET' && this.get) {
      this.get(req, res)
    } else if (req.method === 'DELETE' && this.delete) {
      this.delete(req, res)
    } else {
      res.status(404)
    }
  })
}
