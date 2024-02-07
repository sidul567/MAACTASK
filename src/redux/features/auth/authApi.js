import { apiSlice } from "../api/apiSlice";
import { useLogin } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        registration: builder.mutation({
            query: (user)=>({
                url: "users/signup",
                body: user,
                credentials: "include",
                method: "POST"
            }),
            onQueryStarted: async (arg, {queryFulfilled, dispatch})=>{
                try{
                    const {data} = await queryFulfilled;
                    dispatch(useLogin(data));
                }catch(err){
                    console.log(err);
                }
            }
        }),
        login: builder.mutation({
            query: ({email, password})=>({
                url: "users/login",
                body: {employeeId: email, password},
                credentials: "include",
                method: "POST",
            }),
            onQueryStarted: async (arg, {queryFulfilled, dispatch})=>{
                try{
                    const {data} = await queryFulfilled;
                    dispatch(useLogin(data));
                }catch(err){
                    console.log(err);
                }
            }
        })
    })
})

export const {useLoginMutation, useRegistrationMutation} = authApi;