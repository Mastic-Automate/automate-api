import {config} from 'dotenv'
import express from 'express'

import {connection} from './services/mysql.js'

config()

const app = express()

app.get('/', (req, res) => {
    console.log('Request')
    return res.json({
        hello:'world'
    })
})

app.get('/signin', (req, res) => {
    connection.query(`INSERT INTO tbUser( userName, userEmail, userPassword) VALUES( ?, ?, ?)`, [ 'Gabriel', 'Gabriel@gmail.com', 'senha123'])
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> {
    console.log(`App running on localhost:${PORT}`)
    console.log(process.env.BD_USER_PASSWORD)
})