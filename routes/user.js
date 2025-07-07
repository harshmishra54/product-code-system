const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

// Auth routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// Search product by unique code
router.get('/search-by-code', auth(['user']), userController.searchByCode);

module.exports = router;
