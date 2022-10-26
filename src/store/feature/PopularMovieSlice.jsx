import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    movies: [],
    
    // genresLoaded: false,
    // genres: [],
};

export const getMovies = createAsyncThunk ("homepage/getMovies", async () => {
    try{
        const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=244fa9aef597e28aa246abfdef2d39f6&language=en-US&page=1`
        );
        return res.data.results
    }
    catch (error){
        console.log(error)
    }
})

const PopularMovieSlice = createSlice (({
    name: "movies",
    initialState,
    reducers: {},
    extraReducers: {
        [getMovies.pending]: (state, action) => {
            state.loading = true
        },
        [getMovies.fulfilled]: (state, action) =>{
            state.loading = false;
            state.movies = action.payload;
        },
        [getMovies.rejected]: (state, action) =>{
            state.loading = false;
        }
    }
}))
export default PopularMovieSlice.reducer;