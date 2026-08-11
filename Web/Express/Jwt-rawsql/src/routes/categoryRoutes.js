const express = require('express')
const router = express.Router();
const categoryController = require('../controllers/categoryController')
const auth = require('../middlewares/auth')
const { validateCategoryCreate } = require('../middlewares/validation')
const { validateCategoryUpdate } = require('../middlewares/validation')

router.get('/', categoryController.getAll)
router.get('/:id', categoryController.getById)
router.post('/', auth, validateCategoryCreate, categoryController.create) // protected auth required
router.put('/:id', auth, validateCategoryUpdate, categoryController.update) // protected auth required
router.delete('/:id', auth, categoryController.remove) // protected auth required

module.exports = router