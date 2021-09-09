const express = require('express');
const router = express.Router();

const bucheController = require('../controllers/buche.controller');

router.get('/', bucheController.list_buche);
router.get('/:id', bucheController.detail_buche);
router.post('/', bucheController.add_buche);
router.put('/:id', bucheController.edit_buche);
router.delete('/:id', bucheController.delete_buche);

module.exports = router;