const {userData} = require('../data/testData');

//main methods
const getAllUsers = async (req, res)=>{
    return res.status(200).json(userData);
}

module.exports = {getAllUsers};