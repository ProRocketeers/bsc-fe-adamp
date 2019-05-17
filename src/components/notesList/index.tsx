import React from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Note } from "../../models/notes";
import i18n from "i18next";

interface NoteListProps {
  notes: Array<Note>;
  deleteNote(id: number): Promise<null>;
  t: i18n.TFunction;
}

export const NotesList = ({ notes, deleteNote, t }: NoteListProps) => {
  return (
    <>
      <h1>{t("list_notes")}</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>{t("title")}</th>
            <th>
              <Link to={`/new/`}>
                <Button variant="light" size="sm" className="float-right">
                  {t("new_note")}
                </Button>
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {notes.map(note => (
            <tr key={note.id}>
              <td>
                <Link to={`/note/${note.id}`}>{note.title}</Link>
              </td>
              <td>
                <Button
                  variant="light"
                  size="sm"
                  className="float-right"
                  onClick={() => note.id && deleteNote(note.id)}
                >
                  {t("remove_note")}
                </Button>
                <Link to={`/note/${note.id}/edit`}>
                  <Button
                    variant="light"
                    size="sm"
                    className="float-right mr-4"
                  >
                    {t("edit_note")}
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
