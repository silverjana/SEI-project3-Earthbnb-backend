import jwt from "jsonwebtoken"
import CONSTS from "../consts.js"
import UserModel from "../models/user.js"

const auth = async (req, res, next) => {
  // we're grabbing the raw token from the authorization header
  const rawToken = req.headers.authorization

  console.log("HEADERS", req.headers)


  if (!rawToken) {
    return res
      .status(401)
      .json({ message: "Unauthorized - No token provided" })
  }

  const token = rawToken.split(" ")[1]

  try {

    const decodedToken = jwt.verify(token, CONSTS.JWT_SECRET)

    const authUser = await UserModel.findOne({
      userName: decodedToken.userName,
    })

    if (!authUser) {
      return res.status(401).json({
        message: "Token affiliated to user that does not exist anymore/",
      })
    }

    req.currentUser = authUser

    next()
  } catch (error) {
    next(error)
  }
}
export default auth