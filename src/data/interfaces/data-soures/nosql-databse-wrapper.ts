export default interface NoSqlDatabaseWrapper {
  find(query: object): Promise<any[]>;
  findOne(id: string): Promise<any | null>;
  insertOne(data: object): Promise<any>;
  updateOne(id: string, data: object): Promise<any>;
  deleteOne(id: string): Promise<void>;
}
