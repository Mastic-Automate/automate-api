import {connection} from '../../database/mysql.js'

async function changeUserName(userId, newName){
    return new Promise((resolve, reject) => {
        connection.query(
            'UPDATE tbuser SET userName = ? WHERE idUser= ?',
            [newName, userId], 
            (err, result) => {
                if(!err) {
                    return resolve({
                        sucess:true
                    })
                }
            })
    })
}

export {changeUserName}