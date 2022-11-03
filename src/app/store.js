import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../counter/counterSlice'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { pokemonApi } from '../api/pokemonApi'
import { picApi } from '../api/pokemonApi'
import { aladanApi } from '../api/pokemonApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import logger from 'redux-logger'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [picApi.reducerPath]: picApi.reducer,
    [aladanApi.reducerPath]: aladanApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    immutableCheck: { warnAfter: 128 },
    serializableCheck: { warnAfter: 128 },
  }).concat(pokemonApi.middleware,picApi.middleware,aladanApi.middleware),

})

setupListeners(store.dispatch)