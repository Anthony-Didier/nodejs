const express = require('express');
const router = express.Router();

const userController = require('../controller/user.controller');

router.get('/', userController.list_user);
router.get('/:id', userController.detail_user);
router.post('/', userController.add_user);

module.exports = router;