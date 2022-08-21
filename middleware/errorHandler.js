const errorHandler = async (error, req, res, next) => {
  console.log('error', error._message) // see error message
  console.log('err keys', Object.keys(error))  // see keys

  console.log(error.name, error.code) // see name and code

  if (error.name === "CastError") {
    return res.status(400).json({ message: "Invalid Object ID." })
  }
  if (error.name === "JsonWebTokenError") {
    return res.status(401).json({ message: "Invalid JsonWebToken" })
  }

  return res.status(500).json({ message: "Something went wrong" })
}

export default errorHandler;