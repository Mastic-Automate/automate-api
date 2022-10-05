import { getAutomateDevices } from "../services/mysql/getAutomateDevices.js";

export async function handleGetAutomateDevices(req, res){
  const devices = await getAutomateDevices();
  return res.json(devices);
}