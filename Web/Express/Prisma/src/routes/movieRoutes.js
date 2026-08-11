// import package express
const express = require('express')
// init fungsi router express
const router = express.Router()
// import controller movie
const movieController = require('../controllers/movieController')
// import fungsi validasi movie dari middleware validasi
const { validationBodyMovies } = require('../middleware/validation')

// Routing
router.get('/', movieController.getAllMovies);
router.get('/:id', movieController.getMovieById);
router.post('/', validationBodyMovies, movieController.createMovie);
router.put('/:id', validationBodyMovies, movieController.updateMovie);
router.delete('/:id', movieController.deleteMovie);

module.exports = router