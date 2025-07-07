const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

// Add product (with image)
router.post('/add-product', auth(['admin']), upload.single('image'), adminController.addProduct);

// Generate unique codes for a product
router.post('/generate-codes', auth(['admin']), adminController.generateCodes);

module.exports = router;
