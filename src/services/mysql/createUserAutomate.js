import { connection } from "../../database/mysql.js";

export async function createUserAutomate(
  idAutomateDevice, 
  idUser, 
  idPlant,
  plantName,
  plantHoursSun,
  plantWaterQuantity,
  plantSoilHumidity,
  plantTemperature
){
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO tbAutomate(idAutomateDevice, idUser, idPlant, plantName, plantHoursSun, plantWaterQuantity, plantSoilHumidity, plantTemperature)
      VALUES(?, ?, ?, ?, ?, ?, ?, ?)`,
      [idAutomateDevice, idUser, idPlant, plantName, plantHoursSun, plantWaterQuantity, plantSoilHumidity, plantTemperature],
      (err, result) => {
        if(err){
          return reject(err);
        }
        return resolve(result);
      }
    );
  });
}