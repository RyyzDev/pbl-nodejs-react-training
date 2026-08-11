const express = require('express')
const router = express.Router();

// import controller
const controller = require('../controllers/productsController')

//POST /api/products (Create data)
router.post('/', controller.createNewProduct)

// GET /api/products (Read All)
router.get('/', controller.getAllProducts);

// GET /api/products/:id (Read data by id)
router.get('/:id', controller.getProductById);

// PUT /api/products/:id (Update data by id)
router.put('/:id', controller.updateProductById);

// DELETE /api/products/:id (DELETE DATA BY ID)
router.delete('/:id', controller.deleteProductById);


module.exports = router