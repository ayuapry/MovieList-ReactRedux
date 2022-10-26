import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    login: [],
};

export const getLogin = createAsyncThunk ("homepage/getLogin", async (input) => {
    // console.log(input)
    try{
        const res = await axios.get(
        `https://notflixtv.herokuapp.com/api/v1/users/login`, input
        );
        localStorage.setItem("user", JSON.stringify(res.data.data));
        localStorage.setItem("token", JSON.stringify(res.data.data.token));
        // return res.data.results
        // console.log(res)
    }
    catch (error){}
    // setTimeout(function () {
    //     window.location.reload(1);
    //   }, 1500);
})

const LoginSlice = createSlice (({
    name: "login",
    initialState,
    reducers: {},
    extraReducers: {
        [getLogin.pending]: (state, action) => {
            state.loading = true
        },
        [getLogin.fulfilled]: (state, action) =>{
            state.loading = false;
            state.login = action.payload;
        },
        [getLogin.rejected]: (state, action) =>{
            state.loading = false;
        }
    }
}))
export default LoginSlice.reducer;