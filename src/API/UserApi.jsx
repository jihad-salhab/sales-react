import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SharedConstant } from "../Shared/SharedConstant";
export const UserApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["Users"],
  baseQuery: fetchBaseQuery({
    baseUrl: SharedConstant.baseUrl,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "/api/User",
        method: "GET",
      }),
      providesTags: ["Users"],
    }),
    LoginUser: builder.mutation({
      query: (credential) => ({
        url: "/api/User/login",
        method: "POST",
        body: credential,
      }),
      invalidatesTags: ["Users"],
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: "/api/User",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Users"],
    }),
    updateUser: builder.mutation({
      query: (user) => ({
        url: `/api/User/${user.id}`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: user,
      }),
      invalidatesTags: ["Users"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/api/User/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useLoginUserMutation,
  useAddUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = UserApi;
