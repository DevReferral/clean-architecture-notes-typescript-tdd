import CreateNoteUseCase from '../../../src/domain/interfaces/use-cases/notes/create-note-use-case';
import DeleteNoteUseCase from '../../../src/domain/interfaces/use-cases/notes/delete-note-use-case';
import GetAllNotesUseCase from '../../../src/domain/interfaces/use-cases/notes/get-all-notes-use-case';
import GetOneNotesUseCase from '../../../src/domain/interfaces/use-cases/notes/get-one-note-use-case';
import UpdateNoteUseCase from '../../../src/domain/interfaces/use-cases/notes/update-note-use-case';
import { NotesResponseModel } from '../../../src/domain/models/notes';
import NotesRouter from '../../../src/presentation/routers/notes-router';
import server from '../../../src/server';
import {
  getMockCreateNoteUseCase,
  getMockDeleteNoteUseCase,
  getMockGetAllNotesUseCase,
  getMockGetOneNoteUseCase,
  getMockUpdateNoteUseCase,
} from '../../helpers/notesRouterHelper';

describe('Note Router', () => {
  let mockDeleteNoteUseCase: DeleteNoteUseCase;
  let mockCreateNoteUseCase: CreateNoteUseCase;
  let mockUpdateNoteUseCase: UpdateNoteUseCase;
  let mockGetAllNotesUseCase: GetAllNotesUseCase;
  let mockGetOneNoteUseCase: GetOneNotesUseCase;

  beforeAll(() => {
    mockDeleteNoteUseCase = getMockDeleteNoteUseCase();
    mockCreateNoteUseCase = getMockCreateNoteUseCase();
    mockUpdateNoteUseCase = getMockUpdateNoteUseCase();
    mockGetAllNotesUseCase = getMockGetAllNotesUseCase();
    mockGetOneNoteUseCase = getMockGetOneNoteUseCase();

    server.use(
      '/notes',
      NotesRouter(
        mockDeleteNoteUseCase,
        mockCreateNoteUseCase,
        mockUpdateNoteUseCase,
        mockGetAllNotesUseCase,
        mockGetOneNoteUseCase
      )
    );
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /note', () => {
    it('should return 200 with data', () => {
      const expectedData: NotesResponseModel[] = [
        { content: 'c', id: '1', important: true },
        { content: 'd', id: '2', important: false },
      ];
    });
  });
});
