import React, { useState, useEffect } from "react";
import { createNote, getNote, updateNote } from "../network/noteConnector";
import { NoteForm } from "../components/noteForm";
import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";

const saveNote = async (note, history) => {
  const result = note.id ? await updateNote(note) : await createNote(note);
  history.push("/");
  return result;
};

export const NoteFormPage = ({ match, history }) => {
  const [note, setNote] = useState({});
  const { t } = useTranslation();

  //fetch note
  useEffect(
    () => {
      match.params.id &&
        (async () => setNote(await getNote(match.params.id)))();
      return () => setNote({});
    },
    [match.params.id]
  );

  return (
    <Container>
      <NoteForm
        note={note}
        setNote={setNote}
        saveNote={note => saveNote(note, history)}
        goBack={() => history.goBack()}
        t={t}
      />
    </Container>
  );
};
