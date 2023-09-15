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

      jest
        .spyOn(mockDatabase, 'find')
        .mockImplementation(() => Promise.resolve(input));

      //act

      const result = await db.getAll();

      //assert

      expect(mockDatabase.find).toHaveBeenCalledWith({});

      console.log('result is', JSON.stringify(result, null, 2));
      expect(result).toStrictEqual(expected);
    });
  });

  describe('getOne', () => {
    it('gets one note with given id', async () => {
      //arrange
      const db = new MongoDbNotesDataSource(mockDatabase);

      const expected: NotesResponseModel = {
        content: 'a',
        id: '1',
        important: true,
      };

      jest
        .spyOn(mockDatabase, 'findOne')
        .mockImplementation(() => Promise.resolve(expected));

      //act

      const result = await db.getOne(expected.id);

      //assert

      expect(mockDatabase.findOne).toHaveBeenCalledWith(expected.id);

      console.log('result is', JSON.stringify(result, null, 2));
      expect(result).toStrictEqual(expected);
    });
  });
});
