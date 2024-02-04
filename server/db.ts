const dotenv = require('dotenv')
const POOL = require('pg').Pool

dotenv.config()
const pool = new POOL({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE
})

module.exports = pool