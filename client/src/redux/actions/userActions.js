import { LOAD_USER, DELETE_USER, CHANGE_USER_DATA } from "./types";

export const loadUser = (user) => ({
  type: LOAD_USER,
  payload: user,
});
