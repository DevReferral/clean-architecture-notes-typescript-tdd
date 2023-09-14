export interface NoSqlDatabaseWrapper {
  find(query: object): Promise<unknown[]>;
  findOne(id: string): Promise<unknown | null>;
  insertOne(data: object): Promise<unknown>;
  updateOne(id: string, data: object): Promise<unknown>;
  deleteOne(id: string): Promise<void>;
}
