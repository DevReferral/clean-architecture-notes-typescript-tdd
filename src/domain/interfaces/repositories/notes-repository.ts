import { NotesRequestModel, NotesResponseModel } from '../../models/notes';

export default interface NotesRepository {
  createNote(note: NotesRequestModel): void;
  deleteNote(id: number): void;
  updateNote(id: number, data: NotesRequestModel): void;
  getNote(id: number): Promise<NotesResponseModel | null>;
  getNotes(): Promise<NotesResponseModel[]>;
}
