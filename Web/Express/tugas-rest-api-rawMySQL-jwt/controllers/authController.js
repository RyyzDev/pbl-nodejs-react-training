// koneksi db
const pool = require('../config/db')
// import pckage hashing
const bcrypt = require('bcrypt')
//import jwt
const jwt = require('jsonwebtoken')
// import dotenv
require('dotenv').config()

// panggil JWT_SECRET dari .env
const jwtSecret = process.env.JWT_SECRET
if(!jwtSecret) {
    throw new Error('JWT secret belum di set')
}

// 15 kali putaran algoritma hasshing
const HASH_ROUNDS = 15;

const registerUser = async (req, res, next) => {
    try {
        // destructuring data 
        const { name, email, password } = req.body;

        // sanitizer input
        if (!email || !password){
            return res.status(400).json({
                message: 'Email dan password wajib diisi'
            })
        }
        if (password.length < 8) {
            return res.status(400).json({
                message: 'Panjang password harus 8 karakter atau lebih'
            })
        }

        // hashing password
        const hashed = await bcrypt.hash(password, HASH_ROUNDS)

        // insert data user ke database
        const [result] = await pool.execute(
            `INSERT INTO users
             (name, email, password)
             VALUES (?, ?, ?)`, [name || null, email, hashed]
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

    }
}


const loginUser = async (req, res, next) => {
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
    registerUser,
    loginUser
}