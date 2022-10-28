import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    register: [],
};

export const onRegister = createAsyncThunk ("movies/onRegister", async (formValues) => {
    try{
        const res = await axios.post(
        `https://notflixtv.herokuapp.com/api/v1/users`, formValues
        );
        localStorage.setItem("user", JSON.stringify(res.data.data));
        localStorage.setItem("token", JSON.stringify(res.data.data.token));
        // return res.data
    }
    catch (error){
        console.log(error);
    }
})

const RegisterSlice = createSlice (({
    name: "register",
    initialState,
    reducers: {},
    extraReducers: {
        [onRegister.pending]: (state, action) => {
            state.loading = true
        },
        [onRegister.fulfilled]: (state, {payload}) =>{
            state.loading = false;
            state.register = payload;
        },
        [onRegister.rejected]: (state, action) =>{
            state.loading = false;
        }
    }
}))
export default RegisterSlice.reducer;