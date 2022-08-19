import express from "express"

const router = express.Router()

//! Routes for all
router
  .route("/allproperties")
  .get(propertiesController.getAll)

//! routes for our individual properties
router
  .route("/allproperties/:id")
  .get(propertiesController.getIndividual)

  .put(propertiesController.update)
  .delete(propertiesController.remove)

//! reviews
router
  .route("/allproperties/:id/:commentId")
  .post(reviewController.create)
  .put(reviewController.update)
  .delete(reviewController.remove)

//! create property
router
  .route("/addproperty")
  .post(propertiesController.create)

//! user routes 
router.route("/register").post(userController.register)
router.route("/login").post(userController.login)

router.route("/:userid").get(userController.userData)


export default router