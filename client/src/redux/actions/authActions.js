import axios from "axios";

import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_LOGIN_ERROR,
  AUTH_REGISTER,
  AUTH_LOADED,
  AUTH_LOADING,
} from "./types";

import { clearError, setError } from "./errorActions";

export const logOutUser = (user) => ({
  type: AUTH_LOGOUT,
  payload: user,
});

export const loadUser = () => async (dispatch, getState) => {
  dispatch({ type: AUTH_LOADING });
  await axios
    .get("http://localhost:5000/api/auth/user", tokenConfig(getState))
    .then((response) => {
      dispatch({ type: AUTH_LOADED, payload: response });
    })
    .catch((error) => {
      dispatch({ type: AUTH_LOGIN_ERROR });
      dispatch(setError(error.message));
    });

  /*try {
    const request = await fetch(
      "http://localhost:5000/api/auth/user",
      tokenConfig(getState)
    );

    const json = await request.json();

    if (!request.ok) {
      throw new Error(json.message || "You are not authorized");
    }
    dispatch({ type: AUTH_LOADED, payload: json });
  } catch (error) {

  }*/
};

export const loginUser = (form) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      throw new Error(json.message || "something got wrong");
    }

    dispatch({ type: AUTH_LOGIN, payload: json });

    dispatch(clearError());
  } catch (error) {
    dispatch({ type: AUTH_LOGIN_ERROR, payload: error.message });
    dispatch(setError(error.message));
  }
};

export const registerUser = (form) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      throw new Error(json.message || "something got wrong");
    }

    dispatch({ type: AUTH_REGISTER, payload: json });
  } catch (error) {
    dispatch({ type: AUTH_LOGIN_ERROR, payload: error.message });
    dispatch(setError(error.message));
  }
};

export const tokenConfig = (getState) => {
  const token = getState().auth.token;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
