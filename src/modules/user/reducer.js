import * as type from "./constants";
import { UserState } from "./initialState";
//import {REHYDRATE} from 'redux-persist/constants';

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
        fetched: true,
        error: action.payload
      };

    /**
       * @description User authentication
       */
    case type.USER_AUTH_REQUESTED:
      return { ...state, authenticating: true };

    case type.USER_AUTH_SUCCEEDED:
      return {
        ...state,
        details: action.payload,
        authenticating: false,
        authenticated: true
      };

    case type.USER_AUTH_FAILED:
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

    /*case REHYDRATE:
       let incoming = action.payload.user;
       if (incoming) return {...state, ...incoming};
       return state;*/
    /**
       * @description User current state
       */
    default:
      return state;
  }
};

export default user;
