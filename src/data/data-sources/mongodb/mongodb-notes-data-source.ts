import {
  NotesRequestModel,
  NotesResponseModel,
} from '../../../domain/models/notes';
import NoSqlDatabaseWrapper from '../../interfaces/data-soures/nosql-databse-wrapper';
import { NotesDataSource } from '../../interfaces/data-soures/notes-data-source';

export default class MongoDbNotesDataSource implements NotesDataSource {
  constructor(private readonly db: NoSqlDatabaseWrapper) {}
  async getAll(): Promise<NotesResponseModel[]> {
    const result = await this.db.find({});

    return result.map((item) => ({
      id: item._id,
      content: item.content,
      important: item.important,
    }));
  }
  async getOne(id: string): Promise<NotesResponseModel | null> {
    const item = await this.db.findOne(id);

    return {
      id: item._id.toString(),
      content: item.name,
      important: item.important,
    };
  }
  async create(note: NotesRequestModel): Promise<NotesResponseModel> {
    const item = await this.db.insertOne(note);

    return {
      id: item._id.toString(),
      content: item.name,
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
      content: item.name,
      important: item.important,
    };
  }
  deleteOne(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
