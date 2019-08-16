import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import errorReducer from "./reducers/authErrorReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  error: errorReducer
});

export default rootReducer;
