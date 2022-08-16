import { config } from 'dotenv'
config()

import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors({ origin: '*' }))

app.get('/', (_, res) => res.status(200).json({ message: 'OOLALA' }))

app.listen(process.env.PORT || 3001, () => console.log('Server started'))