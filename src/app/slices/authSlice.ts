import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "~/app/store";
import { saveAccessToken, saveRefreshToken } from "~/utils/storage";
import { authServiceApi } from "~/app/services/authService";
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
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      saveAccessToken(action.payload.accessToken);
      saveRefreshToken(action.payload.refreshToken);
    },
    logout(state) {
      state.accessToken = "";
      state.refreshToken = "";
      saveAccessToken("");
      saveRefreshToken("");
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: (builder) => {
    builder.addMatcher(
      authServiceApi.endpoints.authLogin.matchFulfilled,
      (state, { payload }) => {
        if (payload.accessToken) {
          saveAccessToken(payload.token);
          saveRefreshToken(payload.refresh_token);
        }
        return {
          ...state,
          accessToken: payload.accessToken,
          refreshToken: payload.refreshToken,
        };
      }
      // eslint-disable-next-line no-sequences
    );
    // builder.addMatcher(
    //   authServiceApi.endpoints.getProfile.matchFulfilled,
    //   (state, { payload }) => {
    //     return { ...state, user: payload };
    //   }
    // );
  },
});

export const { setAuthState, logout } = authSlice.actions;

export default authSlice.reducer;
