/*
    KONFIGURASI PRISMA dan ADAPTER DATABASE
*/
// import package prisma client
const { PrismaClient } = require('@prisma/client')

// import package adapter mariadb
const { PrismaMariaDb } = require('@prisma/adapter-mariadb')

// logic adapter
const adapter = new PrismaMariaDb({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'db_movie_prisma'
})

// instance/ init prisma client dengan adapter
const prisma = new PrismaClient({ adapter });

module.exports = prisma;