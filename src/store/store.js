import { configureStore } from "@reduxjs/toolkit";
import tracksReducer from "./slices/tracksSlice";
import authReduces from "./slices/authSlice";
import { tracksQuery } from "../servicesQuery/tracks";
import { tokenQuery } from "../servicesQuery/token";

export const store = configureStore({
  reducer: {
    tracks: tracksReducer,
    auth: authReduces,
    [tracksQuery.reducerPath]: tracksQuery.reducer,
    [tokenQuery.reducerPath]: tokenQuery.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(tracksQuery.middleware)
      .concat(tokenQuery.middleware),
});
