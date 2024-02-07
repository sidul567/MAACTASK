import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";
import { authSlice, useLoadUser } from "./features/auth/authSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [authSlice.name]: authSlice.reducer,
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware)
})

const initializeApp = ()=>{
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {};
    const token = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : {};
    store.dispatch(useLoadUser({user, token}));
}

initializeApp(); 