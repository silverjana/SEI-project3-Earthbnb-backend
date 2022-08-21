import dotenv from "dotenv"

dotenv.config()

const consts = {
<<<<<<< HEAD
  DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING || "mongodb://localhost:27017/allproperties",
=======
  DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
>>>>>>> a0ba71e5128842d622dc09e883ddf1f620ac8eea
  PORT: process.env.PORT || 4000,
  JWT_SECRET: process.env.JWT_SECRET || "JWT_SECRET",
}

export default consts 