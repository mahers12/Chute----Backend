const Router = require('express').Router()
const controller = require('../controllers/OrderController')
const middleware = require('../middleware')

// Create a new order
Router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createOrder
)

// Get all orders
Router.get(
  '/',
  middleware.stripToken,
  middleware.admin,
  controller.getAllOrders
)

// Get a single order
Router.get(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getOrderById
)

// Update an order to 'paid' status
Router.put(
  '/:id/pay',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateOrderToPaid
)

// Update an order to 'delivered' status
router.put(
  '/:id/deliver',
  middleware.stripToken,
  middleware.admin,
  controller.updateOrderToDelivered
)

// Get logged in user's orders
router.get(
  '/myorders',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getMyOrders
)

module.exports = Router
