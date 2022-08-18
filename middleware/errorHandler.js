const errorHandler = async ( error, req, res, next) =>{
  console.log('error', error._message) // see error message
  console.log('err keys', Object.keys(error))  // see keys
  
  console.log(error.name, error.code) // see name and code

  // if (error.name === '') {
  //     return res.status(400).json({ message: '*that error message*'})
  // }

  
   //at end
  return res.status(500).json({ message: 'Something went wrong' })
}
export default errorHandler