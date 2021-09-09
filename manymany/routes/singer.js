const express = require('express');
const router = express.Router();

const singer_controller = require('../controllers/singer.controller');

router.get('/', singer_controller.list_singer);
router.get('/:id', singer_controller.detail_singer);
router.post('/', singer_controller.add_singer);
router.put('/:id', singer_controller.edit_singer);
router.delete('/:id', singer_controller.delete_singer);

module.exports = router;