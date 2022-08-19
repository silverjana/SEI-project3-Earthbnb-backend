import dotenv from "dotenv"

dotenv.config()

const consts = {
  DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET || "JWT_SECRET",
}

export default consts 