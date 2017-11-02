import * as type from "./constants";
import { UserState } from "./initialState";
import * as reduxRouter from "react-router-redux";
//import {REHYDRATE} from 'redux-persist/constants';
const adminRoles = ["admin", "super-admin"];
function checkAdmin(arr, val) {
  return arr.some(function(arrVal) {
    return val === arrVal;
  });
}

const user = (state = UserState, action = {}) => {
  switch (action.type) {
    /**
       * @description User registration
       */
    case type.USER_CREATE_REQUESTED:
      return { ...state, registering: true };

    case type.USER_CREATE_SUCCEEDED:
      return {
        ...state,
        created: action.payload,
        registering: false,
        registered: true,
        error: null
      };

    case type.USER_CREATE_FAILED:
      return {
        ...state,
        registering: false,
        error: action.payload
      };

    /**
       * @description User authentication
       */
    case type.USER_AUTH_REQUESTED:
    case type.USER_CHECK_AUTH_REQUESTED:
      return { ...state, authenticating: true };

    case type.USER_AUTH_SUCCEEDED:
    case type.USER_CHECK_AUTH_SUCCEEDED:
      return {
        ...state,
        details: action.payload,
        authenticating: false,
        authenticated: Boolean(action.payload)
      };

    case type.USER_AUTH_FAILED:
    case type.USER_CHECK_AUTH_FAILED:
      return {
        ...state,
        authenticating: false,
        authenticated: false,
        error: action.payload
      };

    /**
       * @description User logout
       */
    case type.USER_LOGOUT_SUCCEEDED:
      return {
        ...state,
        details: {},
        authenticating: false,
        authenticated: false
      };

    case type.USER_IS_ADMIN_REQUESTED:
      return checkAdmin(adminRoles, state.details.roles);

    /**
       * @description User current state
       */
    default:
      return state;
  }
};

export default user;
