// panggil fungsi pool config db
const pool = require('../config/db')

const getAll = async (req, res, next) => {
    try {
        // ambil semua data kategori di db
        const [rows] = await pool.execute('SELECT * FROM categories ORDER BY id DESC');
        res.json({
            rows
        })
    } catch (err) {
        next(err)
    }
}

const getById = async (req, res, next) => {
    try {
        // ambil id dari param request
        const id = parseInt(req.params.id, 10);
        // ambil data category spesifik dari db
        const [rows] = await pool.execute('SELECT * FROM categories WHERE id = ?', [id]);
        if (rows.length === 0) {
            res.status(404).json({
                message: 'Category tidak ditemukan'
            })
        }
        res.json(rows[0])

    } catch (err) {
        next(err)
    }
}

const create = async (req, res, next) => {
    try {
        const { name, description } = req.body
        const userId = req.user ? req.user.id : null; // ambil user id yang membuat

        const [result] = await pool.execute('INSERT INTO categories (name, description, userId) VALUES (?, ?, ?)', [name, description || null, userId])
        res.status(201).json({
            id: result.insertId,
            name: name,
            description: description || null
        })
    } catch (err) {
        next(err)
    }
}

const update = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id, 10);
        const { name, description } = req.body;

        // build dynamic update (simple)
        const fields = []
        const values = []
        if (name !== undefined){
            fields.push('name = ?')
            values.push(name)
        }
        if (description !== undefined) {
            fields.push('description = ?');
            values.push(description)
        }
        if (fields.length === 0){
            return res.status(400).json({
                message : 'Nothing to update'
            })
        }

        // masukkan id ke array values
        values.push(id)

        const sql = `UPDATE categories SET ${fields.join(', ')} WHERE id = ?`;
        const [result] = await pool.execute(sql, values)

        if (result.affectedRows === 0){
            return res.status(404).json({
                message: 'Category tidak ditemukan'
            })
        }
        res.json({
            message: 'Category Diperbarui',
            data: result
        })

    } catch (err) {
        next(err)
    }
}

const remove = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id, 10)
        const [result] = await pool.execute('DELETE FROM categories WHERE id = ?', [id])
        if (result.affectedRows === 0){
            return res.status(404).json({
                message: "Category tidak ditemukan"
            })
        }
        res.json({
            message: 'Category dihapus!'
        })
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
} 