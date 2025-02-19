import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/users"

const initialState = {
    cart:[],
    status: 'idle'
}

const fetchCart = createAsyncThunk(
    'cart/fetchCart',
    async () => {
        await axios.get(API_URL)
    }
)


export const cartSlice = createSlice({
    name:"cartSlice",
    initialState,
    reducers:{
        add:(state,action)=>{
            state.cart = [...state.cart,action.payload]
            console.log(state)
        }
    }
})
export const {add} = cartSlice.actions
export default cartSlice.reducer;