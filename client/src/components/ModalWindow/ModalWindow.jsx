import { useDispatch, useSelector } from "react-redux";

import { TextField, Stack } from "@mui/material";

import { MultiLineTextarea, SaveButton, CloseButton } from "../UI/index.js";

import { editNote } from "../../redux/actions/notesAction";

import {
  closeModal,
  changeTitle,
  changeDescription,
} from "../../redux/actions/modalActions";

import classes from "./ModalWIndow.module.css";
import Button from "../UI/Button/Button";

const ModalWindow = () => {
  const dispatch = useDispatch();

  const modalWindow = useSelector((state) => state.modal);

  const handleSaveButton = () => {
    dispatch(editNote(modalWindow.modal));
    dispatch(closeModal(false, {}));
  };

  const closeModalWindow = () => {
    dispatch(closeModal(false, {}));
  };

  const onChangeTitleHandler = (e) => {
    dispatch(changeTitle(e.target.value));
  };
  const onChangeDescriptionHandler = (e) => {
    dispatch(changeDescription(e.target.value));
  };

  return (
    <div
      className={
        modalWindow.active
          ? `${classes.modalWindow} ${classes.active}`
          : classes.modalWindow
      }
      onClick={closeModalWindow}
    >
      <div
        className={classes.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classes.closeModalBlock}>
          <h1>Edit note</h1>
          <div className={classes.closeModal}>
            <CloseButton onClick={closeModalWindow} />
          </div>
        </div>

        <Stack
          className={classes.changeNoteContent}
          direction="column"
          spacing={2}
        >
          <TextField
            autoFocus={true}
            size="small"
            id="outlined-basic"
            variant="outlined"
            label="Title"
            defaultValue={"title"}
            value={modalWindow.modal.title}
            onChange={onChangeTitleHandler}
          />
          <MultiLineTextarea
            id="outlined-basic"
            value={modalWindow.modal.description}
            label="Description"
            onChange={onChangeDescriptionHandler}
          />
          <Button
            onClick={handleSaveButton}
            buttonClassName={"buttonDefault"}
            title={"Сохранить изменения"}
          />
        </Stack>
      </div>
    </div>
  );
};
export default ModalWindow;
