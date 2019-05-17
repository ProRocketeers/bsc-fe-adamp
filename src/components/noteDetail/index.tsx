import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Note } from "../../models/notes";
import i18n from "i18next";

interface NoteDetailProps {
  note: Note;
  deleteNote(id: number): Promise<null>;
  t: i18n.TFunction;
}

export const NoteDetail = ({ note, deleteNote, t }: NoteDetailProps) => {
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
        <Button variant="danger" onClick={() => note.id && deleteNote(note.id)}>
          {t("remove_note")}
        </Button>
      </div>
    </>
  );
};
