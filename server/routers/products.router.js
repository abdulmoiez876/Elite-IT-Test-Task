import express from 'express';
import { createProduct } from '../controllers/products.controller.js';

export const productsRouter = express.Router();

productsRouter.post('/create', createProduct);