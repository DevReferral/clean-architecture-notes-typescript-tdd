import { NotesDataSource } from '../../../src/data/interfaces/notes-data-source';
import {
  NotesRequestModel,
  NotesResponseModel,
} from '../../../src/domain/models/notes';
import NotesRepositoryImpl from '../../../src/domain/repositories/notes-repository';

describe('notes repository', () => {
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

  describe('create note', () => {
    it('is defined', () => {
      // arrange
      const sut = getNotesRepository(mockNotesDataSource);
      const Expected: NotesResponseModel = {
        id: '2',
        content: 'hi',
        important: false,
      };

      jest
        .spyOn(sut, 'createNote')
        .mockImplementation(() => Promise.resolve(Expected));

      // act

      // assert
    });
  });
});

const getNotesRepository = (notesDataSource: NotesDataSource) => {
  return new NotesRepositoryImpl(notesDataSource);
};
