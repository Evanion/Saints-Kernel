import * as types from "./constants";

/**
 * @name createBoard
 * @description Creates a new board
 * @param payload
 */
export const createBoard = payload => ({
  type: types.FORUM_CREATE_BOARD_REQUESTED,
  payload
});

/**
 * @name editBoard
 * @description Edits an existing board
 * @param payload
 */
export const editBoard = payload => ({
  type: types.FORUM_EDIT_BOARD_REQUESTED,
  payload
});

/**
 * @name deleteBoard
 * @description Deletes a board
 * @param payload
 */
export const deleteBoard = payload => ({
  type: types.FORUM_DELETE_BOARD_REQUESTED,
  payload
});

/**
 * @name getBoard
 * @description Fetches a specific board
 * @param payload
 */
export const getBoard = payload => ({
  type: types.FORUM_GET_BOARD_REQUESTED,
  payload
});

/**
 * @name getBoards
 * @description Fetches all boards
 * @param payload
 */
export const getBoards = payload => ({
  type: types.FORUM_GET_BOARDS_REQUESTED,
  payload
});

/**
 * @name createThread
 * @description Creates a new thread
 * @param payload
 */
export const createThread = payload => ({
  type: types.FORUM_CREATE_THREAD_REQUESTED,
  payload
});

/**
 * @name editThread
 * @description Edits a thread
 * @param payload
 */
export const editThread = payload => ({
  type: types.FORUM_EDIT_THREAD_REQUESTED,
  payload
});

/**
 * @name deleteThread
 * @description Removes a thread
 * @param payload
 */
export const deleteThread = payload => ({
  type: types.FORUM_DELETE_THREAD_REQUESTED,
  payload
});

/**
 * @name getThread
 * @description Gets a thread
 * @param payload
 */
export const getThread = payload => ({
  type: types.FORUM_GET_THREAD_REQUESTED,
  payload
});

/**
 * @name getThreads
 * @description Gets all threads in a board
 * @param payload
 */
export const getThreads = payload => ({
  type: types.FORUM_GET_THREADS_REQUESTED,
  payload
});
