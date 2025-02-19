import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/users"

const initialState = {
    cart:[],
    status: 'idle'
}

export const fetchCart = createAsyncThunk(
    'cart/fetchCart',
    async () => {
        const response = await axios.get(API_URL)
        return response.data[0].cart
    }
)

export const addCart = createAsyncThunk(
    'cart/addCart',
    async (payload) => {
        const response = await axios.post(API_URL, payload)
        return response.data
    }
)

const removeCart = createAsyncThunk(
    'cart/removeCart',
    async (payload) => {
        await axios.delete(`${API_URL}/${payload}`)
        return payload
    }
)

export const cartSlice = createSlice({
    name:"cartSlice",
    initialState,
    reducers:{
        add:(state,action)=>{
            state.cart = [...state.cart,action.payload]
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCart.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.status = 'success'
                state.cart = action.payload
            })
            .addCase(fetchCart.rejected, (state) => {
                state.status = 'failed'
            })

            .addCase(addCart.fulfilled, (state, action) => {
                state.status = 'success'
                state.cart = [...state.cart, action.payload]
            })

            .addCase(removeCart.fulfilled, (state, action) => {
                state.status = 'success'
                state.cart = state.cart.filter(item => item.id !== action.payload)
            })
    }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer