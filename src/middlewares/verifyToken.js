import jwt from 'jsonwebtoken';

export async function verifyToken(req, res, next){
    const token = req.cookies['auth-token'];
    if(!token){
        return res.status(401).json({
            message: 'Você não está autenticado'
        })
    }
    const user = jwt.decode(token)
    req.body.user = user
    next();
}