import {connection} from '../database/mysql.js'

function createUser(userName, userEmail, userPassword){
    connection.query('INSERT INTO tbUser(userName, userEmail, userPassword) VALUES(?, ?, ?)', [userName, userEmail, userPassword])
}
function signIn(userEmail, userPassword, callBack){
    const result = {
        sucess:false,
        user:null
    }
    connection.query('SELECT userName, userEmail, userPassword FROM tbUser WHERE userEmail= ? AND userPassword = ?', [userEmail, userPassword], (err, results) => {
        if(results[0]){
            console.log('usuário existe')
            result.sucess = true
            result.user = results[0]
            return callBack(result)
        }
        callBack(result)
    })

}
export {createUser, signIn}