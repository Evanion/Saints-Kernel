import * as type from "./constants";
import { MemberState } from "./initialState";

const member = (state = MemberState, action = {}) => {
  switch (action.type) {
    case type.MEMBER_GET_REQUESTED:
      return {
        ...state,
        error: null,
        loading: true,
        fetched: false
      };

    case type.MEMBER_GET_SUCCEEDED:
      return {
        ...state,
        error: null,
        loading: false,
        fetched: true,
        details: action.payload
      };

    case type.MEMBER_GET_FAILED:
      return {
        ...state,
        loading: false,
        fetched: true,
        error: action.payload
      };
    /**
       * @description Member current state
       */
    default:
      return state;
  }
};

export default member;
