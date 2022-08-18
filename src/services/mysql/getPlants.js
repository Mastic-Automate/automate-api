import { connection } from "../../database/mysql.js"

export async function getPlants(count){
    return new Promise((resolve, reject) => {
        connection.query('SELECT plantName, plantAbout, idPlant from tbPlants LIMIT ?', 
        [count], 
        (err, result) => {
            if(!err){
                return resolve(result)
            }
            return reject(err)
        })
    })
}