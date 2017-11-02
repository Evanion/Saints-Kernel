import { call, put } from "redux-saga/effects";
import * as types from "./constants";
import { fetchMember } from "./service";

export function* getMember(api, action) {
  try {
    const member = yield call(fetchMember, api, action);
    yield put({ type: types.MEMBER_GET_SUCCEEDED, payload: member });
  } catch (error) {
    yield put({ type: types.MEMBER_GET_FAILED, payload: error.message });
  }
}
