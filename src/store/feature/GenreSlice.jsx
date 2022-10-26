import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    genre: [],
};

export const getGenre = createAsyncThunk ("movies/getGenre", async () => {
    try{
        const res = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=244fa9aef597e28aa246abfdef2d39f6&language=en-US`
        );
        return res.data.genres
    }
    catch (error){
        console.log(error)
    }
})


const GenreSlice = createSlice (({
    name: "genre",
    initialState,
    reducers: {},
    extraReducers: {
        [getGenre.pending]: (state) => {
            state.loading = true
        },
        [getGenre.fulfilled]: (state, action) =>{
            state.loading = false;
            state.genre = action.payload;
        },
        [getGenre.rejected]: (state) =>{
            state.loading = false;
        }
    }
}))
export default GenreSlice.reducer;