import express from "express"
import connectToDb from './utils/db.js'
import CONSTS from './consts.js'
import cors from "cors"
import logger from './middleware/logger.js'
import router from "./router.js"
import errorHandler from './middleware/errorHandler.js'
import dotenv from "dotenv"

// ! deployment - Move my code into a function.
async function startServer() {

  const app = express()
  dotenv.config()
  app.use(cors())

  app.use(express.json())

  app.use(logger)

  app.use(router)

  app.use(errorHandler)

  // make sure the connectToDb function
  // actually uses the connection string for the cloud database from the env variable
  await connectToDb()

  // app.use((req, res, next) => {
  //   return res.status(404).send("404 - Required endpoint not found.");
  // })


  app.listen(CONSTS.PORT, () =>
    console.log(`🚀 Express server running on port ${CONSTS.PORT} 🚀`)
  )
}

startServer()
