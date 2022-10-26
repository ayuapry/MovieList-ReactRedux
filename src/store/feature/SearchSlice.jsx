import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    search: [],
};

  export const searchMovie = createAsyncThunk ("movies/searchMovie", async (name = false) => {
    try{
        const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=244fa9aef597e28aa246abfdef2d39f6&query=${name}`
        );
        return res.data.results
    }
    catch (error){
        console.log(error)
    }
})

export const SearchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {},
    extraReducers: {
      [searchMovie.pending]: (state) => {
        state.loading = true;
      },
      [searchMovie.fulfilled]: (state, { payload }) => {
        state.loading = false;
        state.search = payload;
      },
      [searchMovie.rejected]: (state) => {
        state.loading = false;
      },
    },
  });
  export default SearchSlice.reducer;