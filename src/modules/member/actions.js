import * as types from "./constants";

export const getMember = payload => ({
  type: types.MEMBER_GET_REQUESTED,
  payload
});
