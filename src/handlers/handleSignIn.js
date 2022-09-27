import {validationResult} from 'express-validator';

import {signIn} from '../services/mysql/signIn.js';

function handleSignIn(req, res) {
    const errors = validationResult(req)
    if(errors.isEmpty()){
        const {userEmail, userPassword} = req.body;
        signIn(userEmail, userPassword).then(result => {
            return res.status(200).json(result)
        });
    } else{
        return res.status(400).jsonp({
            sucess:false,
            errors: errors.array(),
            errorsMsgs: errors.array().map(err => err.msg)
        });
    }
}

export {handleSignIn}