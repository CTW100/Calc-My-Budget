const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST: /users/new
router.post('/new', userController.createAccount);

module.exports = router;
