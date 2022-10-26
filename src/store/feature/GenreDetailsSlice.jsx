import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    genreMovies: [],
};

export const getGenreMovies = createAsyncThunk ("movies/getGenreMovies", async (id = false) => {
    try{
        const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=6b4cec3e77943cdafbcaaaead5f55c14&query=${id}`
        );
        return res.data.results
    }
    catch (error){
        console.log(error)
    }
})

const GenreDetailsSlice = createSlice (({
    name: "genreMovies",
    initialState,
    reducers: {},
    extraReducers: {
        [getGenreMovies.pending]: (state) => {
            state.loading = true
        },
        [getGenreMovies.fulfilled]: (state, action) =>{
            state.loading = false;
            state.genreMovies = action.payload;
        },
        [getGenreMovies.rejected]: (state) =>{
            state.loading = false;
        }
    }
}))
export default GenreDetailsSlice.reducer;