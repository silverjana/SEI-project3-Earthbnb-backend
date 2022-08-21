import express from "express"
import propertiesController from './controllers/propertiesController.js'
import reviewController from './controllers/reviewController.js'
import userController from './controllers/userController.js'
import auth from './middleware/auth.js'

const router = express.Router()
//! landing check
router.route("/").get((req, res) => res.status(200).send('API running'))

//! Routes for all
router
  .route("/allproperties")
  .get(propertiesController.getAll)

//! routes for our individual properties
router
  .route("/allproperties/:propertyId")
  .get(propertiesController.getIndividual)

  .put(propertiesController.update)
  .delete(propertiesController.remove)

  .post(reviewController.create)

//! reviews
router
  .route("/allproperties/:propertyId/:commentId")

  .put(reviewController.update)
  .delete(reviewController.remove)

//! create property
router
  .route("/addproperty")
  .post(propertiesController.create)

//! user routes 
router.route("/register").post(userController.register)
router.route("/login").post(userController.login)

//router.route("/:userid").get(userController.userData)


export default router