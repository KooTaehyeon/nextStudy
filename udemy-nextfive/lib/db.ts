import { MongoClient } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
export const connectToDatabase = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://vcro12123:05321zxc@cluster0.6po88go.mongodb.net/'
  );
  return client;
};
