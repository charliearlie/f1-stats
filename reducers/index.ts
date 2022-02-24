import { combineReducers } from "redux";
import qualifying from "./qualifying";
import circuit from "./circuit";

export default combineReducers({
  circuit,
  qualifying,
});
