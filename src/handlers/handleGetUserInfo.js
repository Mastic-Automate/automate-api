import { getUserInfo } from "../services/mysql/getUserInfo.js";

export async function handleGetUserInfo(req, res){
    const {user} = req.body;
    const userInfo = await getUserInfo(user.userId)
    console.log(userInfo)
}