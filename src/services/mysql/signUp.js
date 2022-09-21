import { hash } from 'bcrypt'

import {connection} from '../../database/mysql.js'

import {checkIfUserAlreadyExists} from './checkIfUserAlreadyExists.js'

async function signUp(userName, userEmail, userPassword){
    const result = {
        sucess:false,
        msg:'Impossível criar usuário'
    }
    const userAlreadyExists = await checkIfUserAlreadyExists(userEmail)
    const encryptedPassword = await hash(userPassword, 10)
    if(!userAlreadyExists.exists){
        connection.query('INSERT INTO tbUser(userName, userEmail, userPassword) VALUES(?, ?, ?)', [userName, userEmail, encryptedPassword])
        result.sucess = true
        result.msg = 'Usuário criado com sucesso!'
        return result
    }
    result.msg = 'Email de usuário já está em uso'
    return result
    
}

export {signUp}