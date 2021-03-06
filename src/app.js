import express from 'express'
import bodyParser from 'body-parser'

import dreamRouter from './routes/dream'

const app = express()

app.set('json spaces', 2)
app.use(bodyParser.json())

app.get('/', (_, res) => {
  res.send('hello~')
})

app.use('/dreams', dreamRouter)

export default app
