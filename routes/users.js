const router = require('express').Router();
const {authenticateToken} = require('../validations/jwt')

//import controller
const userController = require('../controllers/users');

//use routers
router.get('/getAllUsers', authenticateToken, userController.getAllUsers);
router.get('/getUser', authenticateToken, userController.getUser);//getUser


module.exports = router;