import express from "express"
import connectToDb from './utils/db.js'
import CONSTS from './consts.js'
import cors from "cors"
import logger from './middleware/logger.js'
import router from "./router.js"

const app = express()

app.use(cors())

app.use(express.json())

app.use(logger)

app.use(router)

app.use((req, res, next) => {
  return res.status(404).send("404 - Required endpoint not found.");
})

const startServer = async () => {
  await connectToDb()
  console.log("Database has connected successfully");

  app.listen(CONSTS.PORT, () => {
    console.log(`🚀 Express server running on port ${CONSTS.PORT} 🚀`);
  })
}

startServer()
