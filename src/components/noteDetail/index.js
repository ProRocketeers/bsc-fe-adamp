import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NoteDetail = ({ note, deleteNote, t }) => {
  return (
    <>
      <h1>{t("detail_note")}</h1>

      <Form.Label>{t("title")}</Form.Label>
      <Form.Control
        type="text"
        placeholder="title"
        value={note.title || ""}
        readOnly
      />

      <div className="mt-4 float-right">
        <Link to={`/note/${note.id}/edit`}>
          <Button variant="secondary" className="mr-4">
            {t("edit_note")}
          </Button>
        </Link>
        <Button variant="danger" onClick={() => deleteNote(note.id)}>
          {t("remove_note")}
        </Button>
      </div>
    </>
  );
};
