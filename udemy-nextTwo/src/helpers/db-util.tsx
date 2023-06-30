import { MongoClient } from 'mongodb';
import * as mongo from 'mongodb';
interface Database {
  [x: string]: any;
  client?: mongo.MongoClient;
}

export const connectDataBase = async (url: string) => {
  const client = await MongoClient.connect(url);
  return client;
};
export const insertDocument = async (
  client: Database,
  collection: string,
  document: {}
) => {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  console.log(result, 'resultresult');

  return result;
};

export async function getAllDocuments(
  client: Database,
  collection: string,
  sort: {}
) {
  const db = client.db();

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
}
