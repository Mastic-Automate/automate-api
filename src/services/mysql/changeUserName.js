import {connection} from '../../database/mysql.js'

async function changeUserName(userId, newName){
    return new Promise((resolve, reject) => {
        connection.query(
            'UPDATE tbUser SET userName = ? WHERE idUser= ?',
            [newName, userId], 
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
}

export {changeUserName}