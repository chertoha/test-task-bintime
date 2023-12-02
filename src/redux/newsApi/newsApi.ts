import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "services/api";
import { News } from "types/dataTypes";
import { GetNewsQuery } from "types/queryTypes";

export const newsApi = createApi({
  reducerPath: "news",

  baseQuery: axiosBaseQuery(),

  endpoints: (builder) => ({
    getNews: builder.query<News, GetNewsQuery>({
      query: ({ query, page, pageSize }) => ({
        url: "/top-headlines",
        method: "GET",
        params: {
          q: query,
          page,
          pageSize,
        },
      }),
    }),

    // getLatest: builder.query<any, void>({
    //   query: () => ({
    //     url: "/everything?q=ukraine",
    //     method: "GET",
    //   }),
    // }),
  }),
});

export const { useGetNewsQuery } = newsApi;
