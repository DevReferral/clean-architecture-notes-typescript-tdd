import NoSqlDatabaseWrapper from '../../src/data/interfaces/data-sources/no-sql-database-wrapper';

const notesMongoDb: NoSqlDatabaseWrapper = {
  find: function (query: object): Promise<any[]> {
    throw new Error('Function not implemented.');
  },
  findOne: function (id: string): Promise<any> {
    throw new Error('Function not implemented.');
  },
  insertOne: function (data: object): Promise<any> {
    throw new Error('Function not implemented.');
  },
  updateOne: function (id: string, data: object): Promise<any> {
    throw new Error('Function not implemented.');
  },
  deleteOne: function (id: string): Promise<void> {
    throw new Error('Function not implemented.');
  },
};

export const getNotesMongoDb = () => {
  return notesMongoDb;
};
