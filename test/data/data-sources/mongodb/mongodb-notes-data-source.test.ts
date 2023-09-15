import MongoDbNotesDataSource from '../../../../src/data/data-sources/mongodb/mongodb-notes-data-source';
import NoSqlDatabaseWrapper from '../../../../src/data/interfaces/data-sources/no-sql-database-wrapper';
import { NotesResponseModel } from '../../../../src/domain/models/notes';
import { getNotesMongoDb } from '../../../helpers/notesMongoDbWrapperHelper';

describe('MongoDb DataSource', () => {
  let mockDatabase: NoSqlDatabaseWrapper;

  beforeAll(() => {
    mockDatabase = getNotesMongoDb();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getAll', () => {
    it('gets all the notes', async () => {
      //arrange
      const db = new MongoDbNotesDataSource(mockDatabase);

      const input = [
        {
          content: 'a',
          _id: '1',
          important: true,
        },
        {
          content: 'b',
          _id: '2',
          important: false,
        },
      ];

      const expected: NotesResponseModel[] = [
        {
          content: 'a',
          id: '1',
          important: true,
        },
        {
          content: 'b',
          id: '2',
          important: false,
        },
      ];

      jest
        .spyOn(mockDatabase, 'find')
        .mockImplementation(() => Promise.resolve(input));

      //act

      const result = await db.getAll();

      //assert

      expect(mockDatabase.find).toHaveBeenCalledWith({});

      expect(result).toStrictEqual(expected);
    });
  });

  describe('getOne', () => {
    it('gets one note with given id', async () => {
      //arrange
      const db = new MongoDbNotesDataSource(mockDatabase);

      const input = {
        content: 'a',
        _id: '1',
        important: true,
      };

      const expected = {
        content: 'a',
        id: '1',
        important: true,
      };

      jest
        .spyOn(mockDatabase, 'findOne')
        .mockImplementation(() => Promise.resolve(input));

      //act
      const result = await db.getOne(input._id);

      //assert
      expect(mockDatabase.findOne).toHaveBeenCalledWith(input._id);

      expect(result).toStrictEqual(expected);
    });
  });

  describe('updateOne', () => {
    it('updates a note', async () => {
      //arrange
      const db = new MongoDbNotesDataSource(mockDatabase);

      const input = {
        content: 'a',
        _id: '1',
        important: true,
      };

      const expected = {
        content: 'a',
        id: '1',
        important: true,
      };

      jest
        .spyOn(mockDatabase, 'updateOne')
        .mockImplementation(() => Promise.resolve(input));

      //act
      const result = await db.updateOne(input._id, input);

      //assert
      expect(mockDatabase.updateOne).toHaveBeenCalledWith(input._id, input);

      expect(result).toStrictEqual(expected);
    });
  });

  describe('insertOne', () => {
    it('creates a note', async () => {
      //arrange
      const db = new MongoDbNotesDataSource(mockDatabase);

      const input = {
        content: 'a',
        _id: '1',
        important: true,
      };

      const expected = {
        content: 'a',
        id: '1',
        important: true,
      };

      jest
        .spyOn(mockDatabase, 'insertOne')
        .mockImplementation(() => Promise.resolve(input));

      //act
      const result = await db.create(input);

      //assert
      expect(mockDatabase.insertOne).toHaveBeenCalledWith(input);

      expect(result).toStrictEqual(expected);
    });
  });

  describe('deleteOne', () => {
    it('deletes a note', async () => {
      //arrange
      const db = new MongoDbNotesDataSource(mockDatabase);

      const note_id = '1';

      jest
        .spyOn(mockDatabase, 'deleteOne')
        .mockImplementation(() => Promise.resolve());

      //act
      const result = await db.deleteOne(note_id);

      //assert
      expect(mockDatabase.deleteOne).toHaveBeenCalledWith(note_id);

      expect(result).toBeFalsy();
    });
  });
});
