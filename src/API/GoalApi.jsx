import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SharedConstant } from "../Shared/SharedConstant";
export const GoalApi = createApi({
  reducerPath: "goalApi",
  tagTypes: ["Goals"],
  baseQuery: fetchBaseQuery({
    baseUrl: SharedConstant.baseUrl,
  }),
  endpoints: (builder) => ({
    getGoals: builder.query({
      query: () => ({
        url: "/api/Goal",
        method: "GET",
      }),
      providesTags: ["Goals"],
    }),
    addGoal: builder.mutation({
      query: (goal) => ({
        url: "/api/Goal",
        method: "POST",
        body: goal,
      }),
      invalidatesTags: ["Goals"],
    }),
    updateGoal: builder.mutation({
      query: (goal) => {
        return {
          url: `/api/Goal/${goal.id}`,
          method: "PUT",
          body: goal.formData,
        };
      },
      invalidatesTags: ["Goals"],
    }),
    deleteGoal: builder.mutation({
      query: (id) => ({
        url: `/api/Goal/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Goals"],
    }),
  }),
});

export const {
  useGetGoalsQuery,
  useAddGoalMutation,
  useDeleteGoalMutation,
  useUpdateGoalMutation,
} = GoalApi;
