import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import cookie from "js-cookie";
export const authServiceApi = createApi({
  reducerPath: "authServiceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://accounts.lattehub.com/api",
    prepareHeaders: (headers: any, { getState }: any) => {
      const accessToken =
        getState().auth.accessToken || cookie.get("accessToken");
      headers.set("Content-Type", "application/json; charset=utf-8");
      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);
        headers.set("x-access-token", `${accessToken}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    authLogin: builder.mutation({
      query: (payload) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
      }),
    }),
    getStore: builder.query({
      query: () => ({
        url: "/users/stores",
        method: "GET",
      }),
    }),
    createStore: builder.mutation({
      query: (payload) => ({
        url: "users/create-store",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const {
  useAuthLoginMutation,
  useGetStoreQuery,
  useCreateStoreMutation,
} = authServiceApi;
