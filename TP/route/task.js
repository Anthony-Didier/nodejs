const express = require('express');
const router = express.Router();

const taskController = require('../controller/task.controller');

router.get('/', taskController.list_task);
router.get('/:id', taskController.detail_task);
router.post('/', taskController.add_task);
router.put('/:id', taskController.edit_task);
router.patch('/:id', taskController.status_task);
router.delete('/:id', taskController.delete_task);

module.exports = router;