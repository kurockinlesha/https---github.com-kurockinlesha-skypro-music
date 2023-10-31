import { configureStore } from "@reduxjs/toolkit";
import tracksReducer from "./redusers/tracks";

export const store = configureStore({
  reducer: {
    tracks: tracksReducer,
  },
});

