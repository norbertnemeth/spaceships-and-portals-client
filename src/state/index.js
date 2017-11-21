import { combineReducers } from "redux";
import main from "./main";

const appReducer = combineReducers({
  main
});

export default (state, action) => {
  return appReducer(action.type === "LOGOUT" ? undefined : state, action)
}
