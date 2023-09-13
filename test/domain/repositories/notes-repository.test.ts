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
    it('creates a new note', async () => {
      // arrange
      const notesRepository = getNotesRepository(mockNotesDataSource);

      const ExpectedOutput: NotesResponseModel = {
        id: '2',
        content: 'hi',
        important: false,
      };

      const ExpectedInput: Omit<NotesResponseModel, 'id'> = {
        content: 'hi',
        important: false,
      };

      jest
        .spyOn(mockNotesDataSource, 'create')
        .mockImplementation(() => Promise.resolve(ExpectedOutput));

      // act

      const result = await notesRepository.createNote(ExpectedInput);

      // assert
      expect(mockNotesDataSource.create).toBeCalledWith(ExpectedInput);

      expect(result).toStrictEqual(ExpectedOutput);
    });
  });
});

const getNotesRepository = (notesDataSource: NotesDataSource) => {
  return new NotesRepositoryImpl(notesDataSource);
};
