import NotesRepository from '../../../../src/domain/interfaces/repositories/notes-repository';

import {
  NotesRequestModel,
  NotesResponseModel,
} from '../../../../src/domain/models/notes';
import GetOneNote from '../../../../src/domain/use-cases/get-one-note';

describe('Get all notes use case', () => {
  class MockNotesRepository implements NotesRepository {
    createNote(note: NotesRequestModel): Promise<NotesResponseModel> {
      throw new Error('Method not implemented.');
    }
    deleteNote(id: string): Promise<void> {
      throw new Error('Method not implemented.');
    }
    updateNote(
      id: string,
      data: NotesRequestModel
    ): Promise<NotesResponseModel> {
      throw new Error('Method not implemented.');
    }
    getNote(id: string): Promise<NotesResponseModel | null> {
      throw new Error('Method not implemented.');
    }
    getNotes(): Promise<NotesResponseModel[]> {
      throw new Error('Method not implemented.');
    }
  }

  let mockNotesRepository: MockNotesRepository;

  beforeEach(() => {
    jest.clearAllMocks();

    mockNotesRepository = new MockNotesRepository();
  });

  describe('when note found', () => {
    test('should return notes', async () => {
      //arrange
      const expectedResult: NotesResponseModel = {
        id: '1',
        content: 'first',
        important: true,
      };
      //act
      jest
        .spyOn(mockNotesRepository, 'getNote')
        .mockImplementation(() => Promise.resolve(expectedResult));

      const getOneNoteUseCase = new GetOneNote(mockNotesRepository);

      const result = await getOneNoteUseCase.execute(expectedResult.id);

      //assert
      expect(result).toStrictEqual(expectedResult);
    });
  });

  describe('when note not found', () => {
    test('should return null', async () => {
      //arrange
      const expectedResult: NotesResponseModel = {
        id: '1',
        content: 'first',
        important: true,
      };
      //act
      jest
        .spyOn(mockNotesRepository, 'getNote')
        .mockImplementation(() => Promise.resolve(null));

      const getOneNoteUseCase = new GetOneNote(mockNotesRepository);

      const result = await getOneNoteUseCase.execute(expectedResult.id);

      //assert
      expect(result).toStrictEqual(null);
    });
  });
});
