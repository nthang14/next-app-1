import { configureStore } from "@reduxjs/toolkit";
import { authServiceApi } from "~/app/services/authService";
import authSlice from "~/app/slices/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [authServiceApi.reducerPath]: authServiceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authServiceApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
