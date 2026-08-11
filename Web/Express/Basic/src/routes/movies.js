// import package express
const express = require('express');
// import fungsi router express
const router = express.Router();

// mock data dummy
const movies = [
  { id: 1, title: 'Harry Potter and the Sorcerer\'s Stone', year: 2001 },
  { id: 2, title: 'The Dark Knight', year: 2008 },
  { id: 3, title: 'Inception', year: 2010 },
  { id: 4, title: 'Interstellar', year: 2014 },
  { id: 5, title: 'Parasite', year: 2019 },
  { id: 6, title: 'Spirited Away', year: 2001 },
  { id: 7, title: 'Everything Everywhere All at Once', year: 2022 },
  { id: 8, title: 'Dune: Part Two', year: 2024 },
  { id: 9, title: 'Stranger Things', year: 2016 },
  { id: 10, title: 'The Matrix', year: 1999 },
  { id: 11, title: 'Spider-Man: Into the Spider-Verse', year: 2018 },
  { id: 12, title: 'Get Out', year: 2017 },
  { id: 13, title: 'Breaking Bad', year: 2008 },
  { id: 14, title: 'Avatar: The Way of Water', year: 2022 },
  { id: 15, title: 'Whiplash', year: 2014 }
];

// GET /api/movies/ (Read All)
router.get('/', (req, res) => {
    res.json(movies);
})

// GET /api/movies/:id (Read by id)
router.get('/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if(!movie){
        res.status(404).json({
            message: 'movie not found!'
        })
    }else{
        res.json(movie)
    }
})

// POST /api/movies (Create data)
router.post('/', (req, res) => {
    const newMovie = {
        id: movies.length + 1,
        title: req.body.title,
        year: req.body.year
    }

    movies.push(newMovie);
    res.status(201).json({
        message: 'success create new movies',
        data: newMovie
    })
})

// PUT /api/movies/:id (Update data)
router.put('/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if (!movie) {
        return res.status(404).json({ message: 'Data not found' });
    }

    movie.title = req.body.title || movie.title;
    movie.year = req.body.year || movie.year;

    res.status(200).json({
        message: 'Movie updated successfully',
        data: movie
    });
});

// DELETE /api/movies/:id (Delete data)
router.delete('/:id', (req, res) => {
    const movie = movies.filter(m => m.id === parseInt(req.params.id));
    if(!movie){
        res.status(404).json({
            message: 'data Not found'
        })
    }
    res.status(200).json({
        message: 'Success Deleted data'
    })
})


module.exports = router