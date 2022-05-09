import express from 'express'

import {createUser, signIn} from './src/services/mysql.js'

const app = express()
app.use(express.json())

app.post('/', (req, res) => {
    return res.json({yes:'no'})
})

app.post('/signup', (req, res) => {
    const {userName, userEmail, userPassword} = req.body
    createUser(userName, userEmail, userPassword)
    return res.json({
        insert:'sucess'
    })
})
app.post('/signin', (req, res) =>{
    const {userEmail, userPassword} = req.body
    signIn(userEmail, userPassword, (result) =>{
        return res.json(result)
    })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> {
    console.log(`App running on localhost:${PORT}`)
})