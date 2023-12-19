import cron from 'node-cron';
import { updateProductPrices } from './controllers/products.controller.js';

export const startCronJob = () => {
    cron.schedule('0 0 * * *', async () => {
        console.log('Updating product prices...');
        await updateProductPrices();
        console.log('Product prices updated successfully.');
    });
}