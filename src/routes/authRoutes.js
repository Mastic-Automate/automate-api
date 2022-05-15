import {Router} from 'express'

import {check, validationResult} from 'express-validator'

const authRoutes = Router()

import {signIn, createUser} from '../services/mysql.js'

function handleSignUpRoute(req, res){
    const errors = validationResult(req)
    const {userName, userEmail, userPassword} = req.body
    if(errors.isEmpty()){
        createUser(userName, userEmail, userPassword).then((result) =>{
            return res.status(200).json({
                sucess:result.sucess,
                msg:result.msg,
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
    const errors = validationResult(req)
    if(errors.isEmpty()){
        const {userEmail, userPassword} = req.body
        signIn(userEmail, userPassword).then(result => {
            return res.status(200).json(result)
        })
    } else{
        return res.status(422).jsonp({
            sucess:false,
            errors: errors.array(),
            errorsMsgs: errors.array().map(err => err.msg)
        })
    }
}

authRoutes.post('/signup',
    [
        check('userEmail', 'Email inválido').isEmail().normalizeEmail(),
        check('userName', 'Nome inválido').isLength({min:4, max:40}).withMessage('Nome de usuário deve ter ao menos 4 caracteres e no máximo 40'),
        check('userPassword', 'Senha inválida').isLength({min:8, max:40}).withMessage('Senha de usuário deve ter ao menos 8 caracteres e no máximo 40')
    ],
    handleSignUpRoute
)
authRoutes.post('/signin',
    [
        check('userEmail', 'Email inválido').isEmail().normalizeEmail(),
        check('userPassword', 'Senha inválida').isLength({min:8, max:40}).withMessage('Senha de usuário deve ter ao menos 8 caracteres e no máximo 40')
    ],
    handleSignInRoute
)

export {authRoutes}