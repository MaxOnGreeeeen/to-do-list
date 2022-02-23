import React, { useEffect, useState } from "react";

import { TextField, Stack } from "@mui/material";

import {
  MultiLineTextarea,
  SaveButton,
  CloseButton,
  Title,
} from "../UI/index.js";

import classes from "./ModalWIndow.module.css";

const ModalWindow = ({ active, setActive, modalContent, changeNote }) => {
  const [note, setNote] = useState({
    title: modalContent.title,
    id: modalContent.id,
    description: modalContent.description,
  });

  useEffect(() => {
    setNote(modalContent);
  }, [modalContent]);

  const handleSaveButton = () => {
    changeNote(note);
    setActive(false);
  };

  const closeModal = () => {
    setActive(false);
  };

  return (
    <div
      className={
        active
          ? `${classes.modalWindow} ${classes.active}`
          : classes.modalWindow
      }
      onClick={() => setActive(false)}
    >
      <div
        className={classes.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classes.closeModalBlock}>
          <Title children="Edit note" />
          <div className={classes.closeModal}>
            <CloseButton onClick={closeModal} />
          </div>
        </div>

        <Stack
          className={classes.changeNoteContent}
          direction="column"
          spacing={2}
        >
          <TextField
            size="small"
            id="outlined-basic"
            label="Title"
            variant="outlined"
            value={note.title}
            onChange={(e) => setNote({ ...note, title: e.target.value })}
          />
          <MultiLineTextarea
            id="outlined-basic"
            value={note.description}
            label="Description"
            onChange={(e) => setNote({ ...note, description: e.target.value })}
          />
          <SaveButton children={"Save changes"} onClick={handleSaveButton} />
        </Stack>
      </div>
    </div>
  );
};
export default ModalWindow;
