import React from "react";
import { Button, Form, FormControlProps } from "react-bootstrap";
import i18n from "i18next";
import { Note } from "../../models/notes";

interface NoteFormProps {
  note: Note;
  setNote(note: Note): void;
  saveNote(note: Note): Promise<Note>;
  t: i18n.TFunction;
  goBack(): void;
}

export const NoteForm = ({
  note,
  setNote,
  saveNote,
  t,
  goBack
}: NoteFormProps) => {
  return (
    <>
      <h1>{t(note.id ? "edit_note" : "new_note")}</h1>

      <Form
        onSubmit={(e: React.FormEvent<FormControlProps>): void => {
          e.preventDefault();
          saveNote(note);
        }}
      >
        <Form.Label>{t("title")}</Form.Label>
        <Form.Control
          type="text"
          placeholder="title"
          value={note.title || ""}
          onChange={(e: React.FormEvent<FormControlProps>): void =>
            setNote({ ...note, title: e.currentTarget.value || "" })
          }
        />

        <div className="mt-4 float-right">
          <Button onClick={() => goBack()} variant="secondary" className="mr-4">
            {t("cancel")}
          </Button>
          <Button variant="primary" type="submit">
            {t("save")}
          </Button>
        </div>
      </Form>
    </>
  );
};
