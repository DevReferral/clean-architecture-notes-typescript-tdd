import NotesRepository from '../../../../src/domain/interfaces/repositories/notes-repository';
import {
  NotesRequestModel,
  NotesResponseModel,
} from '../../../../src/domain/models/notes';
import DeleteNote from '../../../../src/domain/use-cases/delete-note';

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
