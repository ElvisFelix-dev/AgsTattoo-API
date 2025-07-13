import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import dotEnv from 'dotenv'

dotEnv.config()

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('📊 connected to db')
  })
  .catch((err) => {
    console.log(err.message)
  })

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3333, () => {
  console.log(`💻 server running`)
})