import NotesDataSource from '../../../src/data/interfaces/data-sources/notes-data-source';
import { NotesResponseModel } from '../../../src/domain/models/notes';
import NotesRepositoryImpl from '../../../src/domain/repositories/notes-repository';
import { getMockNotesDataSource } from '../../helpers/notesRepositoryHelper';

describe('notes repository', () => {
  let mockNotesDataSource: NotesDataSource;

  beforeEach(() => {
    jest.clearAllMocks();
    mockNotesDataSource = getMockNotesDataSource();
  });

  describe('create note', () => {
    it('creates a new note', async () => {
      // arrange
      const notesRepository = getNotesRepository(mockNotesDataSource);

      const ExpectedOutput: NotesResponseModel = {
        id: '2',
        content: 'hi',
        important: false,
      };

      const ExpectedInput: Omit<NotesResponseModel, 'id'> = {
        content: 'hi',
        important: false,
      };

      jest
        .spyOn(mockNotesDataSource, 'create')
        .mockImplementation(() => Promise.resolve(ExpectedOutput));

      // act

      const result = await notesRepository.createNote(ExpectedInput);

      // assert
      expect(mockNotesDataSource.create).toBeCalledWith(ExpectedInput);

      expect(result).toStrictEqual(ExpectedOutput);
    });
  });

  describe('update note', () => {
    it('updates a note', async () => {
      // arrange
      const notesRepository = getNotesRepository(mockNotesDataSource);

      const ExpectedOutput: NotesResponseModel = {
        id: '2',
        content: 'changed',
        important: true,
      };

      const ExpectedInput: Omit<NotesResponseModel, 'id'> = {
        content: 'original',
        important: false,
      };

      jest
        .spyOn(mockNotesDataSource, 'updateOne')
        .mockImplementation(() => Promise.resolve(ExpectedOutput));

      // act

      const result = await notesRepository.updateNote('2', ExpectedInput);

      // assert
      expect(mockNotesDataSource.updateOne).toBeCalledWith('2', ExpectedInput);

      expect(result).toStrictEqual(ExpectedOutput);
    });
  });

  describe('delete note', () => {
    it('gives void when deleting node with given id', async () => {
      // arrange
      const notesRepository = getNotesRepository(mockNotesDataSource);

      jest
        .spyOn(mockNotesDataSource, 'deleteOne')
        .mockImplementation(() => Promise.resolve());

      // act

      const result = await notesRepository.deleteNote('1');

      // assert
      expect(mockNotesDataSource.deleteOne).toBeCalledWith('1');

      expect(result).toBeFalsy();
    });
  });

  describe('get one', () => {
    describe('when note with id is present', () => {
      it('gets note with given id', async () => {
        // arrange
        const notesRepository = getNotesRepository(mockNotesDataSource);

        const ExpectedOutput: NotesResponseModel = {
          id: '2',
          content: 'changed',
          important: true,
        };

        jest
          .spyOn(mockNotesDataSource, 'getOne')
          .mockImplementation(() => Promise.resolve(ExpectedOutput));

        // act

        const result = await notesRepository.getNote(ExpectedOutput.id);

        // assert
        expect(mockNotesDataSource.getOne).toBeCalledWith(ExpectedOutput.id);

        expect(result).toStrictEqual(ExpectedOutput);
      });
    });

    describe('when not with id is not present', () => {
      it('gets null as return value', async () => {
        // arrange
        const notesRepository = getNotesRepository(mockNotesDataSource);

        const ExpectedOutput: NotesResponseModel = {
          id: '2',
          content: 'changed',
          important: true,
        };

        jest
          .spyOn(mockNotesDataSource, 'getOne')
          .mockImplementation(() => Promise.resolve(null));

        // act

        const result = await notesRepository.getNote(ExpectedOutput.id);

        // assert
        expect(mockNotesDataSource.getOne).toBeCalledWith(ExpectedOutput.id);

        expect(result).toEqual(null);
      });
    });
  });

  describe('get all notes', () => {
    it('get all notes ', async () => {
      // arrange
      const notesRepository = getNotesRepository(mockNotesDataSource);

      const ExpectedOutput: NotesResponseModel[] = [
        {
          id: '1',
          content: 'first',
          important: false,
        },
        {
          id: '2',
          content: 'changed',
          important: true,
        },
      ];

      jest
        .spyOn(mockNotesDataSource, 'getAll')
        .mockImplementation(() => Promise.resolve(ExpectedOutput));

      // act

      const result = await notesRepository.getAllNotes();

      // assert

      expect(result).toStrictEqual(ExpectedOutput);
    });
  });
});

const getNotesRepository = (notesDataSource: NotesDataSource) => {
  return new NotesRepositoryImpl(notesDataSource);
};
