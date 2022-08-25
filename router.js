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
  .route("/all-properties")
  .get(propertiesController.getAll)

//! routes for our individual properties
router
  .route("/properties/:id")
  .get(propertiesController.getIndividual)

  .put(auth, propertiesController.update)
  .delete(propertiesController.remove)


//! create property
router
  .route("/add-property")
  .post(auth, propertiesController.create)
  // .post(auth, imagesController.create)

//! reviews
router.route("/:propertyId/review").post(auth, reviewController.create)

//reviews?
//propertyId in body?

router
  .route("/properties/:propertyId/reviews/:reviewId")
  .put(auth, reviewController.update)
  .delete(auth, reviewController.remove)


//reviews/:reviewId endpoint

//! user routes 
router.route("/register").post(userController.register)
router.route("/login").post(userController.login)

router.route("/user-profile").get(auth, userController.userData)

router.route("/user/:reviewId").get(auth, userController.sendOne )


export default router