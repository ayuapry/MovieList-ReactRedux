import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    login: [],
};

export const onLogin = createAsyncThunk ("movies/onLogin", async (formValues) => {
    try{
        const res = await axios.post(
        `https://notflixtv.herokuapp.com/api/v1/users/login`, formValues
        );
        localStorage.setItem("user", JSON.stringify(res.data.data));
        localStorage.setItem("token", JSON.stringify(res.data.data.token));
        return res.data
        // console.log(res)
    }
    catch (error){
        console.log(error);
    }
})

const LoginSlice = createSlice (({
    name: "login",
    initialState,
    reducers: {},
    extraReducers: {
        [onLogin.pending]: (state, action) => {
            state.loading = true
        },
        [onLogin.fulfilled]: (state, {payload}) =>{
            state.loading = false;
            state.login = payload;
        },
        [onLogin.rejected]: (state, action) =>{
            state.loading = false;
        }
    }
}))
export default LoginSlice.reducer;