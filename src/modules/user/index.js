import { takeLatest } from "redux-saga/effects";
import * as actions from "./actions";
import * as types from "./constants";
import * as reducer from "./reducer";
import * as Sagas from "./sagas";

function* sagas(api) {
  yield takeLatest(types.USER_CREATE_REQUESTED, Sagas.createUser, api);
  yield takeLatest(types.USER_AUTH_REQUESTED, Sagas.login, api);
  yield takeLatest(types.USER_LOGOUT_REQUESTED, Sagas.logout, api);
  yield takeLatest(types.USER_CHECK_AUTH_REQUESTED, Sagas.isLoggedIn, api);
  yield takeLatest(types.USER_SET_TOKEN_REQUESTED, Sagas.setToken, api);
}

module.exports = {
  actions,
  types,
  reducer,
  sagas
};
