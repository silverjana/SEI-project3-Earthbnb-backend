import PropertyModel from '../models/property'

//create / post in "/allproperties/:id"
const create = async (req, res, next) => {

  const { propertyId } = req.params

  try {
    const property = await PropertyModel.findById(propertyId);
    if (!property) {
      return res
        .status(404)
        .json({ message: `Property with id: ${propertyId} not found.` })
    }

    const hasReviewed = property.reviews.some(
      (comment) =>
        comment.createdBy.toString() === req.currentUser.id
    )
    if (hasReviewed) {
      return res.status(403).json({ message: "You already reviewed this property" })
    }


    // push onto the existing  array.
    const newReview = { ...req.body, createdBy: req.currentUser.id };
    property.reviews.push(newReview);

    // save to db
    await property.save();

    return res.status(200).json({
      message: "Review successfully created!",
      createdReview: newReview,
    })
  } catch (error) {
    next(error)
  }

}

//update
const update = async (req, res, next) => {
  const { propertyId, reviewId } = req.params
  const updatedReview = req.body
  const { id: userId } = req.currentUser

  try {
    const property = await PropertyModel.findById(propertyId)

    const reviewToUpdate = property.reviews.find(
      (review) => review.id === reviewId
    )
    if (
      reviewToUpdate.createdBy.toString() !== userId &&
      req.currentUser.role !== "admin"
    ) {
      return res.status(403).json({
        message: "Forbdiden. Not admin or user who created this review",
      })
    }

    property.reviews = property.reviews.map((review) => {
      if (review.id === reviewId) {
        return { ...review, ...updatedReview }
      } else {
        return review
      }
    })
    await property.save()

    return res.status(200).json({
      message: "Review has been updated",
      updatedComment: property.reviews.find((review) => review.id === reviewId),
    })
  } catch (error) {
    next(error)
  }
}



//remove

const remove = async (req, res, next) => {
  const { propertyId, reviewId } = req.params;
  const { id: userId } = req.currentUser;
  // console.log({ propertyId })
  // console.log({ reviewId })
  // console.log({ userId })

  try {
    const property = await PropertyModel.findById(propertyId)


    // can the user actually delete the comment?
    // find the specified comment in array
    // and check whether createdBy === req.currentUser.id
    // or whether the currentUser is admin. If both is false
    // return 403 - Forbidden
    const reviewToDelete = property.reviews.find(
      (review) => review.id === reviewId
    )
    if (
      reviewToDelete.createdBy.toString() !== userId &&
      req.currentUser.role !== "admin"
    ) {
      return res.status(403).json({
        message: "Forbidden. Not admin or user who created this review"
      })
    }

    // delete only the comment matching the Id in the request params
    property.reviews = property.reviews.filter(
      (review) => review.id !== reviewId
    );

    // saving the update back to the database
    const updatedReview = await property.save()

    return res.status(200).json({
      message: "Review successfully deleted",
      updatedReviews: property.reviews,
    })
  } catch (error) {
    next(error)
  }
}

export default { create, update, remove }