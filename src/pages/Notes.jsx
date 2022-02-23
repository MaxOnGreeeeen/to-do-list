import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { NoteCreateForm, NoteList } from "../components/index.js";

import { deleteNote, editNote, createNote } from "../redux/actions/notesAction";

const Notes = (active) => {
  useEffect(() => {
    setMarginLeft(false);
  }, []);

  useEffect(() => {
    setMarginLeft((prev) => !prev);
  }, [active]);

  const dispatch = useDispatch();

  const notes = useSelector((state) => state.notes.notes);

  const [marginLeft, setMarginLeft] = useState(active);

  const addNote = (noteToAdd) => {
    dispatch(createNote());
  };

  const changeNote = (changedNote) => {
    dispatch(editNote(changedNote));
  };

  const removeNote = (noteToDelete) => {
    dispatch(deleteNote(noteToDelete));
  };

  const NotesList = ({ notes }) => (
    <NoteList
      title="Your notes list"
      notes={notes}
      remove={removeNote}
      changeNote={changeNote}
    />
  );

  const NotesNotFound = (
    <div style={{ textAlign: "center", fontSize: 25 }}>
      Notes are not found :(
    </div>
  );

  return (
    <div className={marginLeft ? "App" : "App disableNavBar"}>
      <NoteCreateForm create={addNote} />

      {notes.length !== 0 ? <NotesList notes={notes} /> : <NotesNotFound />}
    </div>
  );
};

export default Notes;
