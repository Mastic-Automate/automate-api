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
    const userAlreadyExists = await checkIfUserAlreadyExists(userEmail)
    if(!userAlreadyExists){
        connection.query('INSERT INTO tbUser(userName, userEmail, userPassword) VALUES(?, ?, ?)', [userName, userEmail, userPassword])
        return true
    }
    return false
    
}
async function signIn(userEmail, userPassword){
    return new Promise((resolve, reject) => {
        const result = {
            sucess:false,
            user:null
        }
        connection.query('SELECT userName, userEmail, userPassword FROM tbUser WHERE userEmail= ? AND userPassword = ?', [userEmail, userPassword], (err, results) => {
            if(err) {
                return reject(err)
            }
            if(results[0]){
                result.sucess = true
                result.user = results[0]
                return resolve(result)
            }
            return resolve(result)
        })
    })
    

}
export {createUser, signIn}