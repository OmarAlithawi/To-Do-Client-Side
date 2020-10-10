import { JWT_TOKEN } from "../types";

export const getJwtToken = (data: string) => {
  return {
    type: JWT_TOKEN,
    payload: data,
  };
};
