const jwt = require('jsonwebtoken');
const {userData} = require('../data/testData');
const {authenticateToken, generateAccessToken, generateRefreshToken } = require('../validations/jwt')

//main methods
const login = async (req, res)=>{
    //return res.status(200).send(userData);
    const {username} = req.body;
    const user = {name: username};

    const accessToken = generateAccessToken(user); //jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    const refreshToken = generateRefreshToken(user);
    res.status(200).json({accessToken : accessToken, refreshToken: refreshToken, user: user});
}

const token = async (req, res)=>{
    
}

module.exports = {login, token}