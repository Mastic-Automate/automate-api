const {createConnection} = require('mysql')

const connection = createConnection({
    port: process.env.DB_PORT,
    host: process.env.BD_HOST,
    database: process.env.BD_NAME,
    user: process.env.BD_USER_NAME,
    password: process.env.BD_USER_PASSWORD
})

module.exports = connection