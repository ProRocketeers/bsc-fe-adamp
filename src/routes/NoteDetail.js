import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getNote } from "../network/noteConnector";

export const NoteDetail = ({ match }) => {
  const { t } = useTranslation();
  const [note, setNote] = useState({});

  //fetch note
  useEffect(
    () => {
      (async () => setNote(await getNote(match.params.id)))();
    },
    [match.params.id]
  );

  return <div>{JSON.stringify(note)}</div>;
};
