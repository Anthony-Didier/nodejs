const express = require('express');
const router = express.Router();

const matiere_controller = require('../controllers/matiere.controller');

router.get('/', matiere_controller.list_matiere);
router.get('/:id', matiere_controller.detail_matiere);
router.post('/', matiere_controller.add_matiere);
router.put('/:id', matiere_controller.edit_matiere);
router.delete('/:id', matiere_controller.delete_matiere);

module.exports = router;