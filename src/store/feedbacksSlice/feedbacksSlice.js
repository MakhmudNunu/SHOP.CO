import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/feedbacksDB";

const initialState = {
    feedbacks: [],
    status: 'idle'
}

export const fetchFeedbacks = createAsyncThunk(
    'feedbacks/fetchFeedbacks',
    async () => {
        const response = await axios.get(API_URL);
        return response.data
    }
)

const addFeedback = createAsyncThunk(
    'feedbacks/addFeedback',
    async (feedback) => {
        const response = await axios.post(API_URL, feedback)
        return response.data
    }
)

const feedbacksSlice = createSlice({
    name: 'feedbacks',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFeedbacks.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchFeedbacks.fulfilled, (state, action) => {
                state.status = 'success'
                state.feedbacks = action.payload
            })
            .addCase(fetchFeedbacks.rejected, (state) => {
                state.status = 'failed'
            })

            .addCase(addFeedback.fulfilled, (state, action) => {
                state.status = 'success'
                state.feedbacks.push(action.payload)
            })
    }
})

export default feedbacksSlice.reducer;