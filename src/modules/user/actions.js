import * as types from "./constants";

export const createUser = payload => ({
  type: types.USER_CREATE_REQUESTED,
  payload
});

export const doLogin = payload => ({
  type: types.USER_AUTH_SUCCEEDED,
  payload
});

export const doLogout = () => ({
  type: types.USER_LOGOUT_REQUESTED
});

export const doPasswordChange = () => ({
  type: types.USER_CHANGE_PASSWD_REQUESTED
});
