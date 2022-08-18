import connectToDb from "./db.js"
// import PropertyModel from
import seedingData from "./seedingData.js
import mongoose from "mongoose"
//import userModel

const seed = async () => {
  await connectToDb()
  console.log("Database is connected")

  await mongoose.connection.db.dropDatabase()

  const dbMembers = await PropertyModel.create(seedingData.properties)
  console.log(
    `${dbProperties.length} properties have been created succesfully in the database`
  )

  console.log(`Going to disconnect from db ${mongoose.connection.name}`)
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect()
  }

  console.log("All done. Database has been reset")
}

seed()