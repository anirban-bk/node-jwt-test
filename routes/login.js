const router = require('express').Router();

const controller = require('../controllers/login');

//main methods
router.post('/', controller.login);
router.post('/token', controller.token);

module.exports = router;