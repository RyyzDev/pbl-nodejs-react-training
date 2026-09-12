/*
    KONFIGURASI PRISMA dan ADAPTER DATABASE
*/
// import package prisma client
import pkg from '@prisma/client'
const { PrismaClient } = pkg

// import package adapter mariadb
import { PrismaMariaDb } from '@prisma/adapter-mariadb'

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

export default prisma