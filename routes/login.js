const router = require('express').Router();

const controller = require('../controllers/login');

//main methods
router.post('/', controller.login);

module.exports = router;