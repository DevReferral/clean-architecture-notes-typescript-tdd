import MongoDbNotesDataSource from './data/data-sources/mongodb/mongodb-notes-data-source';
import Note from './data/data-sources/mongodb/schemas/Note';
import NoSqlDatabaseWrapper from './data/interfaces/data-sources/no-sql-database-wrapper';
import NotesRepositoryImpl from './domain/repositories/notes-repository';
import { CreateNote } from './domain/use-cases/create-note';
import DeleteNote from './domain/use-cases/delete-note';
import GetAllNotes from './domain/use-cases/get-all-notes';
import GetOneNote from './domain/use-cases/get-one-note';
import UpdateNote from './domain/use-cases/update-note';
import NotesRouter from './presentation/routers/notes-router';
import server from './server';

import utils from './utils';
import Database from './utils/Database';

async function getMongoDS() {
  Database.connect(utils.MONGO_DB_URI!);

  const notesDatabase: NoSqlDatabaseWrapper = {
    find: async function (query: object): Promise<any[]> {
      const notes = await Note.find(query);
      return notes;
    },
    findOne: async function (id: string): Promise<any> {
      const note = await Note.findOne({ _id: id });
      return note;
    },
    insertOne: async function (data: object): Promise<any> {
      const note = await Note.create(data);

      return note;
    },
    updateOne: async function (id: string, data: object): Promise<any> {
      const note = await Note.findOneAndUpdate({ _id: id }, data, {
        new: true,
      });
      return note;
    },
    deleteOne: async function (id: string): Promise<void> {
      await Note.deleteOne({ _id: id });
    },
  };

  return new MongoDbNotesDataSource(notesDatabase);
}

(async () => {
  const dataSource = await getMongoDS();

  const notesRouter = NotesRouter(
    new DeleteNote(new NotesRepositoryImpl(dataSource)),
    new CreateNote(new NotesRepositoryImpl(dataSource)),
    new UpdateNote(new NotesRepositoryImpl(dataSource)),
    new GetAllNotes(new NotesRepositoryImpl(dataSource)),
    new GetOneNote(new NotesRepositoryImpl(dataSource))
  );

  server.use('/notes', notesRouter);
  server.listen(utils.PORT, () => console.log(`Running on ${utils.PORT}`));
})();
