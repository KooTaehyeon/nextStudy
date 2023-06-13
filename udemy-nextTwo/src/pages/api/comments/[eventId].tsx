import type { NextApiRequest, NextApiResponse } from 'next';
function handler(req: NextApiRequest, res: NextApiResponse) {
  const eventId = req.query.eventId;
  if (req.method === 'POST') {
    const { email, name, text } = req.body;
    if (
      !email.includes('@' || !name || name.trim() === '' || text.trim() === '')
    ) {
      res.status(422).json({ message: 'Invalid input' });
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      name: name,
      email: email,
      text: text,
    };
    console.log(newComment);
    res.status(201).json({ message: 'Added comment', comment: newComment });
  }
  if (req.method === 'GET') {
    const dummyList = [
      {
        id: 'c1',
        name: '태현',
        // email: 'vcro12123@naver.com',
        text: 'next 공부중',
      },
      {
        id: 'c2',
        name: '태현2',
        // email: 'vcro12123@naver.com',
        text: 'next 공부중입니다',
      },
    ];
    res.status(200).json({ comment: dummyList });
  }
}
export default handler;
