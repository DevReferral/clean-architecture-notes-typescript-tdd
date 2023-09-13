import { NotesDataSource } from '../../data/interfaces/notes-data-source';
import NotesRepository from '../interfaces/repositories/notes-repository';
import { NotesRequestModel, NotesResponseModel } from '../models/notes';
export default class NotesRepositoryImpl implements NotesRepository {
  constructor(private readonly notesDataSource: NotesDataSource) {}
  async getAllNotes(): Promise<NotesResponseModel[]> {
    const result = await this.notesDataSource.getAll();

    return result;
  }
  async createNote(note: NotesRequestModel): Promise<NotesResponseModel> {
    const result = await this.notesDataSource.create(note);
    return result;
  }
  async deleteNote(id: string): Promise<void> {
    const result = await this.notesDataSource.deleteOne(id);
    return result;
  }
  async updateNote(
    id: string,
    data: NotesRequestModel
  ): Promise<NotesResponseModel> {
    const result = await this.notesDataSource.updateOne(id, data);
    return result;
  }
  async getNote(id: string): Promise<NotesResponseModel | null> {
    const result = await this.notesDataSource.getOne(id);

    return result;
  }
}
