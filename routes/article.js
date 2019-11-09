const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const articleCtrl = require('../controllers/article');

router.post('/', auth, articleCtrl.createArticle);
router.post('/:id/comment', auth, articleCtrl.createComment);
router.get('/:id', auth, articleCtrl.getArticle);
router.patch('/:id', auth, articleCtrl.modifyArticle);
router.delete('/:id', auth, articleCtrl.deleteArticle);

module.exports = router;