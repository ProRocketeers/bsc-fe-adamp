import { get, post, put, del } from "./network";

export const getNotes = async () => await get("notes");

export const getNote = async id => await get(`notes/${id}`);

export const createNote = async note => await post("notes", note);

export const updateNote = async note => await put(`notes/${note.id}`, note);

export const removeNote = async id => await del(`notes/${id}`);
