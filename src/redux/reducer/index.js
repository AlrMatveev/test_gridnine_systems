import { combineReducers } from "redux";
import flights from "./flights";
import filters from "./filters";

export default combineReducers({
  flights,
  filters,
});
