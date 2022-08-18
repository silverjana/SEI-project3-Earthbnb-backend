import express from "express"

const router = express.Router()

//! Routes for all
router
  .route("/AllProperies")
  .get(propertiesController.getAll)
  .post(propertiesController.create)

//! routes for our individual properties

router
  .route("/AllPropterties/:id")
  .get(propertiesController.getIndividual)

  .put(propertiesController.update)
  .delete(propertiesController.remove)

//! Auth routes 

router.route("/register").post(userController.register)
router.route("/login").post(userController.login)


export default router