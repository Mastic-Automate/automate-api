import {connection} from '../../database/mysql.js'

async function changeUserPassword(userId, newPassword){
    return new Promise((resolve, reject) => {
        connection.query(
            'UPDATE tbuser SET userPassword = ? WHERE idUser= ?',
            [newPassword, userId], 
            (err, result) => {
                if(!err) {
                    return resolve({
                        sucess:true
                    })
                }
            })
    })
}

export {changeUserPassword}