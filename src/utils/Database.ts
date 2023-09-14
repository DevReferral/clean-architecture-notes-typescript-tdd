import * as dotenv from 'dotenv';
import mongoose, { ConnectOptions } from 'mongoose';
import utils from '../utils';

dotenv.config();
export default class Database {
  static async connect() {
    const dbUrl = utils.MONGO_DB_URI!;
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
    } else {
      console.error(' ❓ MongoDbUrl not present ~');
    }
  }
}
