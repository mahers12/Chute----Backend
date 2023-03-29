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
Router.get('/', middleware.stripToken, middleware.admin, controller.getOrders)

// Get a single order
Router.get(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getOrdersByConsumerId
)

// Update an order to 'paid' status
Router.put(
  '/:id/pay',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateOrderById
)

// Update an order to 'delivered' status
Router.put(
  '/:id/deliver',
  middleware.stripToken,
  middleware.admin,
  controller.updateOrderToDelivered
)

Router.delete(
  '/delete/order',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteOrder
)

module.exports = Router
