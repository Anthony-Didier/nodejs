const express = require('express');
const router = express.Router();

const eleve_controller = require('../controllers/eleve.controller');

router.get('/', eleve_controller.list_eleve);
router.get('/:id', eleve_controller.detail_eleve);
router.post('/', eleve_controller.add_eleve);
router.put('/:id', eleve_controller.edit_eleve);
router.delete('/:id', eleve_controller.delete_eleve);

module.exports = router;