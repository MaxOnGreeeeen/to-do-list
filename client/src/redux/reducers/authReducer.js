import {
  AUTH_REGISTER,
  AUTH_LOGOUT,
  AUTH_LOGIN,
  AUTH_LOGIN_ERROR,
  AUTH_LOADED,
  AUTH_LOADING,
} from "../actions/types";

const initialState = {
  user: null,
  isLoading: false,
  isAuthorized: false,
  token: localStorage.getItem("userData"),
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case AUTH_LOADED:
      return {
        ...state,
        isLoading: false,
        isAuthorized: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case AUTH_LOGIN:
      localStorage.setItem(
        "userData",
        JSON.stringify(action.payload.userId, action.payload.token)
      );
      return {
        ...state,
        user: action.payload.user,
        isLoading: false,
        isAuthorized: true,
      };
    case AUTH_REGISTER:
      localStorage.setItem(
        "userData",
        JSON.stringify(action.payload.userId, action.payload.token)
      );
      return {
        ...state,
        user: action.payload.user,
        isLoading: false,
        isAuthorized: true,
      };
    case AUTH_LOGIN_ERROR:
      return {
        ...state,
      };
    case AUTH_LOGOUT:
      localStorage.removeItem("userData");
      return {
        ...state,
        token: localStorage.getItem("userData"),
        user: null,
        isAuthorized: false,
        isLoading: false,
      };
    default:
      return state;
  }
};
