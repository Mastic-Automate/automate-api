import { connection } from "../../database/mysql.js";

export async function getAutomateDevices(){
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * from tbAutomateDevice`,
      (err, result) => {
        if(err) return reject(err);
        return resolve(result);
      }
    );
  });
}