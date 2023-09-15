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
test('should return true', async () => {
  //arrange
  const getAllNotesUseCase = getCreateNote(mockNotesRepository);

  const expected = {
    id: '0',
    content: '',
    important: false,
  };

  jest
    .spyOn(mockNotesRepository, 'createNote')
    .mockImplementation(() => Promise.resolve(expected));

  //act
  const result = await getAllNotesUseCase.execute(expected);

  //assert
  expect(result).toEqual(expected);
});
