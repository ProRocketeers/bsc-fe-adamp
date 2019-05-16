import React, { useState, useEffect } from "react";
import { createNote, getNote, updateNote } from "../network/noteConnector";

const saveNote = async note => {
  return note.id ? await updateNote(note) : await createNote(note);
};

export const NoteForm = ({ match }) => {
  const { note, setNote } = useState({});

  //fetch note
  useEffect(
    () => {
      (async () => setNote(await getNote(match.params.id)))();
    },
    [match.params.id]
  );

  return <div>form</div>;
};
