const { Product } = require('../models/Product')

// Create a new product
const createProduct = async (req, res) => {
  try {
    let product = await Product.create(req.body)
    res.send(product)
  } catch (error) {
    throw error
  }
}

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll()
    res.send(products)
  } catch (error) {
    throw error
  }
}

// Get a product by ID
const getProductById = async (req, res) => {
  let { productId } = req.params
  try {
    const product = await Product.findOne({
      where: { id: productId }
    })
    if (!product) {
      return res.status(404).send({ message: 'Product not found' })
    }
    res.send(product)
  } catch (error) {
    throw error
  }
}

// Update a product by ID
const updateProductById = async (req, res) => {
  try {
    let productId = parseInt(req.params.productId)
    const [updated] = await Product.update(
      { ...req.body },
      {
        where: { id: productId }
      }
    )
    if (updated === 0) {
      return res.status(404).send({ message: 'Product not found' })
    }
    res.send({ message: 'Product updated successfully' })
  } catch (error) {
    throw error
  }
}

// Delete a product by ID
const deleteProduct = async (req, res) => {
  try {
    let productId = parseInt(req.params.productId)
    const deleted = await Product.destroy({ where: { id: productId } })
    if (deleted === 0) {
      return res.status(404).send({ message: 'Product not found' })
    }
    res.send({ message: `Deleted product with an ID of ${productId}!` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteProduct
}
