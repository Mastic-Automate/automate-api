import {config} from 'dotenv'
import {createConnection} from 'mysql'

config()

const dbConfig = {
    host: process.env.BD_HOST,
    database: process.env.BD_NAME,
    password: process.env.BD_USER_PASSWORD,
    user: process.env.BD_USER_NAME,
}

const connection = createConnection(dbConfig)

connection.connect((err) => {
    console.log(err)
})

export {connection}