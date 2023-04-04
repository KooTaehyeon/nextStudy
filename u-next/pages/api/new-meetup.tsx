import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
const NewMeetupApi = async (req: any, res: any) => {
  if (req.method === 'POST') {
    const data = req.body;
    const { title, image, address, descripton } = data;

    const client = await MongoClient.connect(
      'mongodb+srv://vcro12123:05321zxc@cluster0.6po88go.mongodb.net/meetups'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    try {
      const result = await meetupsCollection.insertOne(data);
      console.log(result);
    } catch (e) {
      console.log(e);
    }

    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
};

export default NewMeetupApi;
