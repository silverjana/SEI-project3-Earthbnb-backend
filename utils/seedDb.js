import connectToDb from "./db.js"
import PropertyModel from "../models/property.js"
import seedingData from "./seedingData.js"
import mongoose from "mongoose"
import UserModel from "../models/user.js"

const seed = async () => {
  await connectToDb()
  console.log("Database is connected")

  await mongoose.connection.db.dropDatabase()

  const dbProperties = await PropertyModel.create(seedingData.properties)
  console.log(
    `${dbProperties.length} properties have been created succesfully in the database`
  )
  const dbUsers = await UserModel.create([
    seedingData.users.admin,
    seedingData.users.user
  ])
  console.log(
    `${dbUsers.length} users have been created succesfully in the database`
  )

  console.log(`Going to disconnect from db ${mongoose.connection.name}`)
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect()
  }

  console.log("All done. Database has been reset")
}

seed()