import React, { useState } from "react";

import { Note, ModalWindow } from "../index.js";

import classes from "./NoteList.module.css";

function NoteList({ notes, remove, title, changeNote }) {
  const [active, setActive] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    id: "",
    description: "",
  });

  return (
    <div className={classes.notesContainer}>
      <ModalWindow
        active={active}
        setActive={setActive}
        modalContent={modalContent}
        changeNote={changeNote}
      />

      <div className={classes.titleDiv}>
        <h1 className={classes.mainTitle}>{title}</h1>
      </div>

      {notes.map((note) => (
        <Note
          note={note}
          remove={remove}
          key={note.id}
          modalSetActive={setActive}
          active={active}
          setModalContent={setModalContent}
          modalContent={modalContent}
        />
      ))}
    </div>
  );
}
export default NoteList;
