// panggil pool config db
const pool = require('../config/db')
// import package hashing bcrypt
const bcrypt = require('bcrypt')
// import package
const jwt = require('jsonwebtoken')
// import dotenv
require('dotenv').config()

// panggil jwt secret
const jwtSecret = process.env.JWT_SECRET;
// kondisi
if(!jwtSecret){
    throw new Error('JWT secret Belum di set')
}

// berapa kali putaran algoritma enkripsi
const SALT_ROUNDS = 10;

const register = async (req, res, next) => {
    try {
        const { email, password, name } = req.body;

        // validasi sederhana
        if(!email || !password){
            return res.status(400).json({
                message: 'email dan password wajib diisi'
            })
        }
        if (password.length < 6){
            return res.status(400).json({
                message: 'password minimal 6 karakter'
            })
        }

        // hashing password
        const hashed = await bcrypt.hash(password, SALT_ROUNDS);

        // insert user ke database
        const [result] = await pool.execute(
            'INSERT INTO users (email, name, password) VALUES (?, ?, ?)',
            [email, name || null, hashed]
        )

        // ambil id user yang baru insert
        const insertedId = result.insertId;
        // response
        return res.status(201).json({
            id: insertedId,
            email,
            name: name || null
        })
    } catch (err) {
        next(err)
    }
}

const login = async (req, res, next) => {
    try {
        // destructuring body request
        const { email, password } = req.body;
        if(!email || !password) {
            return res.status(400).json({
                message: 'email dan password wajib'
            })
        }

        // ambil user dari database
        const [rows] = await pool.execute('SELECT * FROM users WHERE email = ?', [email])
        // kondisi jika tidak ada data yang valid
        if (rows.length === 0) {
            return res.status(401).json({
                message: 'Invalid credentials'
            })
        }

        // ambil data user
        const user = rows[0];

        // bandingkan password
        const match = await bcrypt.compare(password, user.password)
        if (!match){
            return res.status(401).json({
                message: 'Invalid Credentials'
            })
        }

        // sign JWT
        const payload = { id: user.id, email: user.email }
        const token = jwt.sign(payload, jwtSecret, {expiresIn: '1h'})

        // response
        return res.json({
            message: 'login berhasil',
            token: token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name
            }
        })

    } catch(err) {
        next(err)
    }
}

module.exports = {
    register,
    login
}