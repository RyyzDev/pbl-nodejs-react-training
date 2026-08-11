/*
    KONEKSI DATABASE (wajib di prisma >v7)
*/
require('dotenv').config();
const { defineConfig, env } = require('prisma/config')

module.exports = defineConfig({
    schema: "prisma/schema.prisma",
    datasource: {
        url: env("DATABASE_URL")
    }
})