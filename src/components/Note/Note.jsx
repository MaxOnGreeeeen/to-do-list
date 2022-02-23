import React from "react";

import { DeleteButton, ChangeContentButton } from "../UI/index.js";

import classes from "./Note.module.css";

//TODO : create Redux actions, reducers for this component
const Note = (props) => {
  const handleChangButtonClick = () => {
    props.modalSetActive(true);
    props.setModalContent(props.note);
  };

  return (
    <div className={classes.note}>
      <div className={classes.noteHeader}>
        <h1 className={classes.title}>{props.note.title}</h1>
      </div>

      <div className={classes.noteDescription}>{props.note.description}</div>

      <div className={classes.buttonsBlock}>
        <DeleteButton
          style={{ marginRight: "0.3em" }}
          className={classes.button}
          onClick={() => props.remove(props.note)}
        />

        <ChangeContentButton onClick={handleChangButtonClick} />
      </div>
    </div>
  );
};
export default Note;
