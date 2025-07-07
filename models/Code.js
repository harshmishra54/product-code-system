const mongoose = require('mongoose');

const codeSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    batchNumber: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
        unique: true,
    }
});

module.exports = mongoose.model('Code', codeSchema);
