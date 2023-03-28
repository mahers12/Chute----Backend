const Router = require('express').Router()
const controller = require('../controllers/ReviewController')
const middleware = require('../middleware')

Router.get('/:user', controller.GetReviewsByUserId)

Router.post(
  '/create-consumer/:consumer_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateReview
)

Router.put(
  '/update-review/:review_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateReview
)
Router.delete(
  '/delete/:review_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteReview
)

module.exports = Router
