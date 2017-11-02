import * as types from "./constants";

export const createUser = payload => ({
  type: types.USER_CREATE_REQUESTED,
  payload
});

export const doLogin = payload => ({
  type: types.USER_AUTH_REQUESTED,
  payload
});

export const doLogout = () => ({
  type: types.USER_LOGOUT_REQUESTED
});

export const doPasswordChange = () => ({
  type: types.USER_CHANGE_PASSWD_REQUESTED
});

export const isLoggedIn = () => ({
  type: types.USER_CHECK_AUTH_REQUESTED
});

export const isAdmin = () => ({
  type: types.USER_IS_ADMIN_REQUESTED
});

export const setToken = payload => ({
  type: types.USER_SET_TOKEN_REQUESTED,
  payload
});
