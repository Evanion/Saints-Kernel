// @flow
import { createStore, applyMiddleware, compose } from "redux";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import * as userModule from "./modules/user";
import reducers from "./reducers";

const history = createHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = routerMiddleware(history);

const store = createStore(
  reducers,
  undefined,
  composeEnhancers(applyMiddleware(middleware))
);

module.exports = {
  store,
  history,
  userModule
};
