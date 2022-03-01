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
        message: action.payload,
      };
    case ERROR_CLEAR:
      return {
        message: "",
      };
    default:
      return state;
  }
};
