// import package koneksi prisma
import prisma from '../config/utils.js'

// READ
const getAllCategories = async (req, res) => {
    try {
        const categories = await prisma.category.findMany({
            include: { movies: true }
        })
        return res.status(200).json(categories)
    }catch (error){
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' })
    }
}

const getCategoryById = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const category = await prisma.category.findUnique({
            where: { id },
            include: { movies: true }
        })

        if (!category){
            return res.status(404).json({
                message: 'Category not found'
            })
        }
        return res.status(200).json(category)
    } catch (error){
        console.error(error)
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
}


// MUTATION

const createCategory = async (req, res) => {
    try {
        const { name, description } = req.body
        const category = await prisma.category.create({
            data: {name, description}
        })

        return res.status(201).json(category)
    } catch (error) {
        console.error(error)
        return res.status(400).json({
            message: error.message
        })
    }
}

const updateCategory = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const { name, description } = req.body

        const category = await prisma.category.update({
            where: {id},
            data: { name, description }
        })

        return res.json(category);
    } catch(error) {
        console.error(error)
        if (error.code === 'P2025'){
            return res.status(404).json({
                message: 'Category not found'
            })
        }

        return res.status(400).json({
            message: error.message
        })
    }
}


const deleteCategory = async (req, res) => {
    try {
        const id = parseInt(req.params.id)

        await prisma.category.delete({
            where: { id }
        })

        return res.status(200).json({
            message: 'Category Deleted'
        })
    } catch (error) {
        console.error(error)
        if (error.code === 'P2025'){
            return res.status(404).json({
                message: 'Category not found'
            })
        }

        return res.status(400).json({
            message: error.message
        })
    }
}

export default {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}