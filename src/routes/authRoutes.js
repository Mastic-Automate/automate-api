import {Router} from 'express'

import {check, validationResult} from 'express-validator'

const authRoutes = Router()

import {signIn, createUser} from '../services/mysql.js'

function handleSignUpRoute(req, res){
    const errors = validationResult(req)
    const {userName, userEmail, userPassword} = req.body
    if(errors.isEmpty()){
        createUser(userName, userEmail, userPassword).then((sucess) =>{
            return res.status(200).json({
                sucess:sucess,
                user: {
                    userName, userEmail, userPassword
                }
            })
        })
    } else {
        return res.status(422).jsonp({
            sucess:false,
            errors: errors.array(),
            errorsMsgs: errors.array().map(err => err.msg)
        })
    }
}
function handleSignInRoute(req, res) {
    const {userEmail, userPassword} = req.body
    signIn(userEmail, userPassword, (result) =>{
        return res.json(result)
    })
}

authRoutes.post('/signup',
    [
        check('userEmail', 'Email inválido').not().isEmpty().isEmail().normalizeEmail(),
        check('userName', 'Nome inválido').trim().not().isEmpty().isLength({min:4, max:40}).withMessage('Nome de usuário deve ter ao menos 4 caracteres e no máximo 40'),
        check('userPassword', 'Senha inválida').trim().not().isEmpty().isLength({min:8, max:40}).withMessage('Senha de usuário deve ter ao menos 8 caracteres e no máximo 40')
    ],
    handleSignUpRoute
)
authRoutes.post('/signin', handleSignInRoute)

export {authRoutes}