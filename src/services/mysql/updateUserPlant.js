import { connection } from "../../database/mysql";

async function updateUserPlantName(newName, idAutomate){
  return new Promise((resolve, reject) => {
    connection.query(
      `UPDATE tbAutomate SET plantName = ? WHERE idAutomate = ?`,
      [newName, idAutomate],
      (err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      }
    );
  });
}
async function updateUserPlantId(idPlant, idAutomate) {
  return new Promise((resolve, reject)=>{
    connection.query(
      `UPDATE tbAutomate SET idPlant = ? WHERE idAutomate = ?`,
      [idPlant, idAutomate],
      (err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      }
    );
  });
}

export const updateUserPlant = {
  name: updateUserPlantName,
  plantId: updateUserPlantId
};
