import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart:[]
}


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