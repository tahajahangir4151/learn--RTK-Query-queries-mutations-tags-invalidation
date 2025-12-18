import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPosts: builder.query<any[], void>({
      query: () => "posts",
      providesTags: ["Posts"],
    }),
    addPost: builder.mutation<
      any,
      { title: string; body: string; userId: number }
    >({
      query: (newPost) => ({
        url: "posts",
        method: "POST",
        body: newPost,
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const { useGetPostsQuery, useAddPostMutation } = postsApi;
