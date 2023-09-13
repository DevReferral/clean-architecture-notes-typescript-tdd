import { NotesRequestModel, NotesResponseModel } from '../../models/notes';

export default interface NotesRepository {
  createNote(note: NotesRequestModel): Promise<NotesResponseModel>;
  deleteNote(id: string): Promise<void>;
  updateNote(id: string, data: NotesRequestModel): Promise<NotesResponseModel>;
  getNote(id: string): Promise<NotesResponseModel | null>;
  getAllNotes(): Promise<NotesResponseModel[]>;
}
