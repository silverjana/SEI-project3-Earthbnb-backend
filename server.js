const app = express()

const startServer = async () => {
  await connectToDb()
  console.log("Database has connected successfully");

  app.listen(CONSTS.PORT, () => {
    console.log(`🚀 Express server running on port ${CONSTS.PORT} 🚀`);
  })
}
// branch check - Ari
startServer()