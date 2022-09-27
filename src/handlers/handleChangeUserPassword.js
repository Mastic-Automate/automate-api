import {changeUserPassword} from '../services/mysql/changeUserPassword.js';

function handleChangeUserPassword(req, res){
    const {newPassword, userId} = req.body
    changeUserPassword(userId, newPassword).then(result => {
        res.status(200).json({
            sucess:result.sucess
        });
    });
}

export {handleChangeUserPassword}