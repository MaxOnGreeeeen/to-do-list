import { NOTES_CREATE, NOTES_EDIT, NOTES_DELETE, NOTES_LOADING } from "./types";

export const createNote = (newNote) => ({
  type: NOTES_CREATE,
  payload: newNote,
});

export const deleteNote = (noteToDelete) => ({
  type: NOTES_DELETE,
  payload: noteToDelete,
});

export const editNote = (newNote) => ({ type: NOTES_EDIT, payload: newNote });

export const loadNotes = () => ({ type: NOTES_LOADING, payload: "" });
