// import package express
import express from 'express'
// import controller category
import categoryController from '../controllers/categoryController.js'

// init fungsi router express
const router = express.Router();

//Routing
router.get('/', categoryController.getAllCategories)
router.get('/:id', categoryController.getCategoryById)
router.post('/',  categoryController.createCategory)
router.put('/:id', categoryController.updateCategory)
router.delete('/:id', categoryController.deleteCategory)

export default router