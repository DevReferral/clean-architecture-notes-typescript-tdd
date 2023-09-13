import CreateNoteUseCase from '../../src/domain/interfaces/use-cases/notes/create-note-use-case';
import DeleteNoteUseCase from '../../src/domain/interfaces/use-cases/notes/delete-note-use-case';
import GetAllNotesUseCase from '../../src/domain/interfaces/use-cases/notes/get-all-notes-use-case';
import GetOneNotesUseCase from '../../src/domain/interfaces/use-cases/notes/get-one-note-use-case';
import UpdateNoteUseCase from '../../src/domain/interfaces/use-cases/notes/update-note-use-case';
import {
  NotesRequestModel,
  NotesResponseModel,
} from '../../src/domain/models/notes';

class MockCreateNoteUseCase implements CreateNoteUseCase {
  execute(note: NotesRequestModel): Promise<NotesResponseModel> {
    throw new Error('Method not implemented.');
  }
}

class MockDeleteNoteUseCase implements DeleteNoteUseCase {
  execute(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

class MockUpdateNoteUseCase implements UpdateNoteUseCase {
  expect(id: string, note: NotesRequestModel): Promise<NotesResponseModel> {
    throw new Error('Method not implemented.');
  }
}

class MockGetOneNoteUseCase implements GetOneNotesUseCase {
  execute(id: string): Promise<NotesResponseModel | null> {
    throw new Error('Method not implemented.');
  }
}

class MockGetAllNotesUseCase implements GetAllNotesUseCase {
  execute(): Promise<NotesResponseModel[]> {
    throw new Error('Method not implemented.');
  }
}

export const getMockGetOneNoteUseCase = () => {
  return new MockGetOneNoteUseCase();
};

export const getMockGetAllNotesUseCase = () => {
  return new MockGetAllNotesUseCase();
};

export const getMockUpdateNoteUseCase = () => {
  return new MockUpdateNoteUseCase();
};

export const getMockCreateNoteUseCase = () => {
  return new MockCreateNoteUseCase();
};

export const getMockDeleteNoteUseCase = () => {
  return new MockDeleteNoteUseCase();
};
