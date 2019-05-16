import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getNote, removeNote } from "../network/noteConnector";
import { Container } from "react-bootstrap";
import { NoteDetail } from "../components/noteDetail";

const deleteNote = async id => {
  return await removeNote(id);
};

export const NoteDetailPage = ({ match }) => {
  const { t } = useTranslation();
  const [note, setNote] = useState({});

  //fetch note
  useEffect(
    () => {
      (async () => setNote(await getNote(match.params.id)))();
    },
    [match.params.id]
  );

  return (
    <Container>
      <NoteDetail note={note} deleteNote={deleteNote} t={t} />
    </Container>
  );
};
