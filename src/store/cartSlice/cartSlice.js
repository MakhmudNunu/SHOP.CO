import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/users/1"

const initialState = {
    cart:[],
    status: 'idle',
    
}

export const fetchCart = createAsyncThunk(
    'cart/fetchCart',
    async () => {
        const response = await axios.get(API_URL)
        return response.data.cart
    }
)

export const addCart = createAsyncThunk(
    'cart/addCart',
    async (payload) => {
      const { data: user } = await axios.get(API_URL);
      const findItem = user.cart.find((item) => item.id === payload.id && item.sizes === payload.sizes && item.colors === payload.colors);
      console.log(findItem)
      const updatedCart = findItem ? 
        user.cart.map((item) => item.id === payload.id ? {...item, count: item.count + payload.count} : item) 
        : [...user.cart, payload]

      const response = await axios.patch(API_URL, {
        cart: updatedCart,
      });
      return response.data;
    }
);

const removeCart = createAsyncThunk(
    'cart/removeCart',
    async (payload) => {
        await axios.delete(`${API_URL}/${payload}`)
        return payload
    }
)


export const itemPlus = createAsyncThunk(
  'cart/itemPlus',
  async (payload) => {
    const { data: user } = await axios.get(API_URL);
    const updatedCart = user.cart.map((item) =>
      item.id === payload.id && item.sizes === payload.sizes && item.colors === payload.colors
        ? { ...item, count: item.count + 1 }
        : item
    );

    const response = await axios.patch(API_URL, { cart: updatedCart });
    return response.data.cart;
  }
);

export const itemMinus = createAsyncThunk(
  'cart/itemMinus',
  async (payload) => {
    const { data: user } = await axios.get(API_URL);
    const updatedCart = user.cart.map((item) =>
      item.id === payload.id && item.sizes === payload.sizes && item.colors === payload.colors && item.count > 1
        ? { ...item, count: item.count - 1 }
        : item
    );

    const response = await axios.patch(API_URL, { cart: updatedCart });
    return response.data.cart;
  }
);


export const cartSlice = createSlice({
    name:"cartSlice",
    initialState,
   
    reducers:{},
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

            .addCase(itemPlus.fulfilled, (state, action) => {
              state.status = 'success';
              state.cart = action.payload;
            })
            .addCase(itemMinus.fulfilled, (state, action) => {
              state.status = 'success';
              state.cart = action.payload;
            })
            
    }
})

export default cartSlice.reducer
