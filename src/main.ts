import MongoDbNotesDataSource from './data/data-sources/mongodb/mongodb-notes-data-source';
import Note from './data/data-sources/mongodb/schemas/Note';
import NoSqlDatabaseWrapper from './data/interfaces/data-sources/nosql-database-wrapper';

import Database from './utils/Database';

async function getMongoDS() {
  Database.connect();

  const notesDatabase: NoSqlDatabaseWrapper = {
    find: function (query: object): Promise<any[]> {
      return Note.find(query);
    },
    findOne: function (id: string): Promise<any> {
      return Note.findOne({ _id: id });
    },
    insertOne: function (data: object): Promise<any> {
      return Note.create(data);
    },
    updateOne: function (id: string, data: object): Promise<any> {
      return Note.findByIdAndUpdate(id, data);
    },
    deleteOne: function (id: string): void {
      Note.findByIdAndRemove(id);
    },
  };

  return new MongoDbNotesDataSource(notesDatabase);
}
