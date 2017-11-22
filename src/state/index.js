import { combineReducers } from "redux";
import main from "./main";
import battlefield from "./battlefield";

const appReducer = combineReducers({
  main,
  battlefield
});

export default (state, action) => {
  return appReducer(action.type === "LOGOUT" ? undefined : state, action)
}
