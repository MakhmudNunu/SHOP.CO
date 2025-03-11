import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL + "api/products";

const initialState = {
    products: [],
    status: "idle",
};

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await axios.get(API_URL);
    return response.data;
});

export const addProduct = createAsyncThunk("products/addProduct", async (product) => {
    const response = await axios.post(API_URL, product);
    return response.data;
});

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = "failed";
            })

            .addCase(addProduct.pending, (state) => {
                state.status = "loading";
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.products.push(action.payload);
            })
            .addCase(addProduct.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export default productsSlice.reducer;
