import {
  AUTH_REGISTER,
  AUTH_LOGOUT,
  AUTH_LOGIN,
  AUTH_LOGIN_ERROR,
  AUTH_LOADED,
  AUTH_LOADING,
} from "../actions/types";

const initialState = {
  user: {
    firstName: "",
    lastName: "",
    id: null,
    email: "",
  },
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
        user: {
          ...state.user,
          email: action.payload.email,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
        },
      };
    case AUTH_LOGIN:
      localStorage.setItem(
        "userData",
        JSON.stringify({
          userId: action.payload.user.userId,
          token: action.payload.token,
        })
      );
      return {
        ...state,
        user: {
          ...state.user,
          id: action.payload.user.userId,
          firstName: action.payload.user.firstName,
          lastName: action.payload.user.lastName,
          email: action.payload.user.email,
        },
        isLoading: false,
        isAuthorized: true,
      };
    case AUTH_REGISTER:
      localStorage.setItem(
        "userData",
        JSON.stringify({
          userId: action.payload.userId,
          token: action.payload.token,
        })
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
        isAuthorized: false,
        user: { firstName: "", lastName: "", id: null, email: "" },
        isLoading: false,
      };
    case AUTH_LOGOUT:
      localStorage.removeItem("userData");
      return {
        ...state,
        token: localStorage.getItem("userData"),
        user: {
          firstName: "",
          lastName: "",
          id: null,
          email: "",
        },
        isAuthorized: false,
        isLoading: false,
      };
    default:
      return state;
  }
};
