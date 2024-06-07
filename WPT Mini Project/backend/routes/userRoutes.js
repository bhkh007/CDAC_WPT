const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// GET request to retrieve user profile
router.get('/profile', authMiddleware, userController.getProfile);

// PUT request to update user profile
router.put('/update', authMiddleware, userController.updateProfile);

module.exports = router;
