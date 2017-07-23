// @flow
import "babel-polyfill";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import api from "./api";
import reducers from "./reducers";
import sagas from "./sagas";
import { types, actions } from "./modules";

// modules
import * as userModule from "./modules/user";
import * as forumModule from "./modules/forum";

// Init
const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Middleware
const middleware = [routerMiddleware(history), sagaMiddleware];
// Store
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(sagas, api);

module.exports = {
  store,
  history,
  actions,
  types
};
