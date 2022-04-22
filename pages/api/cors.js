import Cors from 'cors'
import axios from '../../services/axiosConfig';
import initMiddleware from '../../lib/init-middleware'

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST'],
  })
)

const data = axios.get('/api/')

export default async function handler(req, res) {
  await cors(req, res)
  res.json({ message: 'Hello Everyone!' })
}
