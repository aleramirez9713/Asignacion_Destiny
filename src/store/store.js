import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { destinySlice } from "./";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    destiny: destinySlice.reducer
  },
});
