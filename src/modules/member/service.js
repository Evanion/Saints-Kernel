/**
 * @description Fetches a member from the server
 * @param client {Object}
 * @param action {Object}
 * @returns {Promise.<TResult>}
 */
export const fetchMember = (client, action) => {
  return client
    .service("/users")
    .find({
      query: {
        username: action.payload
      }
    })
    .then((result, error) => {
      console.log("API error", error);
      console.log("API result", result);
      return error || result.data[0];
    })
    .catch(error => error);
};
