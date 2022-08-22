import jwt from "jsonwebtoken"
import CONSTS from "../consts.js"
import UserModel from "../models/user.js"

const auth = async (req, res, next) => {
  // grab the raw token from the authorization in req header
  const rawToken = req.headers.authorization

  //  check rawToken exist, -> error mex
  if (!rawToken) {
    return res.status(401).json({ message: "Unauthorized - No token provided" })
  }

  //   remove "Bearer " from rawToken and turn into new variable token
  const token = rawToken.split(" ")[1]

  //?   make sure token was signed by us and is not expired


  try {
    // use the jwt.verify(token to verify, secret string)
    const decodedToken = jwt.verify(token, CONSTS.JWT_SECRET)

    // does the user in  token exist?
    const authUser = await UserModel.findOne({ userName: decodedToken.userName })

    //   if user doesn't exist anymore -> err
    if (!authUser) {
      return res.status(401).json({ message: 'Token affiliated to user that does not exist anymore' })
    }

    //  if user still exists and token was verified
    // -> alter the request and attach "currentUser" property:
    req.currentUser = authUser
    next()

  } catch (error) {
    next(error)
  }

}
export default auth