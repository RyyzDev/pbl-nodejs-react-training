const jwt = require('jsonwebtoken')
require('dotenv').config()

const jwtSecret = process.env.JWT_SECRET
if(!jwtSecret){
    throw new Error('JWT Secret belum di set')
}

const validatorAuth = (req, res, next) => {
    try {
        // ambil header authorization
        const authHeader = req.get('Authorization');
        if (!authHeader) {
            return res.status(401).json({
                message: 'No token provided'
            })
        }

        // parsing token
        const parts = authHeader.split(' ');

        // kondisi jika format heder salah
        if (parts.length !== 2 || parts[0] !== 'Bearer') {
            return res.status(401).json({
                message: 'Invalid Authorization header format'
            })
        }

        // ambil isi token
        const token = parts[1]

        // verifikasi token
        jwt.verify(token, jwtSecret, (err, decoded) => {
            // jika tidak valid
            if (err){
                return res.status(401).json({
                    message: 'Invalid token'
                })
            }
            // jika valid
            // decode payload token
            req.user = { id: decoded.id, email: decoded.email }
            next()
        })

    } catch (err) {
        next(err)
    }
}

module.exports = validatorAuth