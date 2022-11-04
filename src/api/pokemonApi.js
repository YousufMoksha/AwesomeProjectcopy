import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})


export const picApi = createApi({
    reducerPath: 'picApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api/' }),
    endpoints: (builder) => ({
      getPicApi: builder.query({
        query: (page) => `users?page=${page}`,
      }),
      setPicApi:builder.mutation({
        query(body) {
          return {
            url: `post`,
            method: 'POST',
            body,
          }
        }
    }),
  }), 
 })




 export const aladanApi = createApi({
    reducerPath: 'aladanApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.aladhan.com/v1/' }),
    endpoints: (builder) => ({
      getAladanApi: builder.query({
        query: args => `calendar?latitude=${args.lat}&longitude=${args.longitude}&method=${args.method}`
      }),
    }),
  })
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi
export const { useGetPicApiQuery,useSetPicApiMutation } = picApi
export const { useGetAladanApiQuery } = aladanApi