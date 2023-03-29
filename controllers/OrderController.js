const { Order } = require('../models/Order')

// Create a new order
const createOrder = async (req, res) => {
  console.log('test')
  try {
    let consumerId = parseInt(req.params.consumerId)
    console.log(consumerId)
    let orderBody = {
      consumerId: consumerId,
      ...req.body
    }
    console.log(req.body)
    let order = await Order.create(orderBody)
    res.send(order)
  } catch (error) {
    throw error
  }
}

const getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll()
    res.send(orders)
  } catch (error) {
    throw error
  }
}

const getOrdersByConsumerId = async (req, res) => {
  let { consumerId } = req.params
  try {
    const consumer = await Order.findAll({
      where: { consumerId: consumerId }
    })
    res.send(consumer)
  } catch (error) {
    throw error
  }
}

// Update an order by ID
const updateOrderById = async (req, res) => {
  try {
    let orderId = parseInt(req.params.orderId)
    const updatedOrder = await Order.update(
      { ...req.body },
      {
        where: { id: orderId },
        returning: true
      }
    )
    res.send(updatedOrder)
  } catch (error) {
    throw error
  }
}

// Delete an order by ID
const deleteOrder = async (req, res) => {
  try {
    let orderId = parseInt(req.params.orderId)
    await Order.destroy({ where: { id: orderId } })
    res.send({ message: `Deleted order with an ID of ${orderId}!` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  createOrder,
  getOrdersByConsumerId,
  getOrders,
  updateOrderById,
  deleteOrder
}
