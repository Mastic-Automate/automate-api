import bcrypt from 'bcrypt';

import {connection} from '../../database/mysql.js'

async function changeUserPassword(userId, newPassword){
    return new Promise((resolve, reject) => {
        bcrypt.hash(newPassword, 10).then(encrypted => {
            connection.query(
                'UPDATE tbUser SET userPassword = ? WHERE idUser= ?',
                [encrypted, userId], 
                (err, result) => {
                    if(!err) {
                        return resolve({
                            sucess:true
                        })
                    }
                    console.log(err)
                }
            )
        })
    })
}

export {changeUserPassword}