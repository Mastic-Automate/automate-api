import { connection } from "../../database/mysql.js";

export async function deleteUserAutomate(idAutomate){
  return new Promise((resolve, reject) => {
    connection.query(
      `DELETE FROM tbAutomate WHERE idAutomate = ?`,
      [idAutomate],
      (err, result) => {
        if(err) return reject(err);
        return resolve(result);
      }
    );
  });
}