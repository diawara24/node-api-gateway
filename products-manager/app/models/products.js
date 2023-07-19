const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "le nom est obligatoire"],
    },
    price: {
        type: Number,
        required: [true, "le prix est obligatoire"],
    },
    description: {
        type: String,
        required: [true, "la description est obligatoire"],
    },
    
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;