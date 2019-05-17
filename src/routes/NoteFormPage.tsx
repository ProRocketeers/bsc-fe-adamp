import React, { useState, useEffect } from "react";
import { createNote, getNote, updateNote } from "../network/noteConnector";
import { NoteForm } from "../components/noteForm";
import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";
import { RouteComponentProps } from "react-router";
import { Note } from "../models/notes";
import { History } from "history";

interface MatchParams {
  id?: string;
}

interface NoteFormPageProps extends RouteComponentProps<MatchParams> {}

const saveNote = async (note: Note, history: History) => {
  const result = note.id ? await updateNote(note) : await createNote(note);
  history.push("/");
  return result;
};

export const NoteFormPage = ({ match, history }: NoteFormPageProps) => {
  const [note, setNote] = useState({ title: "" });
  const { t } = useTranslation();

  //fetch note
  useEffect(
    () => {
      match.params.id &&
        (async () => setNote(await getNote(match.params.id || "")))();
      return () => setNote({ title: "" });
    },
    [match.params.id]
  );

  return (
    <Container>
      <NoteForm
        note={note}
        setNote={setNote}
        saveNote={(note: Note) => saveNote(note, history)}
        goBack={() => history.goBack()}
        t={t}
      />
    </Container>
  );
};
