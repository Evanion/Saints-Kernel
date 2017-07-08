import { combineReducers } from "redux";
import { routerReducer as router } from "react-router-redux";
import { reducer as form } from "redux-form";

import { reducer as userReducer } from "./modules/user";
const user = userReducer.default;
export default combineReducers({
  form,
  router,
  user
});
