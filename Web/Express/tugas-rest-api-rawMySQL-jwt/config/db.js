// import package mysql2 dan dotenv
require('dotenv').config();
const mysql = require('mysql2/promise');

// ambil url db dari env
const dbUrl = process.env.DATABASE_URL || ''
if(!dbUrl){
    throw new Error('DATABASE_URL belum ada di .env!');
}

const url = new URL(dbUrl)

const pool = mysql.createPool({
    host : url.hostname,
    user: url.username,
    password: url.password,
    database: url.pathname.replace(/^\//,''),
    port: url.port ? Number(url.port) : 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

module.exports = pool
