import {connection} from '../../database/mysql.js'

async function deleteUser(userId){
    return new Promise((resolve, reject) => {
        connection.query('DELETE FROM tbUser WHERE idUser = ?', [userId], (err, result) => {
            if(!err){
                return resolve({
                    sucess:true
                })
            }
            return resolve({
                sucess:false
            })
        })
    })
}

export {deleteUser}