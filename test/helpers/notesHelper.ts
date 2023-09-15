import NotesRepository from '../../src/domain/interfaces/repositories/notes-repository';
import { getMockCreateNoteUseCase } from './notesRouterHelper';

import {
  NotesRequestModel,
  NotesResponseModel,
} from '../../src/domain/models/notes';
import { CreateNote } from '../../src/domain/use-cases/create-note';

class MockNotesRepository implements NotesRepository {
  getNotes(): Promise<NotesResponseModel[]> {
    throw new Error('Method not implemented.');
  }
  createNote(note: NotesRequestModel): Promise<NotesResponseModel> {
    throw new Error('Method not implemented.');
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
  getAllNotes(): Promise<NotesResponseModel[]> {
    throw new Error('Method not implemented.');
  }
}

export const getMockNotesRepository = () => new MockNotesRepository();

export const getCreateNote = (mockNotesRepository) =>
  new CreateNote(mockNotesRepository);
