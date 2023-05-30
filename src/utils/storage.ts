import cookie from "js-cookie";

// ===== ACCESS_TOKEN =====
const ACCESS_TOKEN_KEY = "accessToken";

export const saveAccessToken = (accessToken: string) => {
  cookie.set(ACCESS_TOKEN_KEY, accessToken);
};

export const readAccessToken = () => {
  return cookie.get(ACCESS_TOKEN_KEY);
};

// ===== REFRESH ACCESS_TOKEN =====

const REFRESH_TOKEN_KEY = "refreshToken";

export const saveRefreshToken = (refreshToken: string) => {
  cookie.set(REFRESH_TOKEN_KEY, refreshToken);
};

export const readRefreshToken = () => {
  return cookie.get(REFRESH_TOKEN_KEY);
};
