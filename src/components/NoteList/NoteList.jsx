import React, { useState } from "react";

import { Note, ModalWindow } from "../index.js";

import classes from "./NoteList.module.css";
import { useSelector } from "react-redux";

function NoteList({ notes, title }) {
  return (
    <div className={classes.notesContainer}>
      <ModalWindow />

      <div className={classes.titleDiv}>
        <h1 className={classes.mainTitle}>{title}</h1>
      </div>

      {notes.map((note) => (
        <Note note={note} key={note.id} />
      ))}
    </div>
  );
}
export default NoteList;
