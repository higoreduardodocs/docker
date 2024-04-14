import 'colors'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import config from './config/index.js'
// import routes from './routes/index.js'

/* CONST */
const port = process.env.PORT || 3001
const mongoUri = `mongodb://${config.MONGO_USER}:${config.MONGO_PASS}@${config.MONGO_IP}:${config.MONGO_PORT}/${config.MONGO_DB}?authSource=admin`
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true }

/* START */
const app = express()
app.use(express.json())
app.enable('trusty proxy')
app.use(cors({}))

/* DATABASE */
const connectWithRetry = () => {
  mongoose.set('strictQuery', true)
  mongoose
    .connect(mongoUri, mongoOptions)
    .then(() => console.log(`Conneted to Mongo`.bgMagenta.white))
    .catch((e) => {
      console.log(`${error} did not connect db`.bgRed.white)
      setTimeout(connectWithRetry, 5000)
    })
}
connectWithRetry()

/* ROUTES */
// app.use('/api/v1', routes)

/* ERRORS */
app.use(function (err, req, res, next) {
  if (err instanceof Error) return res.status(400).json({ error: err?.message })

  return res.status(500).json(err?.message)
})

app.listen(port, (error) => {
  if (error) console.log(`${error} did not connect server`.bgRed.white)
  console.log(`http://localhost:${port}`)
})
