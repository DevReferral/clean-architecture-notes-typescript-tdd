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
    it('is defined', async () => {
      // arrange
      const notesRepository = getNotesRepository(mockNotesDataSource);

      const Expected: NotesResponseModel = {
        id: '2',
        content: 'hi',
        important: false,
      };

      jest
        .spyOn(mockNotesDataSource, 'create')
        .mockImplementation(() => Promise.resolve(Expected));

      // act

      const result = await notesRepository.createNote(Expected);

      // assert

      expect(result).toStrictEqual(Expected);
    });
  });
});

const getNotesRepository = (notesDataSource: NotesDataSource) => {
  return new NotesRepositoryImpl(notesDataSource);
};
