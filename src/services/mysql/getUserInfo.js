import { connection } from "../../database/mysql.js";

export async function getUserInfo(userId){
    return new Promise((resolve, reject)=> {
        connection.query(
            'SELECT * from tbUser where idUser = ?',
            [userId],
            (err, result) => {
                if(!err){
                    return resolve(result[0])
                }
                reject(err)
            }
        )    
    })
}