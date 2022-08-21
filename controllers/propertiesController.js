import PropertyModel from "../models/property.js"

//getAll

const getAll = async (req, res, next) => {
  const allProperties = await PropertyModel.find()
  return res.status(200).json(allProperties)
}

const getIndividual = async (req, res, next) => {
  //here we need to get the id from the url created using params on the request
  const { propertyId: id } = req.params

  // use Mongoose.findbyId method to query document with given ID
  // we can return this body and populate it with the created by property so we know which user created the document and use this information to allow them to edit.



  try {
    const foundProperty = await PropertyModel.findById(id).populate(
      "createdBy",
      "-password"
    )
    // if not found memeber return response status 404 and a message
    if (!foundProperty) {
      return res.status(404).json({ message: `Property with id ${id} could not be found.` })
    }
    return res.status(200).json(foundProperty)
  } catch (error) {
    next(error)
  }
}

const create = async (req, res) => {
  const { body: newProperty } = req
  // create new document based on document model and user input

  try {
    // if admin then create new document by spreading in newProperty, with createdBy property from the req's currentUser id: 

    const createdDocument = await PropertyModel.create({ ...newProperty, createdBy: req.currentUser.id })
    console.log(req.currentUser)
    // return created database document with ID and createdAt property
    return res.status(200).json(createdDocument)
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong", error })
  }
}

// Similar with updating document - only the creator or admin are allowed to update

const update = async (req, res, next) => {
  const { propertyId: id } = req.params
  const { body: updatedProperty } = req


  try {
    //first we need to find the document to update using mongoose method findById (to find id in DB) This is stored to a variable
    const documentToUpdate = await PropertyModel.findById(id)


    // if this document cannot be found return this error message
    if (!documentToUpdate) {
      return res.status(404).json({ message: `Property with id ${id} could not be found` })
    }
    // now if the document's creator is not the same as the current user making the request && if the role of the current user making the request is not admin we need to return a message to say FORBIDDEN action: NB: the value of createdBy must be converted first into a String before we can compare datatypes. 

    if (
      documentToUpdate.createdBy.toString() !== req.currentUser.id && req.currentUser.role !== "admin"
    ) {
      return res.status(403).json({ message: "Forbidden. Not allowed to update this resource" })
    }

    // otherwise return the updatedDocument from the database once updated

    const updatedDocument = await PropertyModel.findByIdAndUpdate(id, updatedProperty, {
      new: true,
    })
    return res.status(200).json(updatedDocument)
  } catch (error) {

    next(error)
  }
}

//delete

const remove = async (req, res, next) => {
  const { propertyId: id } = req.params

  try {

    const deletedDocument = await PropertyModel.findByIdAndDelete(id)

    if (!deletedDocument) {
      return res.status(404).json({ message: `Property with id ${id} could not be found!` })
    }

    return res.status(200).json({ message: `Property with id ${id} has been successfully deleted!`, deletedDocument })
  } catch (error) {
    next(error)
  }
}

export default {
  getAll,
  getIndividual,
  create,
  update,
  remove,
}

