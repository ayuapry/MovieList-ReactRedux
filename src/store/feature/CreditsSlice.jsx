import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    credit: [],
};
export const getCredits = createAsyncThunk ("movies/getCredits", async (id = false) => {
    try{
        const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=244fa9aef597e28aa246abfdef2d39f6&language=en-US`
        );
        return res.data
        // console.log(res.data)
    }
    catch (error){
        console.log(error)
    }
})

export const CreditsSlice = createSlice({
    name: "credits",
    initialState,
    reducers: {},
    extraReducers: {
      [getCredits.pending]: (state) => {
        state.loading = true;
      },
      [getCredits.fulfilled]: (state, { payload }) => {
        state.loading = false;
        state.credit = payload;
      },
      [getCredits.rejected]: (state) => {
        state.loading = false;
      },
    },
  });
  export default CreditsSlice.reducer;