import type { NextApiRequest, NextApiResponse } from 'next';
import { connectDataBase, insertDocument } from '../../helpers/db-util';

const uri =
  'mongodb+srv://vcro12123:05321zxc@cluster0.6po88go.mongodb.net/events';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({ message: 'invalid email address.' });
      return;
    }
    let client: any;
    try {
      client = await connectDataBase(uri);
    } catch (err) {
      res.status(500).json({ message: 'DB 불러오기실패' });
      return;
    }
    try {
      await insertDocument(client, 'newletter', { email: userEmail });
      client.close;
    } catch (err) {
      res.status(500).json({ message: '데이터 insert 실패 ' });
      return;
    }

    console.log(userEmail);
    res.status(201).json({ message: '성공' });
  }
}

export default handler;
