import { LOAD_USER, DELETE_USER, CHANGE_USER_DATA } from "../actions/types";

const initialState = {
  user: {
    name: "",
    lastName: "",
  },
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        user: {
          name: action.payload.name,
          lastName: action.payload.lastName,
        },
      };
    default:
      return state;
  }
};
