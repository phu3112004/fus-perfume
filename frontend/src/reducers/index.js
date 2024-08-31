import { combineReducers } from "redux";
import loveReducer from "./loveReducer";

const allReducers = combineReducers({
  loveReducer,
});

export default allReducers;
