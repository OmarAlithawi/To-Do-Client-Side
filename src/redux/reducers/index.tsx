import { combineReducers } from "redux";
import { JWT_TOKEN } from "../types";

const setJwtToken = (state = null, action: any) => {
  switch (action.type) {
    case JWT_TOKEN:
      return action.payload;
    default:
      return state;
  }
};

const allReducers = combineReducers({
  jwtToken: setJwtToken,
});

export default allReducers;
