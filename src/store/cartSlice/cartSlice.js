import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/users"

const initialState = {
    cart:[],
    status: 'idle',
    
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
            
        },
        plus:(state,action)=>{
            state.cart = state.cart.map((item)=>{
                if(item.id === action.payload){
                    return {...item,count:item.count+1}
                }else{
                    return item
                }
            })
        },
        minus:(state,action)=>{
            const find = state.cart.find((item)=>item.id === action.payload)
            if(find.count === 1){
               state.cart = state.cart.filter((item)=>{
                return item.id !== action.payload
               })
            } else{
                state.cart = state.cart.map((item)=>{
                    if(item.id === action.payload){
                        return {...item,count:item.count-1}
                    }else{
                        return item
                    }
                })
            }
            
        }
    }
})
export const {add,plus,minus} = cartSlice.actions
export default cartSlice.reducer;