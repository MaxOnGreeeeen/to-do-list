import {
  AUTH_CREATE,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_LOGIN_ERROR,
} from "./types";

import { setError } from "./errorActions";

export const logOutUser = (user) => ({
  type: AUTH_LOGOUT,
  payload: user,
});

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
  } catch (error) {
    dispatch({ type: AUTH_LOGIN_ERROR, payload: error.message });
    dispatch(setError(error.message));
  }
};

export const registerUser = (form) => ({
  type: AUTH_CREATE,
  payload: form,
});
