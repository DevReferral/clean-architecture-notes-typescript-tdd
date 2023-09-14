export interface NoSqlDatabaseWrapper {
  find(query: object): Promise<any>;
  findOne(id: string): Promise<any | null>;
}
