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
        // console.log(res.data.results)
        // return res;
        }catch (error){
        console.log(error)
    }
})

// export const getGenres = createAsyncThunk("homepage/genres", async() => {
//     const {
//         data: {genres},
//     } = await axios.get (`https://api.themoviedb.org/3/genre/movie/list?api_key=244fa9aef597e28aa246abfdef2d39f6`
//     );
//     console.log(genres)
//     return genres;
// });

// const movieSlice = createSlice({
//     name: "Movies",
//     initialState,
//     extraReducers: (builder) => {
//         builder.addCase(getGenres.fulfilled, (state,action) => {
//             state.genres = action.payload;
//             state.genresLoaded = true;
//         })
//         builder.addCase(getMovies.fulfilled, (state,action) => {
//             state.movies = action.payload;
//         })
        
//     },
// });

const movieSlice = createSlice (({
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
export default movieSlice.reducer;