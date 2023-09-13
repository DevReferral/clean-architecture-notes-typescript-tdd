import NotesRepository from '../../../../src/domain/interfaces/repositories/notes-repository';
import { NotesResponseModel } from '../../../../src/domain/models/notes';
import UpdateNote from '../../../../src/domain/use-cases/update-note';
import { getMockNotesRepository } from '../../../helpers/notesHelper';

describe('Create Note use case', () => {
  let mockNotesRepository: NotesRepository;

  beforeEach(() => {
    jest.clearAllMocks();

    mockNotesRepository = getMockNotesRepository();
  });
  test('should return true', async () => {
    //arrange
    const updateNoteUseCase = new UpdateNote(mockNotesRepository);

    const expected: NotesResponseModel = {
      id: '0',
      content: 'new content',
      important: true,
    };

    jest
      .spyOn(mockNotesRepository, 'updateNote')
      .mockImplementation(() => Promise.resolve(expected));

    //act
    const result = await updateNoteUseCase.expect(expected.id, expected);

    //assert
    expect(result).toEqual(expected);
  });
});
