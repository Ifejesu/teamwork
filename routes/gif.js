const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const gifCtrl = require('../controllers/gif');

router.post('/', auth, multer, gifCtrl.createGif);
router.post('/:id/comment', auth, gifCtrl.createComment);
router.get('/:id', auth, gifCtrl.getGif);
router.delete('/:id', auth, gifCtrl.deleteGif);

module.exports = router;