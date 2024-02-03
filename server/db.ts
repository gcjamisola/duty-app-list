const POOL = require('pg').Pool

const pool = new POOL({
    // user: 'postgres',
    // password: 'superadmin1234',
    // host: 'localhost',
    // port: 5432,
    // database: 'duty_db'
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE
})

module.exports = pool