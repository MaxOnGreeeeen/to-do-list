import {
  MODAL_SETCONTENT,
  MODAL_CLOSE,
  MODAL_ACTIVE,
  MODAL_ONCHANGETITLE,
  MODAL_ONCHANGEDESCRIPTION,
} from "./types";

export const openModal = (active) => ({
  type: MODAL_ACTIVE,
  payload: active,
});

export const closeModal = (active, content) => ({
  type: MODAL_CLOSE,
  payload: { active, content },
});

export const modalSetContent = (noteContent) => ({
  type: MODAL_SETCONTENT,
  payload: noteContent,
});

export const changeDescription = (noteDescription) => ({
  type: MODAL_ONCHANGEDESCRIPTION,
  payload: noteDescription,
});

export const changeTitle = (noteTitle) => ({
  type: MODAL_ONCHANGETITLE,
  payload: noteTitle,
});
