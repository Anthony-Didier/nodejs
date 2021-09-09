const express = require('express');
const router = express.Router();

const classe_controller = require('../controllers/classe.controller');

router.get('/', classe_controller.list_classe);
router.get('/:id', classe_controller.detail_classe);
router.post('/', classe_controller.add_classe);
router.put('/:id', classe_controller.edit_classe);
router.delete('/:id', classe_controller.delete_classe);

module.exports = router;