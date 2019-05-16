import React from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NoteList = ({ notes, editNote, deleteNote, t, createNote }) => {
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
                  onClick={deleteNote}
                >
                  {t("remove_note")}
                </Button>
                <Button
                  variant="light"
                  size="sm"
                  className="float-right mr-4"
                  onClick={editNote}
                >
                  {t("edit_note")}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
