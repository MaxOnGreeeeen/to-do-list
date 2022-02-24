import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { NoteCreateForm, NoteList } from "../components/index";

const Notes = (active) => {
  useEffect(() => {
    setMarginLeft(false);
  }, []);

  useEffect(() => {
    setMarginLeft((prev) => !prev);
  }, [active]);

  const notes = useSelector((state) => state.notes.notes);

  const [marginLeft, setMarginLeft] = useState(active);

  const NotesList = ({ notes }) => (
    <NoteList title="Your notes list" notes={notes} />
  );

  const NotesNotFound = (
    <div style={{ textAlign: "center", fontSize: 25 }}>
      Notes are not found :(
    </div>
  );

  return (
    <div className={marginLeft ? "App" : "App disableNavBar"}>
      <NoteCreateForm />
      {notes.length !== 0 ? (
        <NotesList notes={notes} />
      ) : (
        <div style={{ textAlign: "center", fontSize: 25 }}>
          Notes are not found :(
        </div>
      )}
    </div>
  );
};

export default Notes;
