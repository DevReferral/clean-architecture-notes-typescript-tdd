import NotesRepository from '../../../../src/domain/interfaces/repositories/notes-repository';
import { NotesResponseModel } from '../../../../src/domain/models/notes';
import UpdateNote from '../../../../src/domain/use-cases/update-note';
import {
  getExpectedNotesOutput,
  getMockNotesRepository,
} from '../../../helpers/notesHelper';

describe('Create Note use case', () => {
  let mockNotesRepository: NotesRepository;

  beforeEach(() => {
    jest.clearAllMocks();

    mockNotesRepository = getMockNotesRepository();
  });
  test('should return true', async () => {
    //arrange
    const updateNoteUseCase = new UpdateNote(mockNotesRepository);

    const expected: NotesResponseModel = getExpectedNotesOutput(1)[0];

    jest
      .spyOn(mockNotesRepository, 'updateNote')
      .mockImplementation(() => Promise.resolve(expected));

    //act
    const result = await updateNoteUseCase.execute(expected.id, expected);

    //assert
    expect(result).toEqual(expected);
  });
});
