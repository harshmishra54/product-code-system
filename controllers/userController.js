const Code = require('../models/Code');
const Product = require('../models/Product');

exports.searchByCode = async (req, res) => {
    const { code } = req.query;

    try {
        const foundCode = await Code.findOne({ code });
        if (!foundCode) {
            return res.status(404).json({ message: 'Invalid or unknown code' });
        }

        const product = await Product.findById(foundCode.productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json({
            productImage: `${req.protocol}://${req.get('host')}/uploads/${product.image}`,
            batchNumber: foundCode.batchNumber,
            uniqueCode: foundCode.code,
            productName: product.name,
            mrp: product.mrp,
        });
    } catch (err) {
        res.status(500).json({ message: 'Error searching code', error: err.message });
    }
};
