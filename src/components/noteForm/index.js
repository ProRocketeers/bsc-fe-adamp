import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NoteForm = ({ note, setNote, saveNote, t }) => {
  return (
    <>
      <h1>{t(note.id ? "edit_note" : "new_note")}</h1>

      <Form
        onSubmit={e => {
          e.preventDefault();
          saveNote(note);
        }}
      >
        <Form.Label>{t("title")}</Form.Label>
        <Form.Control
          type="text"
          placeholder="title"
          value={note.title || ""}
          onChange={e => setNote({ ...note, title: e.target.value })}
        />

        <div className="mt-4 float-right">
          <Link to={note.id ? `/note/${note.id}` : '/'}>
            <Button variant="secondary" className="mr-4">{t("cancel")}</Button>
          </Link>

          <Button variant="primary" type="submit">
            {t("save")}
          </Button>
        </div>
      </Form>
    </>
  );
};
