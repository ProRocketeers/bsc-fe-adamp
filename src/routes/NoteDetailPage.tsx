import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getNote, removeNote } from "../network/noteConnector";
import { Container } from "react-bootstrap";
import { NoteDetail } from "../components/noteDetail";
import { RouteComponentProps } from "react-router";
import { History } from "history";

interface MatchParams {
  id?: string;
}

interface NoteDetailPageProps extends RouteComponentProps<MatchParams> {}

const deleteNote = async (id: string | number, history: History) => {
  const result = await removeNote(id);
  history.push("/");
  return result;
};

export const NoteDetailPage = ({ match, history }: NoteDetailPageProps) => {
  const { t } = useTranslation();
  const [note, setNote] = useState({ title: "" });

  //fetch note
  useEffect(
    () => {
      (async () => setNote(await getNote(match.params.id || "")))();
    },
    [match.params.id]
  );

  return (
    <Container>
      <NoteDetail
        note={note}
        deleteNote={id => deleteNote(id, history)}
        t={t}
      />
    </Container>
  );
};
