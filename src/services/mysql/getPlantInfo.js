import { connection } from "../../database/mysql.js";

export async function getPlantInfo(id){
    return new Promise((resolve, reject)=>{
        connection.query(
            'SELECT idPlant, plantName, plantScientificName, plantSoilHumidity, plantTimeHarvest, plantAbout, plantTemperature FROM tbPlants LIMIT 1',
            (err, result) => {
                if(!err){
                    return resolve(result)
                }
                return reject(err)
            }
        )
    })
}