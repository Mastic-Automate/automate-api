import {changeUserName} from '../services/mysql/changeUserName.js';

function handleChangeUserName(req, res){
    const {newName, user} = req.body
    changeUserName(user.userId, newName).then(result => {
        res.status(200).json({
            sucess:result.sucess
        });
    });
}

export {handleChangeUserName}