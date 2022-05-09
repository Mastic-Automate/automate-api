import {Router} from 'express'

const authRoutes = Router()

import {signIn, createUser} from '../services/mysql.js'

authRoutes.post('/signup', (req, res) => {
    const {userName, userEmail, userPassword} = req.body
    createUser(userName, userEmail, userPassword)
    return res.json({
        insert:'sucess'
    })
})
authRoutes.post('/signin', (req, res) =>{
    const {userEmail, userPassword} = req.body
    signIn(userEmail, userPassword, (result) =>{
        return res.json(result)
    })
})

export {authRoutes}