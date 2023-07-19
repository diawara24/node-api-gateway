const Product = require('../models/products.js');

exports.add = async (req, res) => {
    try {
        const newProduct = new Product({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        });
        const insertedProduct = await newProduct.save();
        res.status(201).json(insertedProduct);
    } catch (error) {
        res.status(500).json(error || "serveur error");
    }
}

exports.update = async (req, res) => {
    try {
        const { id } = req.params
        const updatedProduct = await Product.findOneAndUpdate(
            { _id: id },
            {
                name: req.body.name,
                price: req.body.price,
                description: req.body.description
            },
            { returnDocument: 'after' }
        );
        res.status(200).json(updatedProduct);

    } catch (error) {
        res.status(500).json(error || "serveur error");
    }
}

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        await Product.deleteOne({ _id: id });
        res.status(200).json("le produit a été supprimé")

    } catch (error) {
        res.status(500).json(error || "serveur error");
    }
}

exports.get = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error || "serveur error");
    }
}
