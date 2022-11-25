import { getUserPlants } from "../services/mysql/getUserPlants.js";

export async function handleGetUserPlants(req, res){
  const {user} = req.body;
  const userPlants = await getUserPlants(user.userId);
  return res.json(userPlants);
}