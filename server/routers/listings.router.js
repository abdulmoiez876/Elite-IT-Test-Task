import express from 'express';
import { getListings, createListing } from '../controllers/listing.controller.js';

export const listingsRouter = express.Router();

listingsRouter.get('/getListings', getListings);
listingsRouter.post('/createListing', createListing);