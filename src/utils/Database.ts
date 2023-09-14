import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import utils from '../utils';

dotenv.config();
export default class Database {
  private static _database: Database;
  private constructor() {
    const dbUrl = utils.MONGO_DB_URI;

    if (dbUrl) {
      mongoose
        .connect(dbUrl)
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
