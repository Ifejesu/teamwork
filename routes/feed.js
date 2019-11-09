const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const feedCtrl = require('../controllers/feed');

router.get('/', auth, feedCtrl.getAllFeed);

module.exports = router;