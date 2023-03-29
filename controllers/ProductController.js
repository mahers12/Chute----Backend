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
    const product = await Product.findByPk(productId)
    res.send(product)
  } catch (error) {
    throw error
  }
}

// Update a product by ID
const updateProductById = async (req, res) => {
  try {
    let productId = parseInt(req.params.productId)
    const updatedProduct = await Product.update(
      { ...req.body },
      {
        where: { id: productId },
        returning: true
      }
    )
    res.send(updatedProduct)
  } catch (error) {
    throw error
  }
}

// Delete a product by ID
const deleteProduct = async (req, res) => {
  try {
    let productId = parseInt(req.params.productId)
    await Product.destroy({ where: { id: productId } })
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
