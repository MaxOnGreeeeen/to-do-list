import React from "react";

import { useDispatch } from "react-redux";

import { deleteNote } from "../../redux/actions/notesAction";

import { modalSetContent, openModal } from "../../redux/actions/modalActions";

import { DeleteButton, ChangeContentButton } from "../UI/index.js";

import classes from "./Note.module.css";

//TODO : create Redux actions, reducers for this component
const Note = (props) => {
  const dispatch = useDispatch();

  const note = props.note;

  const handleChangButtonClick = () => {
    dispatch(modalSetContent(note));
    dispatch(openModal(true));
  };

  const handleNoteRemove = () => {
    dispatch(deleteNote(note));
  };

  return (
    <div className={classes.note}>
      <div className={classes.noteHeader}>
        <h1 className={classes.title}>{note.title}</h1>
      </div>

      <div className={classes.noteDescription}>{note.description}</div>

      <div className={classes.buttonsBlock}>
        <DeleteButton
          style={{ marginRight: "0.3em" }}
          className={classes.button}
          onClick={handleNoteRemove}
        />
        <ChangeContentButton onClick={handleChangButtonClick} />
      </div>
    </div>
  );
};
export default Note;
