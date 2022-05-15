import {connection} from '../database/mysql.js'

async function checkIfUserAlreadyExists(userEmail){
    return new Promise((resolve, reject) =>{
        connection.query('SELECT * FROM tbUser WHERE userEmail = ?', [userEmail], (err, result) =>{
            if(err){
                return reject(err)
            }
            return resolve(result.length>0)
        })
    })
}

async function createUser(userName, userEmail, userPassword){
    const result = {
        sucess:false,
        msg:'Impossível criar usuário'
    }
    const userAlreadyExists = await checkIfUserAlreadyExists(userEmail)
    if(!userAlreadyExists){
        connection.query('INSERT INTO tbUser(userName, userEmail, userPassword) VALUES(?, ?, ?)', [userName, userEmail, userPassword])
        result.sucess = true
        result.msg = 'Usuário criado com sucesso!'
        return result
    }
    result.msg = 'Email de usuário já está em uso'
    return result
    
}
async function signIn(userEmail, userPassword){
    return new Promise((resolve, reject) => {
        const result = {
            sucess:false,
            user:null,
            msg:'Impossível efetuar operação'
        }
        connection.query('SELECT userName, userEmail, userPassword FROM tbUser WHERE userEmail= ? AND userPassword = ?', [userEmail, userPassword], (err, results) => {
            if(err) {
                return reject(err)
            }
            if(results[0]){
                result.sucess = true
                result.user = results[0]
                result.msg = 'Signin efetuado com sucesso!'
                return resolve(result)
            }
            result.msg = 'Usuário não existe'
            return resolve(result)
        })
    })
    

}
export {createUser, signIn}