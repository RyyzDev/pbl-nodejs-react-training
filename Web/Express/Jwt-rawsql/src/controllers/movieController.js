// panggil fungsi pool config db
const pool = require('../config/db')

const getAll = async (req, res, next) => {
    try {
        // ambil semua data kategori di db
        const [rows] = await pool.execute(
            `SELECT * 
             FROM movies m
             LEFT JOIN categories c ON m.categoryId = c.id
             ORDER BY m.id DESC`
        );
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
        // ambil data movie spesifik dari db
        const [rows] = await pool.execute(
            `SELECT * 
             FROM movies m
             LEFT JOIN categories c ON m.categoryId = c.id
             WHERE m.id = ?`, [id]
        );
        if (rows.length === 0) {
            res.status(404).json({
                message: 'Movie tidak ditemukan'
            })
        }
        res.json(rows[0])

    } catch (err) {
        next(err)
    }
}

const create = async (req, res, next) => {
    try {
        const { title, year, categoryId } = req.body
        const userId = req.user ? req.user.id : null; // ambil user id yang membuat

        const [result] = await pool.execute('INSERT INTO movies (title, year, categoryId, userId) VALUES (?, ?, ?, ?)', [title, year || null, categoryId || null, userId])
        res.status(201).json({
            id: result.insertId,
            title: title,
            year: year || null,
            categoryId: categoryId || null,
        })
    } catch (err) {
        next(err)
    }
}

const update = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id, 10);
        const { title, year, categoryId } = req.body;

        // build dynamic update (simple)
        const fields = []
        const values = []
        if (title !== undefined){
            fields.push('title = ?')
            values.push(title)
        }
        if (year !== undefined) {
            fields.push('year = ?');
            values.push(year)
        }
        if (categoryId !== undefined) {
            fields.push('categoryId = ?');
            values.push(categoryId)
        }
        if (fields.length === 0){
            return res.status(400).json({
                message : 'Nothing to update'
            })
        }

        // masukkan id ke array values
        values.push(id)

        const sql = `UPDATE movies SET ${fields.join(', ')} WHERE id = ?`;
        const [result] = await pool.execute(sql, values)

        if (result.affectedRows === 0){
            return res.status(404).json({
                message: 'Movie tidak ditemukan'
            })
        }
        res.json({
            message: 'Movie Diperbarui',
            data: result
        })

    } catch (err) {
        next(err)
    }
}

const remove = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id, 10)
        const [result] = await pool.execute('DELETE FROM movies WHERE id = ?', [id])
        if (result.affectedRows === 0){
            return res.status(404).json({
                message: "Movie tidak ditemukan"
            })
        }
        res.json({
            message: 'Movie dihapus!'
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