import {connection} from '../database/mysql.js'

async function checkIfUserAlreadyExists(userEmail){
    return new Promise((resolve, reject) =>{
        connection.query('SELECT * FROM tbUser WHERE userEmail = ?', [userEmail], (err, result) =>{
            if(err){
                return reject(err)
            }
            return resolve({
                exists:result.length>0,
                user: result[0]
            })
        })
    })
}

async function createUser(userName, userEmail, userPassword){
    const result = {
        sucess:false,
        msg:'Impossível criar usuário'
    }
    const userAlreadyExists = await checkIfUserAlreadyExists(userEmail)
    if(!userAlreadyExists.exists){
        connection.query('INSERT INTO tbUser(userName, userEmail, userPassword) VALUES(?, ?, ?)', [userName, userEmail, userPassword])
        result.sucess = true
        result.msg = 'Usuário criado com sucesso!'
        return result
    }
    result.msg = 'Email de usuário já está em uso'
    return result
    
}
async function signIn(userEmail, userPassword){
    const result = {
        sucess:false,
        user:null,
        msg:'Impossível efetuar operação'
    }
    const userExists = await checkIfUserAlreadyExists(userEmail)
    if(!userExists.exists){
        result.msg = 'Usuário não existe'
        return result
    }
    return new Promise((resolve, reject) => {
        if(userPassword === userExists.user.userPassword) {
            result.sucess = true
            result.user = userExists.user
            result.msg = 'Signin efetuado com sucesso!'
        } else {
            result.msg = 'Senha incorreta'
        }
        return resolve(result)
    })
    

}
export {createUser, signIn}