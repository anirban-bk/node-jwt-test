const {userData} = require('../data/testData');

//main methods
const getAllUsers = async (req, res)=>{
    return res.status(200).json(userData);
}
const getUser = async (req, res) =>{
    return res.status(200).json(userData.filter(obj=>obj.username.toLowerCase()===req.user.name.toLowerCase()));
}

module.exports = {getAllUsers, getUser};