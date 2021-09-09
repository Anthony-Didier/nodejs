const express = require('express');
const router = express.Router();

const locomotionController = require('../controllers/locomotion.controller');

router.get('/', locomotionController.list_locomotion);
router.get('/:id', locomotionController.detail_locomotion);
router.post('/', locomotionController.add_locomotion);
router.put('/:id', locomotionController.edit_locomotion);
router.delete('/:id', locomotionController.delete_locomotion);

module.exports = router;