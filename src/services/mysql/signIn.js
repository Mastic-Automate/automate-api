import {compare} from 'bcrypt'

import {checkIfUserAlreadyExists} from './checkIfUserAlreadyExists.js'

async function signIn(userEmail, userPassword){
    const result = {
        sucess:false,
        user:null,
        msg:'Impossível efetuar operação'
    }
    const userExists = await checkIfUserAlreadyExists(userEmail)
    if(!userExists.exists){
        result.msg = 'Usuário não existe'
        return result
    }
    const isPasswordCorrect = await compare(userPassword, userExists.user.userPassword);
    return new Promise((resolve, reject) => {
        if(isPasswordCorrect) {
            result.sucess = true
            result.user = userExists.user
            result.msg = 'Signin efetuado com sucesso!'
        } else {
            result.msg = 'Senha incorreta'
        }
        return resolve(result)
    })
    

}
export {signIn}