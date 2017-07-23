import * as type from "./constants";
import { ForumState } from "./initialState";
//import {REHYDRATE} from 'redux-persist/constants';

const forum = (state = ForumState, action = {}) => {
  let boards = {};
  switch (action.type) {
    /**
       * @description User registration
       */
    case type.FORUM_CREATE_BOARD_REQUESTED:
      return { ...state };

    case type.FORUM_CREATE_BOARD_SUCCEEDED:
      return {
        ...state,
        boards: {
          ...state.boards,
          [action.payload._id]: action.payload
        },
        error: null
      };

    case type.FORUM_CREATE_BOARD_FAILED:
      return {
        ...state,
        loading: false,
        fetched: true,
        error: action.payload
      };

    case type.FORUM_GET_BOARD_REQUESTED:
    case type.FORUM_GET_BOARDS_REQUESTED:
      return {
        ...state,
        board: {},
        boards: {},
        loading: true,
        fetched: false,
        error: null
      };

    case type.FORUM_GET_BOARD_SUCCEEDED:
      return {
        ...state,
        board: action.payload,
        loading: false,
        fetched: true,
        error: null
      };

    case type.FORUM_GET_BOARDS_SUCCEEDED:
      action.payload.forEach(board => {
        boards[board._id] = board;
      });
      return {
        ...state,
        boards: boards,
        loading: false,
        fetched: true,
        error: null
      };

    case type.FORUM_GET_BOARD_FAILED:
    case type.FORUM_GET_BOARDS_FAILED:
      return {
        ...state,
        loading: false,
        fetched: true,
        error: action.payload
      };

    case type.FORUM_CREATE_THREAD_REQUESTED:
      return { ...state };

    case type.FORUM_CREATE_THREAD_SUCCEEDED:
      return {
        ...state,
        board: {
          ...state.board,
          threads: {
            ...state.board.threads,
            data: [...state.board.threads.data, action.payload]
          }
        },
        error: null
      };

    case type.FORUM_CREATE_THREAD_FAILED:
      return {
        ...state,
        loading: false,
        fetched: true,
        error: action.payload
      };

    /**
       * @description forum current state
       */
    default:
      return state;
  }
};

export default forum;
