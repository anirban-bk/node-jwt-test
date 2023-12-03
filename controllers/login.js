const jwt = require('jsonwebtoken');
const {userData} = require('../data/testData');

//main methods
const login = async (req, res)=>{
    //return res.status(200).send(userData);
    const {username} = req.body;
    const user = {name: username};

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.status(200).json({accessToken : accessToken});
}

module.exports = {login}