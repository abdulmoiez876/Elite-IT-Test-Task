import express from 'express';
import { createProduct, getAllProducts } from '../controllers/products.controller.js';

export const productsRouter = express.Router();

productsRouter.post('/create', createProduct);
productsRouter.get('/getAllProducts', getAllProducts);