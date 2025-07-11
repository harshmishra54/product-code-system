const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    batchSize: {
        type: Number,
        required: true,
    },
    mrp: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Product', productSchema);
