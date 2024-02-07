import { apiSlice } from "../api/apiSlice";

const regionAreaApi = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        getRegion: builder.query({
            query: ({number})=>({
                url: `region/${number}/1`,
                credentials: "include"
            })
        }),
        getArea: builder.query({
            query: ({number})=>({
                url: `area/All/${number}/1`,
                credentials: "include"
            })
        }),
        createRegion: builder.mutation({
            query: (name)=>({
                url: 'region',
                method: 'POST',
                body: {name},
                credentials: "include",
            }),
        }),
        createArea: builder.mutation({
            query: ({ name, region })=>({
                url: 'area',
                method: 'POST',
                body: {name, region},
                credentials: "include",
            })
        })
    })
})

export const {useGetRegionQuery, useGetAreaQuery, useCreateRegionMutation, useCreateAreaMutation} = regionAreaApi;