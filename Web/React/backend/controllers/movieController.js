// init config prisma
import prisma from '../config/utils.js'

/* 
    READ Function
*/
const getAllMovies = async (req, res) => {
    try {
        const movies = await prisma.movie.findMany({
            include: {category: true } //menyertakan data category
        });

        return res.status(200).json(movies)

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: "internal server error"
        })
    }
}

const getMovieById = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const movie = await prisma.movie.findUnique({
            where: {id},
            include: { category: true}
        })

        return res.status(200).json({
            message: "Success get data by id",
            data: movie
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'internal server error'
        })
    }
}

/* 
    Mutation Function
*/
const createMovie = async (req, res) => {
    try{
        const { title, year, categoryId } = req.body;
        const data = { title, year: parseInt(year) };

        // jika categoryId disertakan, set categoryId
        if (categoryId !== undefined && categoryId !== null){
            data.categoryId = parseInt(categoryId);
        }

        const movie = await prisma.movie.create({
            data,
            include: { category: true }
        })

        return res.status(201).json(movie)
    
    } catch (error){
        console.error(error)
        return res.status(400).json({
            message: error.message
        })
    }
}


const updateMovie = async (req, res) => {
    try{
        const id = parseInt(req.params.id)
        const { title, year, categoryId } = req.body;
        const data = { title, year: parseInt(year) };

        // jika categoryId disertakan, set categoryId
        if ('categoryId' in req.body){
            data.categoryId = categoryId === null ? null : parseInt(categoryId);
        }

        const movie = await prisma.movie.update({
            where: { id },
            data,
            include: { category: true }
        })

        return res.status(200).json(movie)
    
    } catch (error){
        console.error(error)
        return res.status(400).json({
            message: error.message
        })
    }
}


const deleteMovie = async (req, res) => {
    try {
        const id = parseInt(req.params.id)

        await prisma.movie.delete({
            where: { id }
        })

        return res.status(200).json({
            message: 'success deleted'
        })
        
    } catch (error){
        console.error(error)
        if (error.code === 'P2025'){
            return res.status(404).json({
                message: 'Movie not found'
            })
        }
        
        return res.status(500).json({
            message: 'Internal server error'
        })
        
    }
}


export default {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
}