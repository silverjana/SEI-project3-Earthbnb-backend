const logger = (req, res, next) => {
  console.log(`incoming request: Method: ${req.method} - url: ${req.url}`)
  
  next()
}
export default logger
