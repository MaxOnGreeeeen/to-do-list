import React, { useEffect, useState } from "react";

import { TextField, Stack } from "@mui/material";

import { useDataLoad } from "../../customHooks/useDataLoad";

import { useDispatch } from "react-redux";
import { createNote } from "../../redux/actions/notesAction";

import postService from "../../API/PostService";

import { SaveButton, MultiLineTextarea, Title } from "../UI/index.js";

import classes from "./noteCreateForm.module.css";

const NoteCreateForm = () => {
  const [note, setNote] = useState({ title: "", description: "" });
  const [notesToAdd, setNotesToAdd] = useState([]);

  const dispatch = useDispatch();

  useEffect(async () => {
    await fetchAllPosts();
  }, []);

  // TODO (Sadikov): убрать это нахуй
  const [fetchPosts, isPostLoading, errorMessage] = useDataLoad(async () => {
    await fetchAllPosts;
  });

  const fetchAllPosts = async () => {
    const postsFromServer = await postService.getAllPosts();
    setNotesToAdd(postsFromServer);
  };

  const createRandomNote = () => {
    const randomId = Math.floor(Math.random() * notesToAdd.length);

    const newNote = {
      title: notesToAdd[randomId].title,
      id: Date.now(),
      description: notesToAdd[randomId].body,
    };

    dispatch(createNote(newNote));

    setNote({ title: "", description: "" });
  };

  const addNewNote = (e) => {
    e.preventDefault();

    const newNote = {
      ...note,
      id: Date.now(),
    };

    dispatch(createNote(newNote));

    setNote({ title: "", description: "" });
  };

  const onChangeTitleHandler = (e) => {
    setNote({ ...note, title: e.target.value });
  };
  const onChangeDescriptionHandler = (e) => {
    setNote({ ...note, description: e.target.value });
  };

  return (
    <div className={classes.noteForm}>
      <Title children="Create note" />

      <form>
        <Stack direction="column" spacing={2}>
          <TextField
            size="small"
            id="outlined-basic"
            label="Title"
            variant="outlined"
            value={note.title}
            onChange={onChangeTitleHandler}
          />

          <MultiLineTextarea
            id="outlined-basic"
            value={note.description}
            label="Description"
            onChange={onChangeDescriptionHandler}
          />

          <div className={classes.buttonsBlock}>
            <SaveButton onClick={addNewNote} children={"Create"} />
            <SaveButton
              onClick={createRandomNote}
              style={{ background: "#538552", marginLeft: "0.3em" }}
              children={"Random"}
            />
          </div>
        </Stack>
      </form>
    </div>
  );
};
export default NoteCreateForm;
