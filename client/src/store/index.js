import { configureStore } from '@reduxjs/toolkit';

import { productsSlice } from './productsSlice';
import { listingsSlice } from './listingsSlice';

export const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        listings: listingsSlice.reducer,
    }
})