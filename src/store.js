import { configureStore } from "@reduxjs/toolkit";
import LangugeSlice from "./slice/SliceLanguge";
import themeSlice from "./slice/themeSlice";
import { countriesApi } from "./services/countriesApi";
import { setupListeners } from "@reduxjs/toolkit/query";
// Or from '@reduxjs/toolkit/query/react'
export const store = configureStore({
  reducer: {
    lang: LangugeSlice,
    theme: themeSlice,
    [countriesApi.reducerPath]: countriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware),
});
setupListeners(store.dispatch);
