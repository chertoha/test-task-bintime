import axios from "axios";
import type { AxiosRequestConfig, AxiosError } from "axios";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";

export const BASE_URL = process.env.REACT_APP_API_ENTRY_POINT;
const API_KEY = process.env.REACT_APP_API_KEY;

export const api = axios.create({
  baseURL: BASE_URL,

  params: { apiKey: API_KEY },
  // headers: {
  //   common: {
  //     "X-Api-Key": API_KEY,
  //   },
  // },
});

export const axiosBaseQuery =
  (): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await api({
        url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
