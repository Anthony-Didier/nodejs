const express = require('express');
const router = express.Router();

const style_controller = require('../controllers/style.controller');

router.get('/', style_controller.list_style);
router.get('/:id', style_controller.detail_style);
router.post('/', style_controller.add_style);
router.put('/:id', style_controller.edit_style);
router.delete('/:id', style_controller.delete_style);

module.exports = router;