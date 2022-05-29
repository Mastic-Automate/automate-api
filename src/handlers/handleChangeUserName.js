import {changeUserName} from '../services/mysql/changeUserName.js'

function handleChangeUserName(req, res){
    const {newName, userId} = req.body
    changeUserName(userId, newName).then(result => {
        res.json({
            sucess:result.sucess
        })
    })
}

export {handleChangeUserName}