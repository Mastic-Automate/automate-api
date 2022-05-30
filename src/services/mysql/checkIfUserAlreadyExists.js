import {connection} from '../../database/mysql.js'

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

export {checkIfUserAlreadyExists}