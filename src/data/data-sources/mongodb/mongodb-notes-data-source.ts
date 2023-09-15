import {
  NotesRequestModel,
  NotesResponseModel,
} from '../../../domain/models/notes';
import NoSqlDatabaseWrapper from '../../interfaces/data-sources/no-sql-database-wrapper';
import NotesDataSource from '../../interfaces/data-sources/notes-data-source';

export default class MongoDbNotesDataSource implements NotesDataSource {
  constructor(private readonly db: NoSqlDatabaseWrapper) {}
  async getAll(): Promise<NotesResponseModel[]> {
    const result = await this.db.find({});
    console.log('The items are ', JSON.stringify(result, null, 2));
    return result.map((item) => ({
      id: item.id.toString(),
      content: item.content,
      important: item.important,
    }));
  }
  async getOne(id: string): Promise<NotesResponseModel | null> {
    const item = await this.db.findOne(id);

    return {
      id: item._id.toString(),
      content: item.content,
      important: item.important,
    };
  }
  async create(note: NotesRequestModel): Promise<NotesResponseModel> {
    const item = await this.db.insertOne(note);

    return {
      id: item._id.toString(),
      content: item.content,
      important: item.important,
    };
  }
  async updateOne(
    id: string,
    data: NotesRequestModel
  ): Promise<NotesResponseModel> {
    const item = await this.db.updateOne(id, data);

    return {
      id: item._id.toString(),
      content: item.content,
      important: item.important,
    };
  }
  async deleteOne(id: string) {
    await this.db.deleteOne(id);
  }
}
