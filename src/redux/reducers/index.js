import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import weatherReducer from './weather';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  weather: weatherReducer
});