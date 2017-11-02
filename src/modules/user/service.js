/**
 * @description gets all the boards from the API
 * @param client {Object}
 * @param action {Object}
 * @returns {Promise.<TResult>}
 */
export const loginUser = (client, action) => {
  const payload = {
    strategy: "local",
    ...action.payload
  };
  return client
    .authenticate(payload)
    .then((result, error) => {
      console.log("API error", error);
      console.log("API result", result);
      return result.accessToken;
    })
    .then(jwt => client.passport.verifyJWT(jwt))
    .then(decoded =>
      client
        .service("/users")
        .get(decoded.userId)
        .then((result, error) => result || error)
    );
};

/**
 * @description Checks if the user is authenticated.
 * Returns the current user object from the server.
 * If the check fails, the user is logged out.
 * @param client
 * @return {Promise.<T>}
 */
export const isAuthenticated = client => {
  const token = client.settings.storage.getItem("feathers-jwt");
  return client.passport
    .verifyJWT(token)
    .then(decoded =>
      client
        .service("/users")
        .get(decoded.userId)
        .then((result, error) => result || error)
    )
    .catch(() => client.logout());
};

/**
 * @description Logs out the current user
 * @param client
 * @returns {Promise<any>}
 */
export const logoutUser = client => {
  return client.logout().then((result, error) => result || error);
};

/**
 * @description gets specific board from the API
 * @param api {Object}
 * @param action {Object}
 * @returns {Promise.<TResult>}
 */
export const newUser = (api, action) => {
  console.log(client, action);
  return api.service("/users").create(action.payload).then((result, error) => {
    console.log("API error", error);
    console.log("API result", result);
    return result;
  });
};

export const saveToken = (client, action) => {
  const currentToken = client.settings.storage.getItem("feathers-jwt");
  return client.passport
    .verifyJWT(currentToken)
    .then(decoded =>
      client
        .service("/users")
        .get(decoded.userId)
        .then((result, error) => result || error)
    )
    .catch(() => {
      if (action.payload) {
        client.passport.setJWT(action.payload);
        window.location = "/";
        return true;
      }
      return client.logout();
    });
};
