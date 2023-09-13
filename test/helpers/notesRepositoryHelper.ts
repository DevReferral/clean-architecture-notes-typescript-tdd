import { NotesDataSource } from '../../src/data/interfaces/notes-data-source';

import {
  NotesRequestModel,
  NotesResponseModel,
} from '../../src/domain/models/notes';
class MockNotesDataSource implements NotesDataSource {
  getAll(): Promise<NotesResponseModel[]> {
    throw new Error('Method not implemented.');
  }
  create(note: NotesRequestModel): Promise<NotesResponseModel> {
    throw new Error('Method not implemented.');
  }
  getOne(id: string): Promise<NotesResponseModel | null> {
    throw new Error('Method not implemented.');
  }
  updateOne(id: string, data: NotesRequestModel): Promise<NotesResponseModel> {
    throw new Error('Method not implemented.');
  }
  deleteOne(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
export const getMockNotesDataSource = () => new MockNotesDataSource();
