const jwt = require('jsonwebtoken');
const tokenExpiresIn = '15s';

function authenticateToken(req, res, next){
    //Bearer Token
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token){
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
            if(err) return res.status(403).send({message: `It seems like you have the token, but that token is no longer valid. So you do not have access.`})
            req.user = user;
            next();
        });
    }else{
        res.status(401).send({error: `authorization header/token not found`});
    }
}

function generateAccessToken(user){
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: tokenExpiresIn});
}

function generateRefreshToken(user){
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
}

module.exports = {authenticateToken, generateAccessToken, generateRefreshToken}