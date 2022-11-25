import { createUserAutomate } from "../services/mysql/createUserAutomate.js";
import { deleteUserAutomate } from "../services/mysql/deleteUserAutomate.js";
import { updateUserPlant } from "../services/mysql/updateUserPlant.js";

export async function handleCreateAutomateUser(req, res){
  const {
    user, 
    idAutomateDevice,
    idPlant,
    plantName,
    plantHoursSun,
    plantWaterQuantity,
    plantSoilHumidity,
    plantTemperature
  } = req.body;
  const queryResult = await createUserAutomate(
    idAutomateDevice,
    user.userId,
    idPlant,
    plantName,
    plantHoursSun,
    plantWaterQuantity,
    plantSoilHumidity,
    plantTemperature
  );
  return res.json(queryResult);
}

export async function handleDeleteAutomateUser(req, res){
  const {id} = req.body;
  const queryResult = await deleteUserAutomate(id);
  return res.json(queryResult);
}

export async function handleUpdateAutomateUserName(req, res) {
  const {id, name} = req.body;
  const queryResult = await updateUserPlant.name(name, id);
  return res.json(queryResult);
}
export async function handleUpdateAutomateUserPlantId(req, res) {
  const {id, idPlant} = req.body;
  const queryResult = await updateUserPlant.plantId(idPlant, id);
  return res.json(queryResult);
}