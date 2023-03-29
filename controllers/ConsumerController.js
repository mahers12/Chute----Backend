const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { Consumer } = require('../models/Consumer')

const Register = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const consumer = await Consumer.create({
      username: req.body.username,
      password: hashedPassword
    })
    const token = createToken(consumer)
    res.status(201).send({ auth: true, token: token })
  } catch (error) {
    console.log(error)
    res.status(500).send('Error registering consumer')
  }
}

const Login = async (req, res) => {
  try {
    const consumer = await Consumer.findOne({
      where: { username: req.body.username }
    })
    if (!consumer) {
      return res.status(404).send('Consumer not found')
    }
    const passwordIsValid = await bcrypt.compare(
      req.body.password,
      consumer.password
    )
    if (!passwordIsValid) {
      return res.status(401).send({ auth: false, token: null })
    }
    const token = createToken(consumer)
    res.send({ auth: true, token: token })
  } catch (error) {
    console.log(error)
    res.status(500).send('Error logging in consumer')
  }
}

const UpdatePassword = async (req, res) => {
  try {
    const consumerId = req.params.consumer_id
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    await Consumer.update(
      { password: hashedPassword },
      { where: { id: consumerId } }
    )
    res.status(200).send('Password updated')
  } catch (error) {
    console.log(error)
    res.status(500).send('Error updating consumer password')
  }
}

module.exports = {
  Register,
  Login,
  UpdatePassword
}
