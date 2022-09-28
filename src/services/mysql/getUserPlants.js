import {connection} from '../../database/mysql.js';

export async function getUserPlants(userId){
  return new Promise((resolve, reject)=> {
    connection.query(
      'SELECT * FROM tbAutomateUser WHERE idUser = ?',
      [userId],
      (err, result)=> {
        if(!err){
          return resolve(result);
        }
        return reject(err);
      }
    );
  })
}