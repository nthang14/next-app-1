import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "~/app/store";
import cookie from "js-cookie";
// Type for our state
export interface AuthState {
  accessToken: string;
  refreshToken: string;
}

// Initial state
const initialState: AuthState = {
  accessToken: "",
  refreshToken: "",
};

// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to set the authentication status
    setAuthState(state, action) {
      console.log("action", action);

      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      cookie.set("accessToken", action.payload.accessToken);
      cookie.set("refreshToken", action.payload.accessToken);
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {},
});

export const { setAuthState } = authSlice.actions;

export default authSlice.reducer;
