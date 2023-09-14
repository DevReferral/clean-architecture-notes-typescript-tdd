import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
export default class Database {
  private static _database: Database;
  private constructor() {
    const dbUrl = process.env.DB_URL;
    if (dbUrl) {
      mongoose
        .connect(dbUrl)
        .then(() => console.log('Connected with database'))
        .catch(() => console.log('Not connected with database'));
    }
  }
  static getInstance() {
    if (this._database) {
      return this._database;
    }
    this._database = new Database();
    return (this._database = new Database());
  }
}
