import * as dotenv from 'dotenv';
import mongoose, { ConnectOptions } from 'mongoose';
import utils from '../utils';

dotenv.config();
export default class Database {
  private static _database: Database;
  private constructor() {
    const dbUrl = utils.MONGO_DB_URI!;

      (async () => {
            if (dbUrl) {
        await mongoose.connect(dbUrl, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        } as ConnectOptions);

        const db = mongoose.connection;

        db.on(
          'error',
          console.error.bind(
            console,
            'connection error:❌ Not connected with database'
          )
        );
        db.once('open', () => console.log('✅ Connected with database'));
          }
      })();


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
