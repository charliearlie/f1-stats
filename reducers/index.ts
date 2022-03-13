import { combineReducers } from "redux";
import qualifying from "./qualifying";
import circuit from "./circuit";
import race from "./race";

export default combineReducers({
  circuit,
  qualifying,
  race,
});
