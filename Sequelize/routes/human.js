const express = require('express');
const router = express.Router();

const humanController = require('../controllers/human.controller');

router.get('/', humanController.list_human);
router.get('/:id', humanController.detail_human);
router.post('/', humanController.add_human);
router.put('/:id', humanController.edit_human);
router.delete('/:id', humanController.delete_human);

module.exports = router;