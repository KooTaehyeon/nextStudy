import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import {
  connectDataBase,
  insertDocument,
  getAllDocuments,
} from '../../../helpers/db-util';
const uri =
  'mongodb+srv://vcro12123:05321zxc@cluster0.6po88go.mongodb.net/comments';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const eventId = req.query.eventId;
  let client;

  try {
    client = await connectDataBase(uri);
  } catch (error) {
    res.status(500).json({ message: 'Connecting to the database failed!' });

    return;
  }

  client.close;

  if (req.method === 'POST') {
    const { email, name, text } = req.body;
    if (
      !email.includes('@' || !name || name.trim() === '' || text.trim() === '')
    ) {
      res.status(422).json({ message: 'Invalid input' });
      return;
    }

    const newComment: any = {
      name: name,
      email: email,
      text: text,
      eventId: eventId,
    };

    let result;

    try {
      result = await insertDocument(client, 'comments', newComment);
      newComment._id = result.insertedId;
      res.status(201).json({ message: 'Added comment.', comment: newComment });
    } catch (error) {
      res.status(500).json({ message: 'Inserting comment failed!' });
    }
  }
  if (req.method === 'GET') {
    try {
      const documents = await getAllDocuments(client, 'comments', { _id: -1 });
      console.log(documents, 'documents');

      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: 'Getting comments failed.' });
    }
  }
  // res.status(200).json({ comment: documents });
  client.close;
}
export default handler;
