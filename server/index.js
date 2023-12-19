import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import {startCronJob} from './cronJobs.js';

import { productsRouter } from './routers/products.router.js';
import { listingsRouter } from './routers/listings.router.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
startCronJob();
app.use('/products', productsRouter);
app.use('/listings', listingsRouter);

await mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
}).catch(error => {
    console.log(error);
})