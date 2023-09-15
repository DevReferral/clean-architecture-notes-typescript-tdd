import MongoDbNotesDataSource from '../../../../src/data/data-sources/mongodb/mongodb-notes-data-source';
import NoSqlDatabaseWrapper from '../../../../src/data/interfaces/data-sources/no-sql-database-wrapper';
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
    const db = new MongoDbNotesDataSource(mockDatabase);
  });
});
