// panggil fungsi pool config db
const pool = require('../config/db')

const getAll = async (req, res, next) => {
    try {
        // ambil semua data mahasiswa di db
        const [rows] = await pool.execute('SELECT * FROM mahasiswa ORDER BY id DESC');
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
        // ambil data mahasiswa spesifik dari db
        const [rows] = await pool.execute('SELECT * FROM mahasiswa WHERE id = ?', [id]);
        if (rows.length === 0) {
            res.status(404).json({
                message: 'Mahasiswa tidak ditemukan'
            })
        }
        res.json(rows[0])

    } catch (err) {
        next(err)
    }
}

const create = async (req, res, next) => {
    try {
        const { nama } = req.body
        const userId = req.user ? req.user.id : null; // ambil user id yang membuat

        const [result] = await pool.execute('INSERT INTO mahasiswa (nama, userId) VALUES (?, ?)', [nama, userId])
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

        const sql = `UPDATE mahasiswa SET ${fields.join(', ')} WHERE id = ?`;
        const [result] = await pool.execute(sql, values)

        if (result.affectedRows === 0){
            return res.status(404).json({
                message: 'Mahasiswa tidak ditemukan'
            })
        }
        res.json({
            message: 'Mahasiswa Diperbarui',
        })

    } catch (err) {
        next(err)
    }
}

const remove = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id, 10)
        const [result] = await pool.execute('DELETE FROM mahasiswa WHERE id = ?', [id])
        if (result.affectedRows === 0){
            return res.status(404).json({
                message: "Mahasiswa tidak ditemukan"
            })
        }
        res.json({
            message: 'Mahasiswa dihapus!'
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