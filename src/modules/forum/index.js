import * as actions from "./actions";
import * as types from "./constants";
import * as reducer from "./reducer";

import { takeLatest } from "redux-saga/effects";
import * as Sagas from "./sagas";

function* sagas(api) {
  yield takeLatest(types.FORUM_CREATE_BOARD_REQUESTED, Sagas.createBoard, api);
  yield takeLatest(types.FORUM_GET_BOARD_REQUESTED, Sagas.loadBoard, api);
  yield takeLatest(types.FORUM_GET_BOARDS_REQUESTED, Sagas.loadBoards, api);
  yield takeLatest(
    types.FORUM_CREATE_THREAD_REQUESTED,
    Sagas.createThread,
    api
  );
}

module.exports = {
  actions,
  types,
  reducer,
  sagas
};
