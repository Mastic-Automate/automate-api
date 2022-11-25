import { connection } from "../../database/mysql.js";

export async function getPlantInfo(id) {
    return new Promise((resolve, reject) => {
        connection.query(
            'SELECT * FROM tbPlant WHERE idPlant = ?',
            [id],
            (err, result) => {
                if (!err) {
                    return resolve(result)
                }
                return reject(err)
            }
        )
    })
}