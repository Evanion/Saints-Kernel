// @flow
import "babel-polyfill";
import { routerMiddleware } from "react-router-redux";
import { createStore, applyMiddleware, compose, StoreCreator } from "redux";
import createSagaMiddleware from "redux-saga";

import api from "./api";
import reducers from "./reducers";
import sagas from "./sagas";

const storeType = {
  action: String,
  length: Number,
  location: String
};

export default function Store(history: storeType): StoreCreator {
  // Init
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  let middleware = [routerMiddleware(history), sagaMiddleware];

  // Store
  const createdStore = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middleware))
  );
  sagaMiddleware.run(sagas, api);

  return createdStore;
}

export { types, actions } from "./modules";
