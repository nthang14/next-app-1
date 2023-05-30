export const ORDER_ASCEND = "ascend";
export const ORDER_DESCEND = "descend";
export const PATH_API: string =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:8000/api/v1";
export const PATH_API_TEST: string = "http://localhost:8000/api/v1";

export const PATH_NO_LAYOUT = "/auth";

export const METHOD = {
  get: "get",
  post: "post",
  put: "put",
  delete: "delete",
};
