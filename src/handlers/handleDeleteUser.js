import {deleteUser} from '../services/mysql/deleteUser.js'

function handleDeleteUser(req, res) {
    deleteUser(req.body.userId).then(result => {
        return res.json({
            sucess:result.sucess
        })
    })
}

export {handleDeleteUser}