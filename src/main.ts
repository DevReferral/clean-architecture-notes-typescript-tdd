import MongoDbNotesDataSource from './data/data-sources/mongodb/mongodb-notes-data-source';
import Note from './data/data-sources/mongodb/schemas/Note';
import NoSqlDatabaseWrapper from './data/interfaces/data-sources/nosql-database-wrapper';
import NotesRepositoryImpl from './domain/repositories/notes-repository';
import { CreateNote } from './domain/use-cases/create-note';
import DeleteNote from './domain/use-cases/delete-note';
import GetAllNotes from './domain/use-cases/get-all-notes';
import GetOneNote from './domain/use-cases/get-one-note';
import UpdateNote from './domain/use-cases/update-note';
import NotesRouter from './presentation/routers/notes-router';
import server from './server';

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
  server.listen(4000, () => console.log('Running on http://localhost:4000'));
})();
