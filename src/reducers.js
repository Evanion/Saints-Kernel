import { combineReducers } from "redux";
import { routerReducer as router } from "react-router-redux";
import { reducer as form } from "redux-form";

import { reducers } from "./modules";
export default combineReducers({
  form,
  router,
  ...reducers
});
