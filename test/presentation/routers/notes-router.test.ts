import CreateNoteUseCase from '../../../src/domain/interfaces/use-cases/notes/create-note-use-case';
import DeleteNoteUseCase from '../../../src/domain/interfaces/use-cases/notes/delete-note-use-case';
import GetAllNotesUseCase from '../../../src/domain/interfaces/use-cases/notes/get-all-notes-use-case';
import GetOneNotesUseCase from '../../../src/domain/interfaces/use-cases/notes/get-one-note-use-case';
import UpdateNoteUseCase from '../../../src/domain/interfaces/use-cases/notes/update-note-use-case';

describe('Note Router', () => {
  let mockDeleteNoteUseCase: DeleteNoteUseCase;
  let mockCreateNoteUseCase: CreateNoteUseCase;
  let mockUpdateNoteUseCase: UpdateNoteUseCase;
  let mockGelAllNotesUseCase: GetAllNotesUseCase;
  let mockGetOneNoteUseCase: GetOneNotesUseCase;

  beforeAll(() => {});

  describe('first', () => {
    it('first', () => {
      expect(true).toBeTruthy();
    });
  });
});
