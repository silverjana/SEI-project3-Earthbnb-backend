import express from "express"



const app = express()

app.use(express.json())

const startServer = async () => {
  await connectToDb()
  console.log("Database has connected successfully");

  app.listen(CONSTS.PORT, () => {
    console.log(`🚀 Express server running on port ${CONSTS.PORT} 🚀`);
  })
}
// hello - Ari
startServer()
