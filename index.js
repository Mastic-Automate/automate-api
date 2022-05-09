import express from 'express'

import {connection} from './src/database/mysql.js'

const app = express()

app.get('/', (req, res) => {
    console.log('Request')
    return res.json({
        hello:'world'
    })
})

app.post('/signin', (req, res) => {
    connection.query('INSERT INTO tbUser( userName, userEmail, userPassword) VALUES( ?, ?, ?)', [ 'Gabriel', 'Gabriel@gmail.com', 'senha123'])
    return res.json({
        insert:'sucess'
    })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> {
    console.log(`App running on localhost:${PORT}`)
})