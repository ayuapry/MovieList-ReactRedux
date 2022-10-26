import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginauth: [],
};

export const getLoginAuth = createAsyncThunk ("homepage/getLogin", async (credentialResponse) => {
    console.log(credentialResponse)
    localStorage.setItem('token', credentialResponse.credential)
    localStorage.setItem('user', JSON.stringify({first_name: 'google user'}))
    setTimeout(function () {
        window.location.reload(1);
      }, 1500);
})

const LoginAuthSlice = createSlice (({
    name: "loginauth",
    initialState,
    reducers: {},
    extraReducers: {
        [getLoginAuth.pending]: (state, action) => {
            state.loading = true
        },
        [getLoginAuth.fulfilled]: (state, action) =>{
            state.loading = false;
            state.loginauth = action.payload;
        },
        [getLoginAuth.rejected]: (state, action) =>{
            state.loading = false;
        }
    }
}))
export default LoginAuthSlice.reducer;