import NotesRepository from '../../../../src/domain/interfaces/repositories/notes-repository';
import { CreateNote } from '../../../../src/domain/use-cases/create-note';

import {
  getExpectedNotesOutput,
  getMockNotesRepository,
} from '../../../helpers/notesHelper';

let mockNotesRepository: NotesRepository;

beforeEach(() => {
  jest.clearAllMocks();

  mockNotesRepository = getMockNotesRepository();
});
test('should return new note', async () => {
  //arrange

  //SUT = CreateNote class
  const createNoteUseCase = new CreateNote(mockNotesRepository);

  const expected = getExpectedNotesOutput(1)[0];

  jest
    .spyOn(mockNotesRepository, 'createNote')
    .mockImplementation(() => Promise.resolve(expected));

  //act
  const result = await createNoteUseCase.execute(expected);

  //assert
  expect(result).toEqual(expected);
});
