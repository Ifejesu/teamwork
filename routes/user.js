const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

router.post('/create-user', userCtrl.signup);
router.post('/signin', userCtrl.login);

module.exports = router;