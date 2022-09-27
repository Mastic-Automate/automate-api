import {validationResult} from 'express-validator';

import jwt from 'jsonwebtoken';

import {signIn} from '../services/mysql/signIn.js';

async function handleSignIn(req, res) {
    const errors = validationResult(req)
    if(errors.isEmpty()){
        const {userEmail, userPassword} = req.body;
        const signResult = await signIn(userEmail, userPassword)
        const signedUser = signResult.user

        const authToken = jwt.sign(
            {
                userId: signedUser.idUser,
                userEmail: signedUser.userEmail
            },
            process.env.TOKEN_SECRET
        )

        return res
            .status(200)
            .cookie('auth-token', authToken)
            .json(signResult)
    } else{
        return res.status(400).jsonp({
            sucess:false,
            errors: errors.array(),
            errorsMsgs: errors.array().map(err => err.msg)
        });
    }
}

export {handleSignIn}