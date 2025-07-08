const Product = require('../models/Product');
const Code = require('../models/Code');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');
// Middleware to handle file uploads
exports.addProduct = async (req, res) => {
    try {
        const { name, batchSize, mrp } = req.body;
        const imagePath = req.file ? req.file.filename : null;

        if (!imagePath) return res.status(400).json({ message: 'Product image is required' });

        const product = new Product({
            name,
            batchSize,
            mrp,
            image: imagePath,
        });

        await product.save();
        res.status(201).json({ message: 'Product added', product });
    } catch (err) {
        res.status(500).json({ message: 'Error adding product', error: err.message });
    }
};
// Middleware to handle the code generation
exports.generateCodes = async (req, res) => {
    try {
        const { productId, batchNumber } = req.body;

        const product = await Product.findById(productId);
        if (!product) return res.status(404).json({ message: 'Product not found' });

        const codes = [];
        for (let i = 0; i < product.batchSize; i++) {
            const code = new Code({
                productId: product._id,
                batchNumber,
                code: uuidv4(),
            });
            await code.save();
            codes.push(code);
        }

        res.status(201).json({ message: 'Unique codes generated', codes });
    } catch (err) {
        res.status(500).json({ message: 'Error generating codes', error: err.message });
    }
};
