import * as dotenv from 'dotenv';
import mongoose, { ConnectOptions } from 'mongoose';
import utils from '../utils';

dotenv.config();
export default class Database {
  private static _database: Database;
  private constructor() {
    const DB_URL = utils.MONGO_DB_URI;
    if (process.env.NODE_ENV === 'dev') mongoose.set('debug', true);
    if (DB_URL) {
      mongoose
        .connect(DB_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        } as ConnectOptions)
        .then(() => console.log('✅ Connected with database'))
        .catch(() => console.error('❌ Not connected with database'));
    }
  }
  static connect() {
    if (this._database) {
      return this._database;
    }
    this._database = new Database();
    return (this._database = new Database());
  }
}
