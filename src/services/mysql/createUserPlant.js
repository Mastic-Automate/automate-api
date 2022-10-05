import { connection } from "../../database/mysql";

export async function createUserPlant(
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
        if(!err){
          return reject(err);
        }
        return resolve(result);
      }
    );
  });
}