const { Consumer } = require('../models/Consumer')

// Create a new consumer
const createConsumer = async (req, res) => {
  try {
    let consumer = await Consumer.create(req.body)
    res.send(consumer)
  } catch (error) {
    throw error
  }
}

// Get all consumers
const getConsumers = async (req, res) => {
  try {
    const consumers = await Consumer.findAll()
    res.send(consumers)
  } catch (error) {
    throw error
  }
}

// Get a consumer by ID
const getConsumerById = async (req, res) => {
  let { consumerId } = req.params
  try {
    const consumer = await Consumer.findOne({
      where: { id: consumerId }
    })
    if (!consumer) {
      return res.status(404).send({ message: 'Consumer not found' })
    }
    res.send(consumer)
  } catch (error) {
    throw error
  }
}

// Update a consumer by ID
const updateConsumerById = async (req, res) => {
  try {
    let consumerId = parseInt(req.params.consumerId)
    const [updated] = await Consumer.update(
      { ...req.body },
      {
        where: { id: consumerId }
      }
    )
    if (updated === 0) {
      return res.status(404).send({ message: 'Consumer not found' })
    }
    res.send({ message: 'Consumer updated successfully' })
  } catch (error) {
    throw error
  }
}

// Delete a consumer by ID
const deleteConsumer = async (req, res) => {
  try {
    let consumerId = parseInt(req.params.consumerId)
    const deleted = await Consumer.destroy({ where: { id: consumerId } })
    if (deleted === 0) {
      return res.status(404).send({ message: 'Consumer not found' })
    }
    res.send({ message: `Deleted consumer with an ID of ${consumerId}!` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  createConsumer,
  getConsumers,
  getConsumerById,
  updateConsumerById,
  deleteConsumer
}
