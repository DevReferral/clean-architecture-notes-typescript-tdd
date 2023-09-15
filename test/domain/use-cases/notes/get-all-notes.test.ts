import NotesRepository from '../../../../src/domain/interfaces/repositories/notes-repository';
import { NotesResponseModel } from '../../../../src/domain/models/notes';
import GetAllNotes from '../../../../src/domain/use-cases/get-all-notes';
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

  test('should return notes', async () => {
    //arrange
    const ExpectedResult: NotesResponseModel[] = getExpectedNotesOutput(3);

    //act
    jest
      .spyOn(mockNotesRepository, 'getAllNotes')
      .mockImplementation(() => Promise.resolve(ExpectedResult));

    const getAllNotesUseCase = new GetAllNotes(mockNotesRepository);

    const result = await getAllNotesUseCase.execute();

    //assert
    expect(result).toStrictEqual(ExpectedResult);
  });
});
