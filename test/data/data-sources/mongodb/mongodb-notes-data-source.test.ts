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
      jest
        .spyOn(mockDatabase, 'find')
        .mockImplementation(() => Promise.resolve(expected));
    });
  });
});
