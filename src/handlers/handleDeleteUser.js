import {deleteUser} from '../services/mysql/deleteUser.js';

async function handleDeleteUser(req, res) {
    const {user} = req.body;
    const queryResult = await deleteUser(user.userId);
    return res.status(200).json({
        queryResult
    })
}

export {handleDeleteUser}