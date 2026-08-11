const express = require('express')
const router = express.Router();
const movieController = require('../controllers/movieController')
const auth = require('../middlewares/auth')
const { validateMovieCreate } = require('../middlewares/validation')
const { validateMovieUpdate } = require('../middlewares/validation')

router.get('/', movieController.getAll)
router.get('/:id', movieController.getById)
router.post('/', auth, validateMovieCreate, movieController.create) // protected auth required
router.put('/:id', auth, validateMovieUpdate, movieController.update)// protected auth required
router.delete('/:id', movieController.remove)// protected auth required

module.exports = router