import productsModel from "../models/products.model.js";

export const createProduct = async (req, res) => {
    try {
        const product = await productsModel.create(req.body);
        res.status(201).send(product);
    }
    catch (err) {
        res.status(500).send({ error: err.message });
    }
}

export const getAllProducts = async (req, res) => {
    try {
        const products = await productsModel.find();
        res.status(200).send(products);
    }
    catch (err) {
        res.status(500).send({ error: err.message });
    }
}

export const updateProductPrices = async () => {
    try {
        const products = await productsModel.find();
        for (const product of products) {
            const newPrice = generateRandomPrice();
            product.price = newPrice;
            await product.save();
        }
    } catch (error) {
        console.error('Error updating product prices:', error);
    }
}

function generateRandomPrice() {
    return Math.floor(Math.random() * 100) + 1;
}