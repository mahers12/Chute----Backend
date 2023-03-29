const { Router } = require('express')
const express = require('express')
const Router = express.Router()
const productController = require('../controllers/ProductController')

Router.post('/products', productController.createProduct)
Router.get('/products', productController.getProducts)
Router.get('/products/:productId', productController.getProductById)
Router.put('/products/:productId', productController.updateProductById)
Router.delete('/products/:productId', productController.deleteProduct)

module.exports = Router
