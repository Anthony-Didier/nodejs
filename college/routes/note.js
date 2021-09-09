const express = require('express');
const router = express.Router();
const note_controller = require('../controllers/note.controller');

router.get('/', note_controller.list_note);
router.get('/average', note_controller.average_note);
router.get('/:id', note_controller.detail_note);
router.post('/', note_controller.add_note);
router.put('/:id', note_controller.edit_note);
router.delete('/:id', note_controller.delete_note);

module.exports = router;