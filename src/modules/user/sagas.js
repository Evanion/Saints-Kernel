import { call, put } from "redux-saga/effects";
import * as types from "./constants";
import {
  newUser,
  loginUser,
  logoutUser,
  isAuthenticated,
  saveToken
} from "./service";

export function* createUser(api, action) {
  try {
    const user = yield call(newUser, api, action);
    yield put({ type: types.USER_CREATE_SUCCEEDED, payload: user });
  } catch (error) {
    yield put({ type: types.USER_CREATE_FAILED, payload: error.message });
  }
}

export function* login(api, action) {
  try {
    const user = yield call(loginUser, api, action);
    yield put({ type: types.USER_AUTH_SUCCEEDED, payload: user });
  } catch (error) {
    yield put({ type: types.USER_AUTH_FAILED, payload: error });
  }
}

export function* isLoggedIn(api, action) {
  try {
    const user = yield call(isAuthenticated, api, action);
    yield put({ type: types.USER_CHECK_AUTH_SUCCEEDED, payload: user });
  } catch (error) {
    yield put({ type: types.USER_CHECK_AUTH_FAILED, payload: error });
  }
}

export function* logout(api, action) {
  try {
    const result = yield call(logoutUser, api, action);
    yield put({ type: types.USER_LOGOUT_SUCCEEDED, payload: result });
  } catch (error) {
    yield put({ type: types.USER_LOGOUT_FAILED, payload: error.message });
  }
}

export function* setToken(api, action) {
  try {
    const result = yield call(saveToken, api, action);
    yield put({ type: types.USER_SET_TOKEN_SUCCEEDED, payload: result });
    yield put({ type: types.USER_CHECK_AUTH_REQUESTED });
  } catch (error) {
    yield put({ type: types.USER_SET_TOKEN_FAILED, payload: error.message });
  }
}
