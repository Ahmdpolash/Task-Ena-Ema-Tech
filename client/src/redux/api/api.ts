import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://task-managament-srver.vercel.app",
    // baseUrl: "http://localhost:8000",
  }),
  tagTypes: ["tasks"],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: (priority) => ({
        url: `/api/tasks?priority=${priority}`,
        method: "GET",
      }),
      providesTags: ["tasks"],
    }),
    getSingleTasks: builder.query({
      query: (id) => ({
        url: `/api/tasks/${id}`,
        method: "GET",
      }),
      providesTags: ["tasks"],
    }),
    addTasks: builder.mutation({
      query: (data) => {
        return {
          url: "/api/tasks",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["tasks"],
    }),
    deleteTasks: builder.mutation({
      query: (id) => {
        return {
          url: `/api/tasks/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["tasks"],
    }),
    updateTasks: builder.mutation({
      query: ({ id, ...data }) => {
        return {
          url: `/api/tasks/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["tasks"],
    }),
    updateTasksCompletion: builder.mutation({
      query: (id) => {
        return {
          url: `/api/tasks/${id}/complete`,
          method: "POST",
        };
      },
      invalidatesTags: ["tasks"],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useAddTasksMutation,
  useDeleteTasksMutation,
  useGetSingleTasksQuery,
  useUpdateTasksMutation,
  useUpdateTasksCompletionMutation,
} = baseApi;
