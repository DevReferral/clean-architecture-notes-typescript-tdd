import * as dotenv from 'dotenv';
dotenv.config();

export default {
  MONGO_DB_URI: process.env.MONGO_DB_URI,
  PORT: process.env.PORT,
};
