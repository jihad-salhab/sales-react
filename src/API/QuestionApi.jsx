import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { SharedConstant } from "../Shared/SharedConstant";

export const QuestionApi = createApi({
  reducerPath: "questionApi",
  tagTypes: ["Questions"],
  baseQuery: fetchBaseQuery({
    baseUrl: SharedConstant.baseUrl,
  }),
  endpoints: (builder) => {
    getQuestionsByGoalId: builder.query({
      query: (goalId) => {
        return { url: `/api/Question/byGoalId/${goalId}`, method: "GET" };
      },
      providesTags: ["Questions"],
    });
  },
});
