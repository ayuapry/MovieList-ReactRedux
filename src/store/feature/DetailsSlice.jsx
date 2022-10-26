import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    details: [],
};

export const getDetails = createAsyncThunk ("movies/getDetails", async (id = false) => {
    try{
        const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=244fa9aef597e28aa246abfdef2d39f6`
        );
        return res.data
        // console.log(res.data)
    }
    catch (error){
        console.log(error)
    }
})

const DetailsSlice = createSlice (({
    name: "details",
    initialState,
    reducers: {},
    extraReducers: {
        [getDetails.pending]: (state) => {
            state.loading = true
        },
        [getDetails.fulfilled]: (state, action) =>{
            state.loading = false;
            state.details = action.payload;
        },
        [getDetails.rejected]: (state) =>{
            state.loading = false;
        }
    }
}))
export default DetailsSlice.reducer;