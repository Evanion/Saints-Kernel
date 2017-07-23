/**
 * @name postBoard
 * @description Create a new forum board
 * @param client {Object}
 * @param action {Object}
 * @returns {Promise.<TResult>}
 */
export const postBoard = (client, action) => {
  const service = client.service("/boards");
  return service.create(action.payload).then((result, error) => result);
};

/**
 * @name putBoard
 * @description update an existing board
 * @param client {Object}
 * @param action {Object}
 * @returns {Promise.<TResult>}
 */
export const putBoard = (client, action) => {
  const service = client.service("/boards");
  return service
    .update({ id: action.payload.id, data: action.payload })
    .then((result, error) => result);
};

/**
 * @name deleteBoard
 * @description Delete a board
 * @param client {Object}
 * @param action {Object}
 * @returns {Promise.<TResult>}
 */
export const deleteBoard = (client, action) => {
  const service = client.service("/boards");
  return service
    .update({ id: action.payload._id })
    .then((result, error) => result.data);
};

/**
 * @description gets all the boards from the API
 * @param client {Object}
 * @returns {Promise.<TResult>}
 */
export const getBoards = client => {
  const service = client.service("/boards");
  return service.find().then((result, error) => result.data);
};

/**
 * @description gets specific board from the API
 * @param client {Object}
 * @param action {Object}
 * @returns {Promise.<TResult>}
 */
export const getBoard = (client, action) => {
  const boards = client.service("/boards");
  const threads = client.service("/threads");
  const boardOpt = {
    query: {
      $limit: 1,
      slug: action.payload
    }
  };
  return boards
    .find(boardOpt)
    .then((result, error) => result.data[0] || error)
    .then(board =>
      threads
        .find({
          query: {
            board: board._id
          }
        })
        .then(result => {
          board.threads = result;
          return board;
        })
    )
    .catch(error => error);
};

/**
 * @name postThread
 * @description Create a new forum thread
 * @param client {Object}
 * @param action {Object}
 * @returns {Promise.<TResult>}
 */
export const postThread = (client, action) => {
  const service = client.service("/threads");
  return service
    .create(action.payload)
    .then((result, error) => result || error);
};
