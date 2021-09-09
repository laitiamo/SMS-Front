import { post, pureGet } from "../common/ajax";

export const login = (username, password) =>
  post("/user/login", {
    username: username,
    password: password
  });

export const getLoginStatus = () => pureGet("/user/login/status");

export const logout = () => pureGet("/user/logout");
