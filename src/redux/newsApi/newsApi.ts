import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "services/api";
import { DEFAULT_QUERY } from "services/apiConfig";
import { News } from "types/dataTypes";
import { GetNewsQuery } from "types/queryTypes";

export const newsApi = createApi({
  reducerPath: "news",

  baseQuery: axiosBaseQuery(),

  endpoints: (builder) => ({
    getNews: builder.query<News, GetNewsQuery>({
      query: ({ query, page, pageSize, category, country }) => ({
        url: "/top-headlines",
        method: "GET",
        params: {
          q: !query && !category && !country ? DEFAULT_QUERY : query,
          page,
          pageSize,
          category,
          country,
        },
      }),
    }),

    //   query: ({ query, page, pageSize, category, country }) => {
    //     const q = !query && !category && !country ? DEFAULT_QUERY : query;

    //     return {
    //       url: "/top-headlines",
    //       method: "GET",
    //       params: {
    //         q,
    //         page,
    //         pageSize,
    //         category,
    //         country,
    //       },
    //     };
    //   },
    // }),

    // getLatest: builder.query<any, void>({
    //   query: () => ({
    //     url: "/everything?q=ukraine",
    //     method: "GET",
    //   }),
    // }),
  }),
});

export const { useGetNewsQuery } = newsApi;
