import { ITodo } from "../../interface/todo.interface";
import { CURRENT_USERNAME, JWT_TOKEN, GET_TODOES } from "../types";

export const getCurrentUsername = (data: string) => {
  return {
    type: CURRENT_USERNAME,
    payload: data,
  };
};

export const getJwtToken = (data: string) => {
  return {
    type: JWT_TOKEN,
    payload: data,
  };
};

export const getTodoes = (data: ITodo[]) => {
  return {
    type: GET_TODOES,
    payload: data,
  };
};
