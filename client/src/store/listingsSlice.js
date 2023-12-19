import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    listings: [],
    currentPage: 0,
    totalItems: 0,
    refreshListings: false,
}

export const listingsSlice = createSlice({
    name: "listings",
    initialState,
    reducers: {
        setRefreshListings: (state, action) => {
            state.refreshListings = !state.refreshListings;
        }
    },
    extraReducers: (builder) => {
        // create listing
        builder.addCase(createListing.pending, (state, action) => { })
        builder.addCase(createListing.fulfilled, (state, action) => {
            state.refreshListings = !state.refreshListings;
        })
        builder.addCase(createListing.rejected, (state, action) => {
            console.log(action.payload.error);
        })

        // get listings
        builder.addCase(getListings.pending, (state, action) => { 
            state.listings = [];
        })
        builder.addCase(getListings.fulfilled, (state, action) => {
            state.listings = action.payload.listings;
            state.currentPage = action.payload.pagination.currentPage;
            state.totalItems = action.payload.pagination.totalItems;
        })
        builder.addCase(getListings.rejected, (state, action) => {
            console.log(action.payload.error);
        })
    }
})

export const createListing = createAsyncThunk('listings/createListing', async (listing, { rejectWithValue }) => {
    try {
        const response = await axios.post('http://localhost:8000/listings/createListing', listing);
        return response.data;
    }
    catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const getListings = createAsyncThunk('listings/getListings', async (page, { rejectWithValue }) => {
    try {
        const response = await axios.get(`http://localhost:8000/listings/getListings?page=${page}`);
        return response.data;
    }
    catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const { setRefreshListings } = listingsSlice.actions;