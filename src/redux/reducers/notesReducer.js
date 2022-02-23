import {
  NOTES_CREATE,
  NOTES_DELETE,
  NOTES_EDIT,
  NOTES_LOADING,
} from "../actions/types";

const initialState = {
  notes: [
    { title: "sdfsdf", id: 1, description: "fdgsgsdf sdfgsdf sdfgsdg" },
    { title: "Меня зовут максим Андреевич", id: 2, description: "Мне 22 года" },
    { title: "Fsdf", id: 3, description: "Привет Олег" },
    {
      title: "sdfgsdfg",
      id: 4,
      description: 'Hello world : println("heeeello world")',
    },
  ],
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTES_CREATE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case NOTES_EDIT:
      return {
        ...state,
        notes: [
          ...state.notes.filter((note) => note.id !== action.payload.id),
          action.payload,
        ],
      };
    case NOTES_LOADING:
      return {
        ...state,
      };
    case NOTES_DELETE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload.id),
      };
    default:
      return state;
  }
};
