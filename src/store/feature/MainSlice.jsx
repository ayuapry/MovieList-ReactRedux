import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    main: [],
};

export const getMoviesMain = createAsyncThunk ("homepage/getMoviesMain", async () => {
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

const MainSlice = createSlice (({
    name: "main",
    initialState,
    reducers: {},
    extraReducers: {
        [getMoviesMain.pending]: (state, action) => {
            state.loading = true
        },
        [getMoviesMain.fulfilled]: (state, action) =>{
            state.loading = false;
            state.main = action.payload;
        },
        [getMoviesMain.rejected]: (state, action) =>{
            state.loading = false;
        }
    }
}))
export default MainSlice.reducer;