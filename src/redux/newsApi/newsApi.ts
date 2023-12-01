import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery, BASE_URL } from "services/api";
// import { WaybillStatus, WaybillStatusDefaultResponse } from "types/types";

export const newsApi = createApi({
  reducerPath: "news",

  baseQuery: axiosBaseQuery({
    baseUrl: BASE_URL as string,
  }),

  endpoints: (builder) => ({
    getNews: builder.query<any, void>({
      query: () => ({
        url: "/top-headlines/sources",
        method: "GET",
      }),
    }),

    getLatest: builder.query<any, void>({
      query: () => ({
        url: "/everything?q=ukraine",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetLatestQuery, useGetNewsQuery } = newsApi;
