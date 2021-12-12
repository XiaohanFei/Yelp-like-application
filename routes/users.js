const express = require('express');
const router = express.Router();

const userController = require('../controller/users')

router.post('/login', userController.login);
router.post('/customer', userController.signup);

module.exports = router;
