import React, { useState, useEffect } from "react";
import { getNotes } from "../network/noteConnector";

export const NoteList = () => {
  const [notes, setNotes] = useState([]);

  //fetch notes
  useEffect(() => {
    (async () => setNotes(await getNotes()))();
  }, []);

  return <div>{JSON.stringify(notes)}</div>;
};
