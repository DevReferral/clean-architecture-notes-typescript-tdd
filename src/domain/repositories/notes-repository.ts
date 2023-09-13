import { NotesDataSource } from '../../data/interfaces/notes-data-source';
import NotesRepository from '../interfaces/repositories/notes-repository';
import { NotesRequestModel, NotesResponseModel } from '../models/notes';
export default class NotesRepositoryImpl implements NotesRepository {
  constructor(private readonly notesDataSource: NotesDataSource) {}
  async createNote(note: NotesRequestModel): Promise<NotesResponseModel> {
    const result = await this.notesDataSource.create(note);
    return result;
  }
  deleteNote(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  updateNote(id: string, data: NotesRequestModel): Promise<NotesResponseModel> {
    throw new Error('Method not implemented.');
  }
  getNote(id: string): Promise<NotesResponseModel | null> {
    throw new Error('Method not implemented.');
  }
  getNotes(): Promise<NotesResponseModel[]> {
    throw new Error('Method not implemented.');
  }
}
