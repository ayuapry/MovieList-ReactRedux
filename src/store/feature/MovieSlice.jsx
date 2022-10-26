import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    allmovies: [],
};

export const getAllMovies = createAsyncThunk ("movies/getAllMovies", async () => {
    try{
        const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=244fa9aef597e28aa246abfdef2d39f6&language=en-US&page=4`
        );
        return res.data.results
    }
    catch (error){
        console.log(error)
    }
})

const AllMovieSlice = createSlice (({
    name: "allmovies",
    initialState,
    reducers: {},
    extraReducers: {
        [getAllMovies.pending]: (state) => {
            state.loading = true
        },
        [getAllMovies.fulfilled]: (state, action) =>{
            state.loading = false;
            state.allmovies = action.payload;
        },
        [getAllMovies.rejected]: (state) =>{
            state.loading = false;
        }
    }
}))
export default AllMovieSlice.reducer;