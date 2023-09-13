import NotesRepository from '../../../../src/domain/interfaces/repositories/notes-repository';
import {
  NotesRequestModel,
  NotesResponseModel,
} from '../../../../src/domain/models/notes';
import { CreateNote } from '../../../../src/domain/use-cases/create-note';

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

  let mockNotesRepository: NotesRepository;

  beforeEach(() => {
    jest.clearAllMocks();

    mockNotesRepository = new MockNotesRepository();
  });
  test('should return true', async () => {
    //arrange
    const getAllNotesUseCase = new CreateNote(mockNotesRepository);

    const expected: NotesResponseModel = {
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
});
