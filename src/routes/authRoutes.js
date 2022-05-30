import {Router} from 'express'

import {check} from 'express-validator'

const authRoutes = Router()

import {handleSignIn} from '../handlers/handleSignIn.js'
import {handleSignUp} from '../handlers/handleSignUp.js'

authRoutes.post('/signup',
    [
        check('userEmail', 'Email inválido').isEmail().normalizeEmail(),
        check('userName', 'Nome inválido').isLength({min:4, max:40}).withMessage('Nome de usuário deve ter ao menos 4 caracteres e no máximo 40'),
        check('userPassword', 'Senha inválida').isLength({min:8, max:40}).withMessage('Senha de usuário deve ter ao menos 8 caracteres e no máximo 40')
    ],
    handleSignUp
)
authRoutes.post('/signin',
    [
        check('userEmail', 'Email inválido').isEmail().normalizeEmail(),
        check('userPassword', 'Senha inválida').isLength({min:8, max:40}).withMessage('Senha de usuário deve ter ao menos 8 caracteres e no máximo 40')
    ],
    handleSignIn
)

export {authRoutes}