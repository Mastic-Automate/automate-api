import {validationResult} from 'express-validator'

import {signUp} from '../services/mysql/signUp.js'

function handleSignUp(req, res){
    const errors = validationResult(req)
    const {userName, userEmail, userPassword} = req.body
    if(errors.isEmpty()){
        signUp(userName, userEmail, userPassword).then((result) =>{
            return res.status(200).json({
                sucess:result.sucess,
                msg:result.msg,
                user: {
                    userName, userEmail, userPassword
                }
            })
        })
    } else {
        return res.status(422).jsonp({
            sucess:false,
            errors: errors.array(),
            errorsMsgs: errors.array().map(err => err.msg)
        })
    }
}

export {handleSignUp}