import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    products: [],
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        // get all products
        builder.addCase(getAllProducts.pending, (state, action) => {
            state.products = []
        })
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.products = action.payload
        })
        builder.addCase(getAllProducts.rejected, (state, action) => {
            console.log(action.payload.error);
        })
    }
})

export const getAllProducts = createAsyncThunk('products/getAllProducts', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get('http://localhost:8000/products/getAllProducts');
        return response.data;
    }
    catch (error) {
        return rejectWithValue(error.response.data);
    }
})