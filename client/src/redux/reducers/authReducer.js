import {
  AUTH_CREATE,
  AUTH_LOGOUT,
  AUTH_LOGIN,
  AUTH_LOGIN_ERROR,
} from "../actions/types";

const initialState = {
  user: null,
  isLoading: false,
  isAuthorized: false,
  token: localStorage.getItem("token"),
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        token: false,
        user: action.payload.user,
        isLoading: false,
        isAuthorized: true,
      };
    case AUTH_LOGIN_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};
