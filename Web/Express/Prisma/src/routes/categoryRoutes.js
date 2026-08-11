// import package express
const express = require('express')
// init fungsi router express
const router = express.Router();
// import controller category
const categoryController = require('../controllers/categoryController')
// import validation category dari middleware validation
const { categoryValidation } = require('../middleware/validation')

//Routing
router.get('/', categoryController.getAllCategories)
router.get('/:id', categoryController.getCategoryById)
router.post('/', categoryValidation, categoryController.createCategory)
router.put('/:id', categoryValidation, categoryController.updateCategory)
router.delete('/:id', categoryController.deleteCategory)

module.exports = router