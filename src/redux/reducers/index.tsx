import { combineReducers } from "redux";
import { CURRENT_USERNAME, JWT_TOKEN, GET_TODOES } from "../types";

const setCurrentUsername = (state = "", action: any): string => {
  switch (action.type) {
    case CURRENT_USERNAME:
      return action.payload;
    default:
      return state;
  }
};

const setJwtToken = (state = "", action: any): string => {
  switch (action.type) {
    case JWT_TOKEN:
      return action.payload;
    default:
      return state;
  }
};

const setTodoes = (state = "", action: any) => {
  switch (action.type) {
    case GET_TODOES:
      return action.payload;
    default:
      return state;
  }
};

const allReducers = combineReducers({
  username: setCurrentUsername,
  jwtToken: setJwtToken,
  todoes: setTodoes,
});

export default allReducers;
