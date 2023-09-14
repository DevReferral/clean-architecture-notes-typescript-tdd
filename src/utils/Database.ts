import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import utils from '.';
dotenv.config();
export default class Database {
  private static _database: Database;
  private constructor() {
    const dbUrl = utils.MONGO_DB_URI;
    console.log('db url is', dbUrl);
    if (dbUrl) {
      mongoose
        .connect(dbUrl)
        .then(() => console.log('Connected with database'))
        .catch(() => console.log('Not connected with database'));
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
