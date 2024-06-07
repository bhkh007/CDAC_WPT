const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST request to register a new user
router.post('/register', authController.register);

// POST request to login an existing user
router.post('/login', authController.login);

module.exports = router;
