import {deleteUser} from '../services/mysql/deleteUser.js'

function handleDeleteUser(req, res) {
    deleteUser(req.body.userId).then(result => {
        return res.status(200).json({
            sucess:result.sucess
        })
    })
}

export {handleDeleteUser}