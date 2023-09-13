import { NotesDataSource } from '../../../src/data/interfaces/notes-data-source';
import {
  NotesRequestModel,
  NotesResponseModel,
} from '../../../src/domain/models/notes';
import NotesRepositoryImpl from '../../../src/domain/repositories/notes-repository';

describe('contacts repository', () => {
  class MockNotesDataSource implements NotesDataSource {
    create(note: NotesRequestModel): Promise<NotesResponseModel> {
      throw new Error('Method not implemented.');
    }
    getOne(id: string): Promise<NotesResponseModel | null> {
      throw new Error('Method not implemented.');
    }
    updateOne(
      id: string,
      data: NotesRequestModel
    ): Promise<NotesResponseModel> {
      throw new Error('Method not implemented.');
    }
    deleteOne(id: string): Promise<void> {
      throw new Error('Method not implemented.');
    }
  }

  let mockNotesDataSource: NotesDataSource;

  beforeEach(() => {
    jest.clearAllMocks();
    mockNotesDataSource = new MockNotesDataSource();
  });

  it('is defined', () => {
    // arrange

    const sut = getNotesRepository(mockNotesDataSource);
    // act

    // assert
  });
});

const getNotesRepository = (notesDataSource: NotesDataSource) => {
  return new NotesRepositoryImpl(notesDataSource);
};
