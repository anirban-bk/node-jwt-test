const router = require('express').Router();

//import controller
const userController = require('../controllers/users');

//use routers
router.get('/getAllUsers', userController.getAllUsers);


module.exports = router;