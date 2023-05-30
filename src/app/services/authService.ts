import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "~/app/config/baseQuery";

export const authServiceApi = createApi({
  reducerPath: "authServiceApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    authLogin: builder.mutation({
      query: (payload) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
      }),
    }),
    authLogout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "DELETE",
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
  useAuthLogoutMutation,
} = authServiceApi;
