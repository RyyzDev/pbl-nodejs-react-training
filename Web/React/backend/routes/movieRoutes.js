// import package express
import express from 'express'
// import controller movie
import movieController from '../controllers/movieController.js'

// init fungsi router express
const router = express.Router()

// Routing
router.get('/', movieController.getAllMovies);
router.get('/:id', movieController.getMovieById);
router.post('/',  movieController.createMovie);
router.put('/:id', movieController.updateMovie);
router.delete('/:id', movieController.deleteMovie);

export default router