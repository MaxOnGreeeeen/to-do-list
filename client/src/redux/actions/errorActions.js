import { ERROR_SET, ERROR_CLEAR } from "./types";

export const setError = (message) => (dispatch) => {
  dispatch({ type: ERROR_SET, payload: message });
};

export const clearError = () => (dispatch) => {
  dispatch({ type: ERROR_CLEAR });
};
