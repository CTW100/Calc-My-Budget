const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { auth } = require('../middleware/auth');

// POST: /users/new
router.post('/new', userController.createAccount);

// POST: /users/login
router.post('/login', userController.login);

// GET: /users/auth
router.get('/auth', auth, userController.auth);

module.exports = router;
