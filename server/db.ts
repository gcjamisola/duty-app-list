const POOL = require('pg').Pool

const pool = new POOL({
    user: 'postgres',
    password: 'superadmin1234',
    host: 'localhost',
    port: 5432,
    database: 'duty_db'
})

module.exports = pool