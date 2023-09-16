import NotesRepository from '../../../../src/domain/interfaces/repositories/notes-repository';

import { NotesResponseModel } from '../../../../src/domain/models/notes';
import GetOneNote from '../../../../src/domain/use-cases/get-one-note';
import {
  getExpectedNotesOutput,
  getMockNotesRepository,
} from '../../../helpers/notesHelper';

describe('Get all notes use case', () => {
  let mockNotesRepository: NotesRepository;

  beforeEach(() => {
    jest.clearAllMocks();

    mockNotesRepository = getMockNotesRepository();
  });

  describe('when note found', () => {
    test('should return notes', async () => {
      //arrange
      const expectedResult: NotesResponseModel = getExpectedNotesOutput(1)[0];
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
      const expectedResult: NotesResponseModel = getExpectedNotesOutput(1)[0];
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
