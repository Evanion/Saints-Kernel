import { takeLatest } from "redux-saga/effects";
import * as actions from "./actions";
import * as types from "./constants";
import * as reducer from "./reducer";
import * as Sagas from "./sagas";

function* sagas(api) {
  yield takeLatest(types.MEMBER_GET_REQUESTED, Sagas.getMember, api);
}

module.exports = {
  actions,
  types,
  reducer,
  sagas
};
