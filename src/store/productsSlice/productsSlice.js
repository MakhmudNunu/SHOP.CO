import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/productsDB";

const initialState = {
    products:[],
    status: 'idle'
}

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await axios.get(API_URL)
        return response.data
    }
)

const addProduct = createAsyncThunk(
    'products/addProduct',
    async (product) => {
        const response = await axios.post(API_URL, product)
        return response.data
    }
)

export const productsSlice = createSlice({
    name:"productsSlice",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder

            //Получение всех товаров
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'success';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = 'failed'
            })

            //Добавление нового товара
            .addCase(addProduct.fulfilled, (state, action) => {
                state.products.push(action.payload)
                
            })
    },
})

export default productsSlice.reducer;