import { call, put } from "redux-saga/effects";
import * as types from "./constants";
import {
  postBoard,
  putBoard,
  getBoard,
  getBoards,
  postThread
} from "./service";

export function* createBoard(api, action) {
  try {
    const board = yield call(postBoard, api, action);
    yield put({ type: types.FORUM_CREATE_BOARD_SUCCEEDED, payload: board });
  } catch (error) {
    yield put({
      type: types.FORUM_CREATE_BOARD_FAILED,
      payload: error.message
    });
  }
}

export function* loadBoard(api, action) {
  try {
    const board = yield call(getBoard, api, action);
    yield put({ type: types.FORUM_GET_BOARD_SUCCEEDED, payload: board });
  } catch (error) {
    yield put({ type: types.FORUM_GET_BOARD_FAILED, payload: error.message });
  }
}

export function* loadBoards(api, action) {
  try {
    const boards = yield call(getBoards, api, action);
    yield put({ type: types.FORUM_GET_BOARDS_SUCCEEDED, payload: boards });
  } catch (error) {
    yield put({ type: types.FORUM_GET_BOARDS_FAILED, payload: error.message });
  }
}

export function* editBoard(api, action) {
  try {
    const board = yield call(putBoard, api, action);
    yield put({ type: types.FORUM_CREATE_BOARD_SUCCEEDED, payload: board });
  } catch (error) {
    yield put({
      type: types.FORUM_CREATE_BOARD_FAILED,
      payload: error.message
    });
  }
}

export function* createThread(api, action) {
  try {
    const board = yield call(postThread, api, action);
    yield put({ type: types.FORUM_CREATE_THREAD_SUCCEEDED, payload: board });
  } catch (error) {
    yield put({
      type: types.FORUM_CREATE_THREAD_FAILED,
      payload: error.message
    });
  }
}
