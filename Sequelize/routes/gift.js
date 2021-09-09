const express = require('express');
const router = express.Router();

const giftController = require('../controllers/gift.controller');

router.get('/', giftController.list_gift);
router.get('/:id', giftController.detail_gift);
router.post('/', giftController.add_gift);
router.put('/:id', giftController.edit_gift);
router.delete('/:id', giftController.delete_gift);

module.exports = router;