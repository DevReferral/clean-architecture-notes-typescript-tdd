import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

const mongodb = MongoMemoryServer.create();
export const connect = async () => {
  const uri = await (await mongodb).getUri();
  await mongoose.connect(uri);
};
export const closeDatabase = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await (await mongodb).stop();
};
export const clearDatabase = async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany({});
  }
};
