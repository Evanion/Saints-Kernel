// @flow
import feathers from "feathers-client";
import superagent from "superagent";

// @TODO: Refactor for react-native support
let apiServerUrl;
switch (window.location.hostname) {
  case "localhost":
    apiServerUrl = "http://localhost:3030";
    break;

  case "https://stage.saints-gaming.com":
    apiServerUrl = "https://stage.api.saints-gaming.com";
    break;

  default:
    apiServerUrl = "https://api.saints-gaming.com";
    break;
}

const api = feathers()
  .configure(feathers.rest(apiServerUrl).superagent(superagent))
  .configure(feathers.hooks())
  .configure(
    feathers.authentication({
      storage: window.localStorage
    })
  );

export default api;
