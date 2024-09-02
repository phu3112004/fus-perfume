import { combineReducers } from "redux";
import loveReducer from "./loveReducer";
import cartReducer from "./cartReducer";

const allReducers = combineReducers({
  loveReducer,
  cartReducer,
});

export default allReducers;
