const jwt = require('jsonwebtoken');

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

module.exports = {authenticateToken}