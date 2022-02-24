import {
  MODAL_ACTIVE,
  MODAL_CLOSE,
  MODAL_SETCONTENT,
  MODAL_ONCHANGETITLE,
  MODAL_ONCHANGEDESCRIPTION,
} from "../actions/types";

const initialState = {
  modal: {
    title: "",
    id: "",
    description: "",
  },
  active: false,
};

export const modalWindowReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_ACTIVE:
      return {
        ...state,
        active: action.payload,
      };
    case MODAL_CLOSE:
      return {
        ...state,
        active: action.payload.active,
        modal: action.payload.content,
      };
    case MODAL_SETCONTENT:
      return {
        ...state,
        modal: action.payload,
      };
    case MODAL_ONCHANGEDESCRIPTION:
      return {
        ...state,
        modal: { ...state.modal, description: action.payload },
      };
    case MODAL_ONCHANGETITLE:
      return {
        ...state,
        modal: { ...state.modal, title: action.payload },
      };
    default:
      return state;
  }
};
