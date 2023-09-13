import NotesRepository from '../../../../src/domain/interfaces/repositories/notes-repository';
import {
  NotesRequestModel,
  NotesResponseModel,
} from '../../../../src/domain/models/notes';
import UpdateNote from '../../../../src/domain/use-cases/update-note';

describe('Create Note use case', () => {
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
