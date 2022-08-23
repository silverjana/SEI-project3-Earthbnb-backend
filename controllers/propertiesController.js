import PropertyModel from "../models/property.js"

//getAll

const getAll = async (req, res, next) => {
  const allProperties = await PropertyModel.find()
  return res.status(200).json(allProperties)
}

const getIndividual = async (req, res, next) => {

  const { id } = req.params;


  try {
    const foundProperty = await PropertyModel.findById(id).populate(
      'createdBy',
      '-password'
    )

    if (!foundProperty) {
      return res
        .status(404)
        .json({ message: `Property with id ${id} could not be found.` })
    }

    console.log(foundProperty)

    return res.status(200).json(foundProperty)
  } catch (error) {
    next(error)
  }
}



// Create endpoint to create a new Property in database
// Get new Property from request.body element
const create = async (req, res) => {
  const { body: newProperty } = req
  try {
    const createdDocument = await PropertyModel.create({
      ...newProperty,
      createdBy: req.currentUser.id,
    })
    console.log(req.currentUser.id)
    return res.status(200).json(createdDocument)
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong', error })
  }
  // returning created database document with ID and createdAt property
}

// Similar with updating document - only the creator or admin are allowed to update

const update = async (req, res, next) => {

  // console.log("you are here trying to update property")

  const { id } = req.params
  console.log(id)
  const { body: updatedProperty } = req
  console.log(updatedProperty)

  try {
    const documentToUpdate = await PropertyModel.findById(id)

    if (!documentToUpdate) {
      return res.status(404).json({ message: `Property ${id} could not be found` })
    }

    if (
      documentToUpdate.createdBy !== req.currentUser.id &&
      req.currentUser.role !== "admin"
    ) {
      return res
        .status(403)
        .json({ message: "Forbidden. Not allowed to update this resource" })
    }

    const updatedDocument = await PropertyModel.findByIdAndUpdate(id, updatedProperty, {
      new: true,
    })

    return res.status(200).json(updatedDocument);
  } catch (error) {
    next(error);
  }
}

//delete

const remove = async (req, res, next) => {
  const { id } = req.params

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

