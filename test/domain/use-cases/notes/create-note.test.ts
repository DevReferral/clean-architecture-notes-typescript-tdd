import NotesRepository from '../../../../src/domain/interfaces/repositories/notes-repository';

import {
  getCreateNote,
  getMockNotesRepository,
} from '../../../helpers/notesHelper';

let mockNotesRepository: NotesRepository;

beforeEach(() => {
  jest.clearAllMocks();

  mockNotesRepository = getMockNotesRepository();
});
test('should return new note', async () => {
  //arrange
  const createNoteUseCase = getCreateNote(mockNotesRepository);

  const expected = {
    id: '0',
    content: '',
    important: false,
  };

  jest
    .spyOn(mockNotesRepository, 'createNote')
    .mockImplementation(() => Promise.resolve(expected));

  //act
  const result = await createNoteUseCase.execute(expected);

  //assert
  expect(result).toEqual(expected);
});
