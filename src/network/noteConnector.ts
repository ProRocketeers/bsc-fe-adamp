import { get, post, put, del } from "./network";
import { Note, NoteList } from "../models/notes";

export const getNotes = async (): Promise<NoteList> =>
  get("notes") as Promise<NoteList>;

export const getNote = async (id: string | number): Promise<Note> =>
  get(`notes/${id}`) as Promise<Note>;

export const createNote = async (note: Note): Promise<Note> =>
  post("notes", note) as Promise<Note>;

export const updateNote = async (note: Note): Promise<Note> =>
  (await put(`notes/${note.id}`, note)) as Promise<Note>;

export const removeNote = async (id: string | number): Promise<null> =>
  del(`notes/${id}`);
