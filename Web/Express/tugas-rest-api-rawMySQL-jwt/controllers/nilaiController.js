// panggil fungsi pool config db
const pool = require('../config/db')

const getAll = async (req, res, next) => {
    try {
        // ambil semua data nilai di db
        const [rows] = await pool.execute(`
            SELECT * 
            FROM nilai n
            LEFT JOIN mahasiswa m
            ON n.mahasiswa_id = m.id
            LEFT JOIN mata_kuliah mk
            ON n.mata_kuliah_id = mk.id
            ORDER BY m.id DESC 
            `);
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
        // ambil data nilai spesifik dari db
        const [rows] = await pool.execute('SELECT * FROM nilai WHERE id = ?', [id]);
        if (rows.length === 0) {
            res.status(404).json({
                message: 'nilai tidak ditemukan'
            })
        }
        res.json(rows[0])

    } catch (err) {
        next(err)
    }
}

const create = async (req, res, next) => {
    try {
        const { mata_kuliah_id, mahasiswa_id,  skor } = req.body
        const userId = req.user ? req.user.id : null; // ambil user id yang membuat

        const [result] = await pool.execute('INSERT INTO nilai (nama, userId) VALUES (?, ?)', [nama, userId])
        res.status(201).json({
            id: result.insertId,
            name: nama
        })
    } catch (err) {
        next(err)
    }
}

const update = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id, 10);
        const { nama } = req.body;

        // build dynamic update (simple)
        const fields = []
        const values = []
        if (nama !== undefined){
            fields.push('nama = ?')
            values.push(nama)
        }
        if (fields.length === 0){
            return res.status(400).json({
                message : 'Nothing to update'
            })
        }

        // masukkan id ke array values
        values.push(id)

        const sql = `UPDATE nilai SET ${fields.join(', ')} WHERE id = ?`;
        const [result] = await pool.execute(sql, values)

        if (result.affectedRows === 0){
            return res.status(404).json({
                message: 'nilai tidak ditemukan'
            })
        }
        res.json({
            message: 'nilai Diperbarui',
        })

    } catch (err) {
        next(err)
    }
}

const remove = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id, 10)
        const [result] = await pool.execute('DELETE FROM nilai WHERE id = ?', [id])
        if (result.affectedRows === 0){
            return res.status(404).json({
                message: "nilai tidak ditemukan"
            })
        }
        res.json({
            message: 'nilai dihapus!'
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