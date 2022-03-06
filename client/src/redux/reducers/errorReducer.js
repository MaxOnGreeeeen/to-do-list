import { ERROR_CLEAR, ERROR_SET } from "../actions/types";

const initialState = {
  error: {
    message: "",
  },
};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_SET:
      return {
        ...state,
        error: {
          message: action.payload,
        },
      };
    case ERROR_CLEAR:
      return {
        ...state,
        error: {
          message: action.payload,
        },
      };
    default:
      return state;
  }
};
