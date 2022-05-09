import {connection} from '../database/mysql.js'

function createUser(userName, userEmail, userPassword){
    connection.query('INSERT INTO tbUser(userName, userEmail, userPassword) VALUES(?, ?, ?)', [userName, userEmail, userPassword])
}
function signIn(userEmail, userPassword, callBack){
    connection.query('SELECT userName, userEmail, userPassword FROM tbUser WHERE userEmail= ? AND userPassword = ?', [userEmail, userPassword], (err, results) => {
        // console.log(results[0])
        if(results[0]){
            console.log('usuário existe')
            callBack(results[0])

            return results[0]
        }  
    })

}
export {createUser, signIn}