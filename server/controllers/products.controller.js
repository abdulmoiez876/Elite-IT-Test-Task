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