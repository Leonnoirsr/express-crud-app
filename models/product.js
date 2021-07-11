const mongoose = require('mongoose');


const productSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        require: true,
        min: 0
    },
    category: {
        type: String,
        enum: ['clothing', 'accessory', 'shoes', 'jewelry'],
        lowercase: true 

    }
});

const Product = mongoose.model ('Product', productSchema);

module.exports = Product;