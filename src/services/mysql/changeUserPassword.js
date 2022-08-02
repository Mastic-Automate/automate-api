import {connection} from '../../database/mysql.js'

async function changeUserPassword(userId, newPassword){
    return new Promise((resolve, reject) => {
        connection.query(
            'UPDATE tbUser SET userPassword = ? WHERE idUser= ?',
            [newPassword, userId], 
            (err, result) => {
                if(!err) {
                    return resolve({
                        sucess:true
                    })
                }
                console.log(err)
            })
    })
}

export {changeUserPassword}