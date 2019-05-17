import React, { useState, useEffect } from "react";
import { getNotes, removeNote } from "../network/noteConnector";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { NotesList } from "../components/notesList";
import { NoteList } from "../models/notes";

const deleteNote = async (id: string | number) => {
  return await removeNote(id);
};

export const NoteListPage = () => {
  const [notes, setNotes] = useState<NoteList>([]);
  const { t } = useTranslation();

  //fetch notes
  useEffect(() => {
    (async () => setNotes(await getNotes()))();
  }, []);

  return (
    <Container>
      <NotesList deleteNote={deleteNote} notes={notes} t={t} />
    </Container>
  );
};
