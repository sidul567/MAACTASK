import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: "",
    user: "",

}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        useLogin: (state, action)=>{
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        useLoadUser: (state, action)=>{
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        useLogout: (state, action)=>{
            state.token = "";
            state.user = "";
        }
    }
})

export const {useLogin, useLoadUser, useLogout} = authSlice.actions;