import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, ServerApiVersion } from 'mongodb';
const uri =
  'mongodb+srv://vcro12123:05321zxc@cluster0.6po88go.mongodb.net/newsletter';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({ message: 'invalid email address.' });
      return;
    }
    const client = await MongoClient.connect(uri);
    const db = client.db();
    await db.collection('emails').insertOne({
      email: userEmail,
    });
    client.close;
    console.log(userEmail);
    res.status(201).json({ message: '성공' });
  }
}

export default handler;
