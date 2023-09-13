import NotesRepository from '../../../../src/domain/interfaces/repositories/notes-repository';
import DeleteNote from '../../../../src/domain/use-cases/delete-note';
import { getMockNotesRepository } from './helpers/notesHelper';

describe('Create Note use case', () => {
  let mockNotesRepository: NotesRepository;

  beforeEach(() => {
    jest.clearAllMocks();

    mockNotesRepository = getMockNotesRepository();
  });
  test('should return void', async () => {
    //arrange
    const deleteNoteUseCase = new DeleteNote(mockNotesRepository);

    const id = '0';

    jest
      .spyOn(mockNotesRepository, 'deleteNote')
      .mockImplementation(() => Promise.resolve());

    //act
    const result = await deleteNoteUseCase.execute(id);

    //assert
    expect(result).toBeFalsy();
  });
});
