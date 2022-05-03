import {createConnection} from 'mysql'

const connection = createConnection({
    // port: process.env.DB_PORT,
    host: process.env.BD_HOST,
    database: process.env.BD_NAME,
    password: process.env.BD_USER_PASSWORD,
    user: process.env.BD_USER
})

connection.connect((err) => console.log(err))

export {connection}