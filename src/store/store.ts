import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "./api/postsApi";
import { usersApi } from "./api/usersApi";

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefault) =>
    getDefault().concat(postsApi.middleware, usersApi.middleware),
});
