import React, { useState, useEffect } from "react";
import { getNotes } from "../network/noteConnector";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { NoteList } from "../components/noteList";

export const NoteListPage = () => {
  const [notes, setNotes] = useState([]);
  const { t } = useTranslation();

  //fetch notes
  useEffect(() => {
    (async () => setNotes(await getNotes()))();
  }, []);

  return (
    <Container>
      <NoteList notes={notes} t={t} />
    </Container>
  );
};
