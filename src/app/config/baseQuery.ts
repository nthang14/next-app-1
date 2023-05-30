// import { logout } from "~/app/slices/authSlice";
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { notification } from "antd";
import { Mutex } from "async-mutex";
import axios from "axios";
import { readAccessToken } from "~/utils/storage";
import { ErrorProps } from "~/types/globalTypes";
import { METHOD } from "~/utils/constants";
const PATH_API = "https://accounts.lattehub.com/api";
// create a new mutex
const mutex = new Mutex();

const instance = axios.create({
  baseURL: PATH_API,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config: any) => {
    const accessToken = readAccessToken();
    config.headers["Content-Type"] = "application/json; charset=utf-8";
    config.headers.Authorization = "Bearer " + accessToken;
    config.headers["x-access-token"] = accessToken;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const callApi = async (args: any) => {
  const method = args.method.toLowerCase();
  switch (method) {
    case METHOD.post:
      return await instance.post(`${PATH_API}${args.url}`, args.body);
    case METHOD.put:
      return await instance.put(`${PATH_API}${args.url}`, args.body);
    case METHOD.delete:
      return await instance.delete(`${PATH_API}${args.url}`);
    default:
      return await instance.get(`${PATH_API}${args.url}`);
  }
};

const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api) => {
  await mutex.waitForUnlock();
  const response = {
    data: [],
  };
  let result: any = await callApi(args);
  response.data = result.data;
  const error = result.data.error;

  if (error && error.code) {
    switch (error.code) {
      case 400:
        notification.error({
          message: "Bad request",
        });
        break;
      case 401:
        // api.dispatch(logout());
        notification.error({
          message: error.message,
        });
        break;
      case 403:
        notification.error({
          message: error.message,
        });
        // api.dispatch(logout());
        break;
      case 422:
        const getError = Object.values(
          (result.error?.data as ErrorProps)?.errors
        )[0];
        notification.error({
          message: getError[0],
        });
        break;
      case 500:
        notification.error({
          message: "Error",
        });
        break;
      case 501:
      case 502:
      case 503:
        notification.error({
          message: "Internal Server Error",
        });
        break;
    }
  }
  return response;
};

export default baseQuery;
