import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countriesApi = createApi({
  reducerPath: "countriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1" }),
  endpoints: (builder) => ({
    getAllCountries: builder.query({
      query: () => `/all`,
    }),
    getCountriesByCode: builder.query({
      query: (name) => `/name/${name}`,
    }),
  }),
});
export const { useGetAllCountriesQuery, useGetCountriesByCodeQuery } =
  countriesApi;
