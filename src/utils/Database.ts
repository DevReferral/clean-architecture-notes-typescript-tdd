import * as dotenv from 'dotenv';
import mongoose, { ConnectOptions } from 'mongoose';

dotenv.config();
export default class Database {
  private static _database: Database;
  private constructor(dbUrl: string) {
    const DB_URL = dbUrl;

    if (DB_URL) {
      mongoose
        .connect(DB_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        } as ConnectOptions)
        .then(() => console.log('✅ Connected with database :', dbUrl))
        .catch(() => console.error('❌ Not connected with database', dbUrl));
    }
  }
  static connect(dbUrl: string) {
    if (this._database) {
      return this._database;
    }
    this._database = new Database(dbUrl);
    return (this._database = new Database(dbUrl));
  }
}
